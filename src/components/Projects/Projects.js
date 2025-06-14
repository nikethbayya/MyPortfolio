import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/p1.jpg";
import vacaybuddy from "../../Assets/Projects/p2.jpg";
import news from "../../Assets/Projects/p6.png";
import car from "../../Assets/Projects/p7.png";
import ipl from "../../Assets/Projects/p4.webp";
import resume from "../../Assets/Projects/p3.png"
import employee from "../../Assets/Projects/p5.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Visual Odometry"
              description="Developed a deep-learning pipeline to extract precise racelines from driver-mounted video by combining convolutional and recurrent neural networks (DeepVO) for frame-by-frame pose estimation. Leveraged pre-trained FlowNet for optical-flow feature integration and trained end-to-end on KITTI-style racing footage to reconstruct 3D vehicle trajectories, enabling robust path estimation under real-world conditions."
              ghLink="https://github.com/nikethbayya/Car_Visual_Odometry"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Intelligent QA System"
              description="This project implements a Corrective Retrieval-Augmented Generation (CRAG) that combines document retrieval, dynamic query rephrasing, and web search integration to provide high-quality, contextually relevant answers to user queries. The system leverages OpenAI GPT-4 for query refinement and answer generation, LanceDB for vector-based document retrieval, LangChain for orchestration, and Tavily API for supplementing information with web search results."
              ghLink="https://github.com/nikethbayya/Intelligent_QA_System_Using_CRAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacaybuddy}
              isBlog={false}
              title="IAB Taxonamy Classification"
              description="This project explores the use of a hierarchical knowledge graph-based RAG model for webpage classification into the IAB Content Taxonomy. By leveraging Neo4j for graph representation, context-constrained synonyms, multilingual embeddings, and LLM-driven summarization, classification accuracy is enhanced while reducing semantic ambiguity and misclassification."
              ghLink="https://github.com/nikethbayya/IAB_Taxonomy_Classification_Using_RAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Image and Audio Enchancement using Machine Learning"
              description="Exploring ML for Signal Processing covers speech denoising, ICA, PCA, kernel methods, deep learning, and time-series analysis. The cases focus on real-world applications levaraging audio processing and feature extraction."
              ghLink="https://github.com/nikethbayya/Image_and_Audio_Enhancement_using_MachineLearning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="PathWise-AI Course Selector"
              description="PathWise is a  personalized course recommendation tool designed to help students find the right classes based on their interests and career goals. It works by understanding what a student is looking for and then suggesting courses that align with their future plans. Using information from University’s academic catalog, the system provides thoughtful, tailored guidance that supports students in making confident and informed academic decisions."
              ghLink="https://github.com/nikethbayya/PathWise_AI_Course_Selector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Learning Management System"
              description="LMS is a full-stack web application designed to enhance online education by providing tools for course management, user enrollment, assessments, and progress tracking. It offers a seamless experience for both instructors and students. Key features include secure user authentication, intuitive course creation, interactive assessments, and real-time progress monitoring.​"
              ghLink="https://github.com/nikethbayya/Learning_Management_System/tree/develop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Sentiment Analysis of Twitter Data"
              description="An end-to-end MLOps project that fine-tunes a BERT model for sentiment analysis and deploys it using FastAPI and Kubernetes (Minikube). It features an asynchronous batch prediction pipeline, data drift monitoring with Slack alerts, and automated model retraining through scheduled Kubernetes CronJobs. This project demonstrates a production-grade workflow for scalable and maintainable machine learning deployments"
              ghLink="https://github.com/nikethbayya/Sentiment_Analysis_of_Twitter_Data"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
