import React from "react";

//
import { Route, Routes } from "react-router-dom";
//
import Home from "../pages/homePage/Home";
import Products from "../components/products/Products";
import NotFound from "../pages/notFound/NotFound";
import RequireAuth from "../components/requireAuth/RequireAuth";
import Login from "../features/auth/Login";

interface AuthDasboard {
  admin: number;
  editeor: number;
}
//componenet
const ConfigRoutes = () => {
  const Auth: AuthDasboard = {
    admin: 30,
    editeor: 14,
  };
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth allowRoles={[Auth.admin]} />}>
        <Route path="/" element={<Home />}>
          <Route path="/products" element={<Products />}>
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
      </Route>
    </Routes>
  );
};

export default ConfigRoutes;
