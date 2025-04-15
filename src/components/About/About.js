import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Adjust the path as necessary
import "./Timeline.css"; // Ensure this CSS file is created

function ExperienceTimeline() {
  const experiences = [
    {
      title: "AI Research Assistant",
      company: "Indiana University Bloomington",
      date: "September 2024 - April 2025",
      description: [
        "Introduced an AI-driven content generation platform with GPT-based LLMs, cutting summarization time by 50%.",
        "Optimized embedding retrieval (Hugging Face Transformers), implementing vector search and fine-tuning embeddings, boosting search efficiency by 30%. ",
        "Created a serverless AI pipeline (AWS Lambda, S3, API Gateway) for scalable, cost-efficient inference. Enhanced LLM responses via reinforcement learning and prompt engineering, increasing coherence by 35%.",
      ],
    },
    {
      title: "Software Developer Intern",
      date: "June 2024 - August 2024",
      company: "Lennox International Inc",
      description: [
        "Engineered a high-performance geospatial search engine using PostgreSQL, PostGIS, and spatial indexing, optimizing queries across a 193-million-record dataset and reducing execution time by 40%.",
        "Designed and architected a scalable .NET API in C# on Azure, implementing asynchronous processing and multi-threading, enabling seamless integration and efficient high-throughput spatial queries.",
        "Refined geolocation algorithms with Haversine, Vincenty’s formulas, and quadtree partitioning, improving search accuracy by 25% and reducing computational overhead by 40%.",
        "Implemented search ranking with ML-driven dealer recommendations, leveraging clustering and anomaly detection on historical query patterns to improve result relevance and personalization.",
        "Boosted search logic migration to an Azure-hosted SQL database, utilizing parallel query execution and indexing strategies, enhancing system scalability and fault tolerance",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1
              className="project-heading"
              style={{
                paddingBottom: "20px",
                marginTop: "60px",
                textAlign: "center",
              }}
            >
              My <strong className="purple">Experience</strong>
            </h1>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  key={index}
                >
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p style={{ fontStyle: "italic" }}>{exp.company}</p>{" "}
                    {/* Render each description point in a new line */}
                    {exp.description.map((point, i) => (
                      <p key={i}>
                        <strong>{">"}</strong> {point}
                      </p>
                    ))}
                    <div className="timeline-date">{exp.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ExperienceTimeline;
