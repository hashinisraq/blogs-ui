import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import ReadPost from "./Pages/Posts/Components/ReadPost";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/post/:title" element={<ReadPost />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
