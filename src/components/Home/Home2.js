import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "center" }}
          >
            <h1 style={{ fontSize: "2.6em", marginBottom: "20px" }}>
              Let Me <span className="purple">Introduce</span> Myself
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Machine Learning Enthusiast</b> and <b className="purple">Software Engineer</b>, with a Master's in Computer Science from <b className="purple">Indiana University Bloomington</b> — where I honed my skills in building intelligent systems that don't just work — they learn and evolve. During my internship as a <b className="purple">Software Developer</b> at <b className="purple">Lennox International Inc.</b> in Texas, I worked on <b className="purple">.NET, C#, Azure SQL</b>, and <b className="purple">geospatial indexing</b> techniques.
              <br />
              <br />
              With a strong foundation in <b className="purple">Machine Learning</b>, <b className="purple">Software Development</b>, and <b className="purple">IoT</b>, I specialize in crafting scalable, high-performance applications powered by cutting-edge <b className="purple">AI</b> and <b className="purple">cloud-native</b> technologies. From optimizing a 193M+ record geospatial engine to designing modular LLM-powered document pipelines, I love transforming complex challenges into seamless, intelligent solutions.
              <br />
              <br />
              I'm not just coding for the present — I'm building for a future where systems are smarter, faster, and endlessly adaptive.
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            md={12}
            className="home-about-social"
            style={{ textAlign: "center" }}
          >
            <h1>
              <span className="purple">Find</span>{" "}
              <span style={{ color: "white" }}>Me</span>{" "}
              <span className="purple">On</span>
            </h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul
              className="home-about-social-links"
              style={{ listStyleType: "none", padding: 0 }}
            >
              <li
                className="social-icons"
                style={{ display: "inline-block", margin: "0 15px" }}
              >
                <a
                  href="https://github.com/nikethbayya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li
                className="social-icons"
                style={{ display: "inline-block", margin: "0 15px" }}
              >
                <a
                  href="https://www.linkedin.com/in/niketh-bayya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "1.1em", marginBottom: "5px" }}>
                <MdEmail style={{ marginRight: "10px", verticalAlign: "middle" }} />
                <a
                  href="mailto:nikethbayya2001@gmail.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  nikethbayya2001@gmail.com
                </a>
              </p>
              <p style={{ fontSize: "1.1em" }}>
                <BsTelephoneFill style={{ marginRight: "10px", verticalAlign: "middle" }} />
                <a
                  href="tel:+18126711867"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +1 (812) 671-1867
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
