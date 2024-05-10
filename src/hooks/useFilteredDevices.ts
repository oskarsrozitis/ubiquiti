import { useMemo } from "react";

type SetType = Set<string>;

const useFilteredDevices = (devices: Device[], input: string, selectedLines: SetType) => {
  return useMemo(() => devices.filter(device =>
    (selectedLines.size === 0 || selectedLines.has(device.line.name)) &&
    (device.product.name.toLowerCase().includes(input) ||
     device.product.abbrev.toLowerCase().includes(input) ||
     device.line.name.toLowerCase().includes(input))
  ), [devices, input, selectedLines]);
};

export default useFilteredDevices;
