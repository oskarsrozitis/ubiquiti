/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@components/Layout/Header";
import SingleProductNav from "@components/Layout/SingleProductNav";
import Loading from "@common/Loading";

const SingleProductView: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiImageUrl = import.meta.env.VITE_IMAGE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        const foundProduct = data.devices.find(
          (device: any) => device.id === productId
        );
        if (foundProduct) {
          setProduct({
            id: foundProduct.id,
            productLine: foundProduct.line,
            name: foundProduct.product.name,
            imageUrl: `${apiImageUrl}/${foundProduct.icon.id}_257x257.png`,
            shortnames: foundProduct.shortnames,
            sysid: foundProduct.sysid,
            power: foundProduct.unifi?.network?.power,
            ports: {
              standard: foundProduct.unifi?.network?.ports?.standard,
              plus: foundProduct.unifi?.network?.ports?.plus,
            },
          });
          console.log(foundProduct);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId, apiUrl, apiImageUrl]);

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <SingleProductNav title={product.name} />
      <div className="container-lg flex relative h-5/6 animate-fadeIn">
        <div className="flex flex-col lg:flex-row mt-auto items-center my-auto w-full">
          <div className="lg:w-1/2">
            <img
              className="mx-auto"
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col text-gray-700">
            <div className="flex justify-between border-b py-2">
              <div>Product line</div>
              <div>{product.productLine.name}</div>
            </div>
            <div className="flex justify-between border-b py-2">
              <div>ID</div>
              <div>{product.id}</div>
            </div>
            <div className="flex justify-between border-b py-2">
              <div>Name</div>
              <div>{product.name}</div>
            </div>
            {product.shortnames && (
              <div className="flex justify-between border-b py-2">
                <div>Short names</div>
                <div>{product.shortnames.join(", ")}</div>
              </div>
            )}
            {product.power && (
              <div className="flex justify-between border-b py-2">
                <div>Power Capacity</div>
                <div>{product.power.capacity} Watts</div>
              </div>
            )}
            {/* {(product.ports?.standard?.length > 0 ||
              product.ports?.plus?.length > 0) && (
              <div className="flex justify-between border-b py-2">
                <div>Ports</div>
                <div>
                  {product.ports?.standard?.length > 0 && (
                    <span>Standard: {product.ports.standard}</span>
                  )}
                  {product.ports?.plus?.length > 0 && (
                    <span>
                      {product.ports?.standard?.length > 0 && ", "}Plus:{" "}
                      {product.ports.plus.join(", ")}
                    </span>
                  )}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductView;
