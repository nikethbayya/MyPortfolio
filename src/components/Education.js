import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import { SiIonic, SiAmazonaws } from "react-icons/si";
import { LiaGraduationCapSolid } from "react-icons/lia";
import Particle from "./Particle";

function Education() {
  return (
    <Container fluid className="education-section" id="education" style={{ paddingTop: "100px" }}>
      <Particle />
      <Container>
        {/* Education Section */}
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              My <strong className="purple">Education</strong>
            </h1>
            <p style={{ color: "#EFBCD5", fontSize: "1.1em", marginBottom: "50px" }}>
              My academic journey and educational background
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <div className="education-block" style={{ marginBottom: "40px", textAlign: "left", padding: "20px", borderLeft: "4px solid rgb(155, 126, 172)" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <LiaGraduationCapSolid className="purple" style={{ fontSize: "2em", marginRight: "15px" }} />
                <div>
                  <h3 style={{ margin: "0" }}>
                    <span style={{ color: "white" }}>Indiana University Bloomington</span>{" "}
                  </h3>
                  <p style={{ margin: "5px 0" }}>
                    <span style={{ color: "white" }}>Master of Science in</span>{" "}
                    <span className="purple">Computer Science</span>
                  </p>
                  <p style={{ margin: "0", color: "#EFBCD5" }}>Aug 2023 – May 2025 | Bloomington, IN, USA</p>
                  
                  {/* Coursework Section */}
                  <div style={{ 
                    marginTop: "15px", 
                    padding: "15px", 
                    background: "rgba(155, 126, 172, 0.1)", 
                    borderRadius: "10px",
                    border: "1px solid rgba(155, 126, 172, 0.3)"
                  }}>
                    <p style={{ 
                      margin: "0 0 15px 0", 
                      color: "#EFBCD5", 
                      fontSize: "0.95em", 
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Key Coursework
                    </p>
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: "8px",
                      justifyContent: "flex-start"
                    }}>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Applied Algorithms
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Applied Machine Learning
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Software Engineering
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Machine Learning in Signal Processing
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Natural Language Processing
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Database Design
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Engineering Cloud Computing
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Computer Networks
                      </span>
                      <span style={{ 
                        color: "white", 
                        fontSize: "0.9em", 
                        padding: "6px 12px", 
                        background: "rgba(239, 188, 213, 0.1)",
                        borderRadius: "20px",
                        border: "1px solid rgba(239, 188, 213, 0.3)",
                        whiteSpace: "nowrap"
                      }}>
                        Human-Computer Interaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-block" style={{ marginBottom: "40px", textAlign: "left", padding: "20px", borderLeft: "4px solid rgb(155, 126, 172)" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <LiaGraduationCapSolid className="purple" style={{ fontSize: "2em", marginRight: "15px" }} />
                <div>
                  <h3 style={{ margin: "0" }}>
                    <span style={{ color: "white" }}>SRM Institute of Science and Technology</span>{" "}
                  </h3>
                  <p style={{ margin: "5px 0" }}>
                    <span style={{ color: "white" }}>Bachelor of Technology in</span>{" "}
                    <span className="purple">Computer Science and Engineering with Specialization in Internet of Things</span>
                  </p>
                  <p style={{ margin: "0", color: "#EFBCD5" }}>Jun 2019 – May 2023 | Kattankulathur, India</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="justify-content-center" style={{ marginTop: "80px" }}>
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              My <strong className="purple">Skills</strong>
            </h1>
            <p style={{ color: "#EFBCD5", fontSize: "1.1em", marginBottom: "50px" }}>
              Technical expertise and professional competencies
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            {/* Languages and Developer Tools */}
            <div className="skill-block" style={{ 
              marginBottom: "30px", 
              padding: "25px", 
              borderLeft: "4px solid rgb(155, 126, 172)",
              background: "rgba(155, 126, 172, 0.05)",
              borderRadius: "0 15px 15px 0",
              border: "1px solid rgba(155, 126, 172, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <FaCode className="purple" style={{ fontSize: "1.8em", marginRight: "20px" }} />
                <h3 style={{ margin: "0" }} className="purple">Languages/Developer Tools</h3>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "10px 0", color: "white", lineHeight: "1.6" }}>
                  <strong>Programming Languages:</strong> Python, C/C++, C#, JavaScript, TypeScript, HTML, CSS, SQL<br />
                  <strong>Development Tools:</strong> Git, VS Code, Visual Studio, Postman, Swagger<br />
                  <strong>Containerization & Orchestration:</strong> Docker, Kubernetes
                </p>
              </div>
            </div>

            {/* Frameworks and Libraries */}
            <div className="skill-block" style={{ 
              marginBottom: "30px", 
              padding: "25px", 
              borderLeft: "4px solid rgb(155, 126, 172)",
              background: "rgba(155, 126, 172, 0.05)",
              borderRadius: "0 15px 15px 0",
              border: "1px solid rgba(155, 126, 172, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <SiIonic className="purple" style={{ fontSize: "1.8em", marginRight: "20px" }} />
                <h3 style={{ margin: "0" }} className="purple">Frameworks/Libraries</h3>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "10px 0", color: "white", lineHeight: "1.6" }}>
                  <strong>Frontend:</strong> React.js, Next.js, Material-UI, Tailwind CSS, Bootstrap<br />
                  <strong>Backend:</strong> Node.js, Express.js, Flask, FastAPI, .NET Core, Spring Boot<br />
                  <strong>Data & ML:</strong> Neo4j (Graph Data Modeling), NLTK, Hugging Face Transformers, Pandas, NumPy, Matplotlib, Scikit-Learn, TensorFlow, PyTorch, CUDA
                </p>
              </div>
            </div>

            {/* Databases and Cloud */}
            <div className="skill-block" style={{ 
              marginBottom: "30px", 
              padding: "25px", 
              borderLeft: "4px solid rgb(155, 126, 172)",
              background: "rgba(155, 126, 172, 0.05)",
              borderRadius: "0 15px 15px 0",
              border: "1px solid rgba(155, 126, 172, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <FaDatabase className="purple" style={{ fontSize: "1.8em", marginRight: "20px" }} />
                <h3 style={{ margin: "0" }} className="purple">Databases/Cloud</h3>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "10px 0", color: "white", lineHeight: "1.6" }}>
                  <strong>Relational:</strong> MySQL, PostgreSQL, PostGIS<br />
                  <strong>NoSQL:</strong> MongoDB, Neo4j<br />
                  <strong>Vector:</strong> LanceDB<br />
                  <strong>Cloud:</strong> Microsoft Azure, AWS
                </p>
              </div>
            </div>

            {/* Machine Learning/AI */}
            <div className="skill-block" style={{ 
              marginBottom: "30px", 
              padding: "25px", 
              borderLeft: "4px solid rgb(155, 126, 172)",
              background: "rgba(155, 126, 172, 0.05)",
              borderRadius: "0 15px 15px 0",
              border: "1px solid rgba(155, 126, 172, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <FaBrain className="purple" style={{ fontSize: "1.8em", marginRight: "20px" }} />
                <h3 style={{ margin: "0" }} className="purple">Machine Learning/AI</h3>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: "10px 0", color: "white", lineHeight: "1.6" }}>
                  <strong>LLM & AI Tools:</strong> OpenAI, LangChain, LangGraph, RAG, Transformers (BERT, GPT-4o), LLMs, CRAG<br />
                  <strong>Traditional ML:</strong> Linear/Logistic Regression, Clustering, Classification, SVM<br />
                  <strong>Deep Learning:</strong> Neural Networks, RNNs, LSTMs, Reinforcement Learning
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Certifications Section */}
        <Row className="justify-content-center" style={{ marginTop: "80px" }}>
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              My <strong className="purple">Certifications</strong>
            </h1>
            <p style={{ color: "#EFBCD5", fontSize: "1.1em", marginBottom: "50px" }}>
              Professional certifications and achievements
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} style={{ textAlign: "center" }}>
            <div 
              style={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginBottom: "30px",
                background: "rgba(155, 126, 172, 0.1)",
                padding: "30px",
                borderRadius: "20px",
                border: "2px solid rgba(155, 126, 172, 0.3)",
                backdropFilter: "blur(10px)"
              }}
            >
              <SiAmazonaws style={{ fontSize: "2.5em", color: "#FF9900" }} />
              <div style={{ 
                color: "white", 
                fontSize: "1.3em",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                <span>AWS Machine Learning Engineer - Associate</span>
                <span className="purple" style={{ fontSize: "1.5em" }}>→</span>
                <a
                  href="https://www.credly.com/badges/5bd91822-911a-457f-be16-a32f62e4b2e2/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#EFBCD5",
                    textDecoration: "none",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "25px",
                    border: "2px solid #EFBCD5",
                    background: "rgba(239, 188, 213, 0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "0.9em",
                    fontWeight: "500"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#EFBCD5";
                    e.target.style.color = "#1a1a1a";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(239, 188, 213, 0.1)";
                    e.target.style.color = "#EFBCD5";
                  }}
                >
                  View Certification
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education; 