import { useState, useEffect } from "react";

const useFetchDevices = (url: string) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ensure loading is set at the start of the fetch
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDevices(data.devices);
      } catch (err) {
        // Type check for error handling
        if (err instanceof Error) {
          setError(err.message); // Handle errors if it's an instance of Error
        } else {
          setError("An unexpected error occurred"); // Generic error for other cases
        }
      } finally {
        setLoading(false); // Ensure loading is set to false after the data is loaded or in case of error
      }
    };

    fetchData();
  }, [url]);

  return { devices, loading, error };
};

export default useFetchDevices;
