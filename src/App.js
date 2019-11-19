import React from "react";

import {Spinner, Nav, Navbar} from "react-bootstrap";
// Importing css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

class LogoBar extends React.Component {
    render() {
        return (
            <div id="logo-bar">
                <div id="name">
                    <div id="this-is-small">
                        <span id="magenta">this</span>.
                    </div>
                    <div id="title">
                        <a href="#">
                            <span id="orange">arun</span>
                        </a>
                        .
                        <span id="cyan">harish</span>
                    </div>
                    <div id="this-is-small">
                        =<span id="magenta">&nbsp;()=></span>
                    </div>
                </div>
            </div>
        )
    }
}

class MenuBar extends React.Component {
    render() {
        return (
            <div id="menu-wrapper">
                <Navbar className="justify-content-end" expand="sm">
                    <Navbar.Toggle aria-controls="nav-option"></Navbar.Toggle>
                    <Navbar.Collapse id="nav-option">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                About
                            </Nav.Link>
                            <Nav.Link href="#demo">
                                Demo
                            </Nav.Link>
                            <Nav.Link href="#portfolio">
                                Portfolio
                            </Nav.Link>
                        </Nav> 
                    </Navbar.Collapse> 
                </Navbar>
            </div>
        )
    }
}

class TopBar extends React.Component {
    render() {
        return (
            <div id="top-bar">
                <LogoBar></LogoBar>
                <div id="design-menu">
                    <span>
                        &#123;
                    </span>
                </div>
                <MenuBar></MenuBar>
            </div>
        )
    }
}

class LoadBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const displayStyle = {
            "display" : this.props.visible ? "flex" : "none"
        }
        return (
            <div id="overlay" style={displayStyle}>
                <Spinner variant="primary" animation="grow"></Spinner>
            </div>
        )
    }

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }
    render() {
        return (
            <div id = "content-wrapper">
                <LoadBar visible={this.state.loading}></LoadBar>
                <TopBar></TopBar>
            </div>
        )
    }
}

export default App;