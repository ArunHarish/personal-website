import React from "react";
import {HashRouter as Router, NavLink, Switch, Route} from "react-router-dom";
import {Spinner, Nav, Navbar, Row, Col} from "react-bootstrap";
import Helmet from "react-helmet";
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
                        <a href="/#/">
                            <span id="orange">arun</span>
                        </a>
                        .
                        <span id="cyan">harish</span>
                    </div>
                    <div id="this-is-small">
                         = ()
                        <span id="red">
                           &nbsp;=>
                        </span>
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
                    <Navbar.Collapse bg="light" id="nav-option">
                        <Nav className="mr-auto">
                            <Router>
                                <NavLink activeClassName="selected" to="/about" className="menu-link">
                                    About
                                </NavLink>
                                <NavLink activeClassName="selected" to="/demo" className="menu-link">
                                    Demo
                                </NavLink>
                                <NavLink activeClassName="selected" to="/portfolio" className="menu-link">
                                    Portfolio
                                </NavLink>
                            </Router>
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

class Portfolio extends React.Component {
    render() {
        return (
            <></>
        )
    }
}

class Demo extends React.Component {
    render() {
        return (
            <></>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <Row>
                <h1>About</h1>
            </Row>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <main>
                <h1>Hello World</h1> 
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </main>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }

    render() {
        return (
            <Col id = "information-wrapper">
                <Router>
                    <Switch>
                        <Route path="/about">
                            <Helmet>
                                <title>
                                    About | Arun Harish Balasubramonian
                                </title>
                            </Helmet>
                        </Route>
                        <Route path="/demo">
                            <Helmet>
                                <title>
                                    Demo | Arun Harish Balasubramonian
                                </title>
                            </Helmet>
                        </Route>
                        <Route path="/portfolio">
                            <Helmet>
                                <title>
                                    Portfolio | Arun Harish Balasubramonian
                                </title>
                            </Helmet>
                        </Route>
                    </Switch> 
                </Router>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/demo">
                            <Demo></Demo>
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio></Portfolio>
                        </Route>
                    </Switch>
                </Router>
            </Col>
        )
    }
}

class FooterBar extends React.Component {
    render() {
        return (
            <footer>
                <div id="design-menu-footer"><span>&#125;</span></div>
            </footer>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div id = "content-wrapper">
                <TopBar></TopBar>
                <Content></Content>
                <FooterBar></FooterBar>
            </div>
        )
    }
}

export default App;