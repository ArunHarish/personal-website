import React from "react";
import Heading from "../../components/Heading/Heading";
import classes from "./About.module.scss";
import { Row, Col, Container, Tab, Image } from "react-bootstrap";
import TabPane from "../../components/TabUI/TabMenu/TabMenu";
import SkillSet, { SkillSetContext } from "../../contexts/SkillSet";
import TabContent from "../../components/TabUI/TabContent/TabContent";

class Header extends React.Component {
    render() {
        return (
            <Row>
                <Heading>
                    <>Hi, I am Arun.</>
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
                        sm={5} 
                        md={3} lg={3}>
                        <Image className={classes.pic} 
                            src={"https://arunharish-static-images-local.s3-ap-southeast-2.amazonaws.com/arun.png"} 
                            roundedCircle />
                    </Col>
                    <div className={classes.about_me}>
                        <p>
                            A Software Engineer graduate from The University of Queensland. I <span role="img" aria-label="love web">❤️</span> anything related to web development, both the front-end and back-end frameworks. 
                        </p>
                        <p>
                            Here you will (soon) find my portfolio and all of my <span role="img" aria-label="nerdy">🤓</span> projects, ranging from gravity simulators using vector math and canvas API, to digit recogniser developed using Tensorflow based Convolutional Neural Networks.
                            The following are some of my skill sets:
                        </p>
                    </div>
                </Col>
            </Row>
        );
    };
};

class Skillset extends React.Component {
    render() {
        const skillsetList = [classes.skillset, "justify-content-center", 
                            "clearfix"]
                            .join(" ");
        const skillsetTabWrapperList = [
                            classes.skillset_tab_wrapper, 
                            "flex-column",
                            "flex-md-row",
                            "flex-sm-column",
                            "flex-lg-column",
                            "h-auto",
                            "d-flex"];
                            return (
                                <Row className={skillsetList}>
                <div className={skillsetTabWrapperList.join(" ")}>
                    <SkillSet>
                        <SkillSetContext.Consumer>
                            {
                                (value) => {
                                    const { onSelectionChange } = value;
                                    const { label : defaultEventKey } = 
                                            value.skillset[value.defaultSkillSet];
                                    return (
                                        <Tab.Container
                                            onSelect={onSelectionChange}
                                            defaultActiveKey={defaultEventKey} 
                                            unmountOnExit={true}>
                                            <TabPane></TabPane>
                                            <TabContent></TabContent>
                                        </Tab.Container>  
                                    )
                                }
                            }
                        </SkillSetContext.Consumer>
                    </SkillSet>
                </div>
            </Row>
        );
    };
};

class About extends React.Component {
    render() {
        return (
            <div className={classes.about_wrapper}>
                <Container className={classes.content}>
                    <Col>
                        <Header></Header>
                        <Description></Description>
                        <Skillset></Skillset>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default About;
