import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
