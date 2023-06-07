import React from "react";

//
import { Route, Routes } from "react-router-dom";

//
import Home from "../pages/homePage/Home";
import Products from "../components/products/Products";
import NotFound from "../pages/notFound/NotFound";

//componenet

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
         <Route path="/products" element={<Products/>}>
                        {/* <Route path="/create"/> */}
                        {/* <Route path="/updata"/> */}
                        {/* <Route path="/table-grid"/> */}
           </Route>
        {/* <Route path="/orders">
                        <Route path="/list"/>
                        <Route path="/table-grid"/>
                <Route/> */}
        {/* <Route path="/customers">
                        <Route path="/list"/>
                        <Route path="/create"/>
                        <Route path="/updata"/>
                        <Route path="/table-grid"/>
                <Route/> */}
        {/* <Route path="/files"/> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


export default ConfigRoutes