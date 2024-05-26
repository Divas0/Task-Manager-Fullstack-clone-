import { createContext, useEffect, useState } from "react";

export const SystemContext = createContext(null);

const SystemDataContext = ({ children }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/system-data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching system data:', error);
      }
    };

    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SystemContext.Provider value={data}>
      {children}
    </SystemContext.Provider>
  );
};

export default SystemDataContext;