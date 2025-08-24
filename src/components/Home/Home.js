import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me.JPG"; // Update with actual image path
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            {/* Text Section */}
            <Col
              md={7}
              xs={12}
              className="home-header"
              style={{
                paddingLeft: "20px",
                paddingTop: "0px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  paddingTop: "0px",
                  paddingBottom: "10px",
                  marginBottom: "20px",
                }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: "15px" }}>
                I'M
                <strong className="main-name"> Niketh Bayya Mahesh</strong>
              </h1>

              <p style={{ 
                color: "rgb(155, 126, 172)", 
                fontSize: "1.2em",
                fontStyle: "italic",
                marginBottom: "25px",
                textAlign: "center"
              }}>
                "Driven by curiosity. Guided by data. Built for impact."
              </p>

              <div
                style={{
                  padding: "30px 0px",
                  textAlign: "center",
                }}
              >
                <Type />
              </div>
            </Col>

            {/* Image Section */}
            <Col
              md={5}
              xs={12}
              className="d-flex justify-content-center align-items-center"
              style={{
                paddingBottom: 20,
                marginTop: "20px",
                position: "relative",
                zIndex: 10,
              }}
            >
              <img
                src={homeLogo}
                alt="Niketh's profile"
                className="img-fluid"
                style={{
                  maxHeight: "410px",
                  borderRadius: "10%",
                  marginTop: "0px",
                  position: "relative",
                  zIndex: 10,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

