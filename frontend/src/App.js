import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";
import Location from "./LoginPage/GetLocation";
import { Fragment } from "react";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
