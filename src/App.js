import React from "react";
import {HashRouter as Router, NavLink, Switch, Route, Redirect} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
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
                        <a href="/#/about">
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

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="heading-wrapper">
                <div id="heading">
                    <div id="overlay"></div>
                    <h3>{this.props.children}</h3>
                </div>
            </div>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div className="content">
                <Heading>Portfolio</Heading>
            </div>
        )
    }
}

class Demo extends React.Component {
    render() {
        return (
            <div className="content">
                <Heading>Demo</Heading>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div className="content">
                <Heading>About</Heading>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            timeout : {
                enter : 500,
                exit : 500
            }
        }



    }

    render() {
        return (
            <Col id = "information-wrapper">
                <Router>
                    <Switch>
                        <Redirect strict exact from="/" to = "/about"></Redirect>
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
                    <TransitionGroup>
                        <CSSTransition appear={true} mountOnEnter={true} unmountOnExit={true} classNames="content" timeout={this.state.timeout}>
                            <Switch>  
                                <Route path = "/about">
                                    <About></About>
                                </Route>
                                <Route path = "/demo">
                                    <Demo></Demo>
                                </Route>
                                <Route path = "/portfolio">
                                    <Portfolio></Portfolio>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
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
                <i className="fab fa-github"></i>
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