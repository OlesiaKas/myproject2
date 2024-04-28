import React, { useState, createContext, useEffect } from "react";
import { cfg } from "../cfg/cfg.js";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  const fetchData = async () => {
    try {
      setLoadingReviews(true);
      const response = await fetch(`${cfg.API.HOST}/reviews`);
      console.log("response", response);
      const review = await response.json();
      console.log("data", review);
      setData(review);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ data, setData, fetchData, loadingReviews, setLoadingReviews }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
