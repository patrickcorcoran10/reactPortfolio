import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="./backgroundImage.jpeg">
      <h1>Pat Corcoran</h1>
      <h5>Full-Stack Web Developer</h5>
      <br />
      <a href="/portfolio">
        <button className="btn info">P O R T F O L I O</button>
      </a>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <div className="card">
            <h2>Welcome...</h2>
            <br />
            <p>
              First, let me introduce myself, I'm Pat Corcoran, a junior to
              mid-level full-stack web developer. I have a varied background
              including governmental, political campaigning, non-profit and
              for-profit work. I'm currently working on projects in the
              development world and I'm enthusiastic about new opportunities to
              learn and grow.
            </p>
            <p>
              This site is a showcase of some of the projects I've built in the
              last couple years.{" "}
            </p>
            <p>
              Please have a look around and use the comment page to reach me if
              you have any questions. Thanks for visiting!
            </p>
            <p>---</p>
            <div id="initials">
              <h3>Pat Corcoran</h3>
            </div>
            <br />
          </div>
        </Col>
        <Col size="md-1"></Col>
      </Row>
      <br />
      <br />
      <div className="row">
        <div className="container-1 col-md-4">
          <img src="portfolio.jpeg" alt="view" />
          <a href="/portfolio">
            <div className="overlay-1">
              <div className="text">Portfolio</div>
            </div>
          </a>
        </div>
        <div className="container-2 col-md-4">
          <img src="email.jpeg" alt="resume" />
          <a href="/contact">
            <div className="overlay-2">
              <div className="text">Contact</div>
            </div>
          </a>
        </div>
        <div className="container-3 col-md-4">
          <img src="resumeImage.jpeg" alt="resume" />
          <a href="/Patrick Corcoran WebDev Resume 2020 copy.pdf" download>
            <div className="overlay-3">
              <div className="text">Resume</div>
            </div>
          </a>
        </div>
      </div>
    </Container>
  </div>
);

export default About;
