import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.vmi.lt/evmi/mokesciu-zinynas"
        );
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
