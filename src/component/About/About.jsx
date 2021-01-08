import React from "react";
import Heading from "../Heading/Heading";
import classes from "./About.module.scss";
import { Row, Col, Container } from "react-bootstrap";

class Greetings extends React.Component {
    render() {
        // Use localStorage
        return <>Hi, I am Arun.</>
    };
};

class Header extends React.Component {
    render() {
        return (
            <Row>
                <Heading>
                    <Greetings></Greetings>
                </Heading>
            </Row>
        );
    };
};

class Description extends React.Component {
    render() {
        let imageStyling = [classes.profile, "float-right", "float-sm-left"];
        let descriptionStyling = [classes.about_description, "d-inline-block",
                                    "justify-content-center"];
        return (
            <Row className={classes.description_wrapper}>
                <Col className={descriptionStyling.join(" ")}>
                    <Col className={imageStyling.join(" ")} xs={5} 
                        md={3} lg={3}>
                        <img className={classes.pic} alt={"Profile Pic"} 
                            src={"https://arunharish-static-images.s3.amazonaws.com/profile/arun.png"} />
                    </Col>
                    <div className={classes.about_me}>
                        <p>
                            A Software Engineer graduate from The University of Queensland. I <span role="img" aria-label="love web">❤️</span> anything related to web development, both the front-end and back-end frameworks. 
                        </p>
                        <p>
                            Here you will (soon) find my portfolio and all of my <span role="img" aria-label="nerdy">🤓</span> projects, ranging from gravity simulators using vector math and canvas API, to digit recogniser developed using Tensorflow based CNNs. 
                        </p>
                    </div>
                </Col>
            </Row>
        );
    };
};

class Skillset extends React.Component {
    
    render() {
        const skillsetList = [classes.skillset_list, "justify-content-center"]
                            .join(" ");
        return (
            <Row className={skillsetList}>
            </Row>
        );
    };
};

class About extends React.Component {
    render() {
        return (
            <Container className={classes.content}>
                <Col>
                    <Header></Header>
                    <Description></Description>
                    <Skillset></Skillset>
                </Col>
            </Container>
            
        );
    }
}

export default About;