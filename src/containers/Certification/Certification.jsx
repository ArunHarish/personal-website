import React, { forwardRef } from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import Heading from "../../components/Heading/Heading";
import classes from "./Certification.module.scss";
import joinClassList from "../../functions/joinClassList";

class CertificationTab extends React.Component {
    render() {

        return (
            <Row>
                <Tab.Container>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link eventKey={"first"}>
                                Certification
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey={"first"}>
                            Description
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Row>
        );
    };
};

class Header extends React.Component {
    render() {
        return (
            <Row>
                <Heading>Certification</Heading>
            </Row>
        );
    };
};

class Certification extends React.Component {
    render() {
        const { domReference, 
            className : passedClassList, ...clonedProps } = this.props;
        const parentClassList = joinClassList([classes.certification_wrapper],
                                                passedClassList);
        
        const containerClassList = ["w-100"];
        
        const contentClassList = ["flex-fill"];

        return (
            <div {...clonedProps} className={parentClassList.join(" ")} 
                ref={this.props.domReference}>
                <Container className={containerClassList.join(" ")}>
                    <Col className={contentClassList.join(" ")}>
                        <Header></Header>
                        <CertificationTab></CertificationTab>
                    </Col>
                </Container>
            </div>
        );
    };
};

export default forwardRef((props, reference) => {
    return <Certification {...props} domReference={reference}></Certification>;
});