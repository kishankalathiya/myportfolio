import React from "react";
import { useMediaQuery } from "react-responsive";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";
import "./Navigation.css"

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth:525 });

  return (
    <>
        {isMobile?<SidePanel/>:<Navbar/>}
    </>
    );
  }
export default Navigation;