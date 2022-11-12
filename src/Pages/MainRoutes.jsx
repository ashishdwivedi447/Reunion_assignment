import React from "react";
import { Routes, Route } from "react-router-dom";
import Addproperty from "./Addproperty";
import Favorites from "./Favorites";


import Rent from "./Rent";

const MainRoutes = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Rent />} />
        
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
