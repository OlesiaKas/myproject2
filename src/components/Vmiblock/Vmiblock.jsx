import React, { createContext, useState, useEffect } from "react";

export const VmiBlock = createContext();

function NewsComponent(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch(
          "https://www.vmi.lt/evmi/mokesciu-zinynas"
        );
        console.log("response", response);
        const news = await response.json();
        console.log("data", news);
        setData(news);
      } catch (error) {}
    };
    fecthData();
  });

  return (
    <VmiBlock.Provider value={{ data }}>{props.children}</VmiBlock.Provider>
  );
}

export default NewsComponent;
