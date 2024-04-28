import React, { useState, createContext, useEffect } from "react";
import { cfg } from "../cfg/cfg.js";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch(`${cfg.API.HOST}/reviews`);
        console.log("response", response);
        const review = await response.json();
        console.log("data", review);
        setData(review);
      } catch (error) {}
    };
    fecthData();
  });

  return <AppContext.Provider>{props.children}</AppContext.Provider>;
}

export default AppContextProvider;
