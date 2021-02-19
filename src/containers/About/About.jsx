import React, { forwardRef } from "react";
import Heading from "../../components/Heading/Heading";
import classes from "./About.module.scss";
import { Row, Col, Container, Tab, Image } from "react-bootstrap";
import TabPane from "../../components/TabUI/TabMenu/TabMenu";

import joinClassList from "../../functions/joinClassList";

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
                            A Software Engineer graduate from The University of Queensland, with avid interest in web development frameworks (both the front-end &amp; back-end).
                        </p>
                        <p>
                            Here you will find my portfolio and all of my projects, ranging from gravity simulators using vector math and canvas API, to digit recogniser developed using Tensorflow based Convolutional Neural Networks.
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
        const skillsetList = [
                            classes.skillset, "justify-content-center", 
                            "align-items-center",
                            "flex-fill"
        ];
        const skillsetTabWrapperList = [
                            classes.skillset_tab_wrapper, 
                            "flex-column",
                            "flex-md-row",
                            "flex-sm-column",
                            "flex-lg-column",
                            "h-auto",
                            "d-flex"
        ];
        return (
            <Row className={skillsetList.join(" ")}>
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
        const contentClassList = [classes.content, "flex-fill"];
        const { domReference, className : passedClassName, 
                ...clonedProps } = this.props;
        
        const parentClassList = 
                        joinClassList(passedClassName, classes.about_wrapper);

        return (
            <div ref={this.props.domReference}
                {...clonedProps}
                className={parentClassList.join(" ")}>
                <Container className={classes.content_wrapper}>
                    <Col className={contentClassList.join(" ")}>
                        <Header></Header>
                        <Description></Description>
                        <Skillset></Skillset>
                    </Col>
                </Container>
            </div>
        );
    }
};

export default forwardRef((props, reference) => {
    return <About {...props} domReference={reference} />;
});
