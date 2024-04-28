import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import { Container, Row, Col } from "react-bootstrap";
import DeveloperImg from "../../Assets/Images/DeveloperImgFinal.png";
import Divider from "../Divider/Divider";

export default function HomePage() {
  const [dispalyLoader, setDisplayLoader] = useState();
  useEffect(() => {
    // localStorage.clear();
    const wasLoaded = localStorage.getItem("wasLoaded");
    if (!wasLoaded) {
      setDisplayLoader(true);
      setTimeout(() => {
        setDisplayLoader(false);
      }, 5000);
      localStorage.setItem("wasLoaded", true);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div>
        {dispalyLoader ? (
          <h1 className="homeText loader">
            if {"( "} brain != empty {")"}
            <br />
            {"{"}
            <br />
            <p className="text-center m-0">keepCoding {"( );"}</p>
            {"}"}
            <br />
            else {"{"}
            <br />
            <p className="text-center m-0">orderCoffee {"( );"}</p>
            {"}"}
            <br />
          </h1>
        ) : (
          <div className="row">
            <div
              className="col-md-4 homeImageContainer"
              style={{ backgroundColor: "rgba(170, 58, 255, 0.2)" }}
            >
              <img src={DeveloperImg} className="homeImg img-fluid" />
            </div> 
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div>
                <section>
                  <Container fluid className="home-section" id="home">
                    <Container className="home-content">
                      <Row>
                        <Col md={7} className="home-header">
                          <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hello There!!!{" "}
                            <span
                              className="wave"
                              role="img"
                              aria-labelledby="wave"
                            >
                              👋🏻
                            </span>
                          </h1>

                          <h1 className="heading-name">
                            I'M
                            <br />
                            <strong className="main-name">
                              {" "}
                              Kishan Kalathiya
                            </strong>
                            <br />
                          </h1>
                          <h4>[Software developer]</h4>
                        </Col>
                      </Row>
                    </Container>
                  </Container>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />

      <div className="dividerContainer">
        <div className="divider"></div>
      </div>
      <br />
      <AboutMe />
      <br />
      <br/>
      <div className="dividerContainer">
        <div className="divider"></div>
      </div>
      <br />
      <Portfolio />
      <div className="dividerContainer">
        <div className="divider"></div>
      </div>
      <br />
      <Resume />
      <Footer />
    </>
  );
}
