import { useState, useEffect } from "react";


export function useApiData(apiUrl, cacheData) {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const getData = async () => {

      try {
        const cache = localStorage.getItem(cacheData);
        
        if (cache) {
          const data = JSON.parse(cache);
          
          setData(data);
        }

        const response = await fetch(apiUrl);
        const responseJSON = await response.json();
        if (cacheData === "characters") {
          localStorage.setItem("characters", JSON.stringify(responseJSON));
        } else if (cacheData === "dragons") {
          localStorage.setItem("dragons", JSON.stringify(responseJSON));
        } else {
          localStorage.setItem("books", JSON.stringify(responseJSON));
        }
        setData(responseJSON);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    getData();
  }, [apiUrl, cacheData]);

  return data;
}


