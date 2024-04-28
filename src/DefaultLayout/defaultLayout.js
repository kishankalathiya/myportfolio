import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="defaultContainer">
      <Navigation/>
      {children}
      <Footer/>
    </div>
  );
};

export default DefaultLayout;