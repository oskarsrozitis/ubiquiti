import React from "react";
import { Link } from "react-router-dom";

const DeviceTable: React.FC<DeviceTableProps> = ({ devices }) => {
  const apiImageUrl = import.meta.env.VITE_IMAGE_API_URL;

  return (
    <div className="w-full animate-fadeIn">
      <div className="flex py-4 border-b -me-12">
        <div className="text-right w-1/3 text-gray-400 me-12">
          {devices.length} devices
        </div>
        <div className="text-left w-1/3 uppercase font-semibold text-gray-600">
          Product line
        </div>
        <div className="text-left w-1/3 uppercase font-semibold text-gray-600 me-12">
          Name
        </div>
      </div>
      <div className="flex flex-col">
        {devices.map((device) => (
          // Each device entry is wrapped in a Link for navigation
          <Link
            to={`/product/${device.id}`}
            key={device.id}
            className="flex items-start py-4 border-b border-gray-200 align-center hover:bg-gray-50 transition-all"
          >
            <div className="flex w-1/3 items-center me-12">
              <img
                src={`${apiImageUrl}${device.icon.id}_64x64.png`}
                alt={`Icon for ${device.product.name}`}
                className="h-8 w-8 ms-auto"
              />
            </div>
            <div className="w-1/3 my-auto text-gray-600">
              {device.product.abbrev}
            </div>
            <div className="w-1/3 my-auto text-gray-600">
              {device.product.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeviceTable;
