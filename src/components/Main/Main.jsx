import React from "react";
import { mockData } from "../../mockdata";

import Card from "../Card/Card";

import "./main.scss";

function Main() {
  return (
    <main className="main-container">
      {mockData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          profile_link={item.profile_link}
        />
      ))}
    </main>
  );
}

export default Main;
