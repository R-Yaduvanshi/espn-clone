import NavbarComponent from "./Components/fw17_0230/NavbarComponent";
import Top from "./Components/fw17_0230/Top";
import Livescore from "./Components/LiveScore/Livescore";

import Mycarousal from "./Components/Mycarousal";

import MainRouter from "./Pages/MainRouter";
import Newss from "./Components/Newss";
import RightSide from "./Components/LiveScore/RightSide";
import Footer from "./Components/Footer";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import SingleNews from "./Pages/SingleNews";

// import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Top />
      <Mycarousal />
      <NavbarComponent />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
