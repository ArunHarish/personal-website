import React from "react";
import { Router, NavLink, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Nav, Navbar, Col } from "react-bootstrap";
import { createBrowserHistory } from 'history';
import Helmet from "react-helmet";
// Importing css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// Simple context to share router history object
const HistoryContext = React.createContext();


class LogoBar extends React.Component {
    render() {
        return (
            <div id="logo-bar">
                <div id="name">
                    <div id="this-is-small">
                        <span id="magenta">this</span>.
                    </div>
                    <div id="title">
                        <a href="/about">
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
    static contextType = HistoryContext;
    render() {
        
        return (
            <div id="menu-wrapper">
                <Navbar className="justify-content-end" expand="sm">
                    <Navbar.Toggle aria-controls="nav-option"></Navbar.Toggle>
                    <Navbar.Collapse bg="light" id="nav-option">
                        <Nav className="mr-auto">
                            <Router history={this.context}>
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
    static contextType = HistoryContext;
    render() {
        return (
            <div id="top-bar">
                <LogoBar></LogoBar>
                <div id="design-menu">
                    <span>
                        &#123;
                    </span>
                </div>
                <MenuBar history={this.context}></MenuBar>
            </div>
        )
    }
}

class Heading extends React.Component {
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
    static contextType = HistoryContext;
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            display : true
        }
    }

    render() {
        return (
            <Col id = "information-wrapper">
                <Router history={this.context}>
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
                <Router history={this.context}> 
                    <TransitionGroup>
                        <CSSTransition in={false} appear mountOnEnter unmountOnExit classNames="content" timeout={{
                            enter : 500, exit : 5000
                        }}>
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
                <div id="design-menu-footer">
                    <div className="design-symbol">
                        <span>&#125;</span>
                    </div>
                    <div className="design-contact">
                        <a href = "https://github.com/ArunHarish">
                            <i className="fa fa-github fa-1x"></i>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div id = "content-wrapper">
                <HistoryContext.Provider value={createBrowserHistory()}>
                    <TopBar></TopBar>
                    <Content></Content>
                    <FooterBar></FooterBar>
                </HistoryContext.Provider>
            </div>
        );
    }
}

export default App;