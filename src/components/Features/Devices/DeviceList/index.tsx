import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const imageApiUrl = import.meta.env.VITE_IMAGE_API_URL;

const DeviceList: React.FC<{ devices: Device[] }> = ({ devices }) => {
  const renderedDevices = useMemo(() => (
    devices.map(device => (
      <Link
        to={`/product/${device.id}`}
        key={device.id}
        className="card border rounded-lg hover:border-slate-300 transition-all overflow-hidden"
      >
        <div className="bg-gray-100">
          <img
            src={`${imageApiUrl}${device.icon.id}_128x128.png`}
            alt={`Icon for ${device.product.name}`}
            className="mx-auto"
            loading="lazy"
          />
        </div>
        <div className="py-4 px-4">
          <h3 className="text-lg font-normal text-gray-600 leading-6">
            {device.product.name}
          </h3>
          <p className="text-gray-400">{device.line.name}</p>
        </div>
      </Link>
    ))
  ), [devices, imageApiUrl]);

  return (
    <>
      <div className="w-full flex mb-4 -mt-4 text-gray-400">
        {devices.length} devices
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-8 animate-fadeIn">
        {renderedDevices}
      </div>
    </>
  );
};

export default DeviceList;
