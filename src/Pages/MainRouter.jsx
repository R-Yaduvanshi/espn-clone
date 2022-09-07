import React from "react";
import { Route, Routes } from "react-router-dom";
import Livescore from "../Components/LiveScore/Livescore";
import Newss from "../Components/Newss";

import News from "./News";
import SingleNews from "./SingleNews";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Newss />} />
      <Route path="/news" element={<News />} />
      <Route path="/singlenews/:id" element={<SingleNews />} />
      <Route path="/livescore" element={<Livescore />} />
    </Routes>
  );
};

export default MainRouter;
