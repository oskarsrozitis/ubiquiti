import { useState, useEffect } from "react";

const useFetchDevices = (url: string) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDevices(data.devices);
    };
    fetchData();
  }, [url]);

  return devices;
};

export default useFetchDevices;
