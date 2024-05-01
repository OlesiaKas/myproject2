import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
//components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import AllReviews from "./components/Reviews/Reviews";
import Useful from "./components/Useful/Useful";
import Contact from "./components/Contact/Contact";
import Mb from "./components/MB/Mb";
import Ab from "./components/Ab/Ab";
import Ub from "./components/Ub/Ub";
import Ii from "./components/Ii/Ii";
import Iv from "./components/Iv/Iv";
import Uab from "./components/Uab/Uab";
import CurrencyConverter from "./components/Currency/currency";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/useful" element={<Useful />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mb" element={<Mb />} />
        <Route path="/ab" element={<Ab />} />
        <Route path="/ub" element={<Ub />} />
        <Route path="/ii" element={<Ii />} />
        <Route path="/iv" element={<Iv />} />
        <Route path="/uab" element={<Uab />} />
        <Route path="/currency" element={<CurrencyConverter />} />
      </Routes>
    </>
  );
}

export default App;
