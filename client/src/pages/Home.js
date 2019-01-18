import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const About = () => (
  <div>
    <Hero backgroundImage="./desk.jpg">
      <h1>Pat Corcoran</h1>
      <h5>Full-Stack Web Developer</h5><br/>
      <a href="/portfolio" ><button className="btn info">P O R T F O L I O</button></a>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
        <div className="card">
        <h2>Welcome...</h2><br/>
          <p>
            With Full-Stack Certification from Northwestern University in Chicago, IL, Eric is excited to showcase his abilities through this site as he goes about his search for exciting employment opportunities in development.</p><p>The most coveted place of employment for Eric would be one that offers both engaging projects for him to help build out, and the chance for him to grow individually into an even more skilled developer.   
          </p>
            <p>That said, please don't hesitate to look around -- do reach out with any questions/comments.  Thanks for visiting!
          </p>
          <p>---</p>
          <div id="initials"><h3>Pat Corcoran</h3></div><br/>
          {/* <p>
            It wasn't long before Eric started to hunger for more technical education on the topic.  In May of 2018, Eric enrolled in the School of Professional Studies at Chicago's Northwestern University in the school's Full-Stack Web Development curricula.  Eric graduated from the program in November of 2018.</p><p id="bottom-p">---</p><br/><br/> */}
          </div>
          
         
        </Col>
       
        <Col size="md-1">
        </Col></Row><br/><br/>
    
      <div className="row">
      <div className="container-1 col-md-4">
          <img src="view.jpeg" alt="view"/>
          <a href="/portfolio"><div className="overlay-1"><div class="text">Portfolio</div></div></a>
      </div>
      {/* <div className="col-md-4">
      <img src="phone.jpg" alt="contact"/>
      </div> */}
      <div className="container-2 col-md-4">
        <img src="phone.jpg" alt="resume"/>
        <a href="/contact"><div className="overlay-2"><div class="text">Contact</div></div></a>      </div>
      <div className="container-3 col-md-4">
        <img src="grad.jpg" alt="resume"/>
        <a href="/resume2019.pdf" download><div className="overlay-3"><div class="text">Resume</div></div></a>  </div></div>
    </Container>
  </div>
);

export default About;
