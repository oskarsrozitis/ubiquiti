import { useState, useEffect } from "react";

const useFetchDevices = (url: string) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // State to track loading
  const [error, setError] = useState<string | null>(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDevices(data.devices); // Assuming the response has a "devices" property
        setLoading(false); // Set loading to false after the data is loaded
      } catch (err) {
        setError(err.message); // Handle errors
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchData();
  }, [url]);

  return { devices, loading, error }; // Return devices, loading and error state
};

export default useFetchDevices;