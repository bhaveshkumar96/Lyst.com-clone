import React from "react";
import {Routes,Route} from 'react-router-dom'
import LandingPage from "../HomePage/LandingPage";
import LoginPage from "./LoginPage";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}>

        </Route>
        <Route path="/login" element={<LoginPage/>}>

        </Route>

      </Routes>
    </>
  );
}
export default AllRoutes;
