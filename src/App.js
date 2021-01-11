import React from "react";
import { Router, NavLink, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Nav, Navbar, Col } from "react-bootstrap";
import { createBrowserHistory } from 'history';
import { Helmet } from "react-helmet";
import About from "./containers/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";


const HistoryContext = React.createContext();


class LogoBar extends React.Component {
    render() {
        return (
            <div id="logo-bar">
                <div id="name">
                    <div id="this-is-small">
                        <i>
                            <span id="purple">this</span>.
                        </i>
                    </div>
                    <div id="title">
                        <a href="/">
                            <span id="orange">arun</span>
                            <span id="greenish">.</span>
                            <span id="cyan">harish</span>
                        </a>
                    </div>
                    <div id="this-is-small">
                         = ()
                        <span id="red">
                           &nbsp;=&gt;
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
                                <a target={"_blank"} 
                                    rel={"noopener noreferrer"} 
                                    href={"https://demo.arunharish.com"} className={"menu-link"}>
                                    Demo
                                </a>
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
                <div id="menu-wrapper">
                    <LogoBar></LogoBar>
                    <div id="design-menu">
                        <span>
                            &#123;
                        </span>
                    </div>
                    <MenuBar history={this.context}></MenuBar>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    static contextType = HistoryContext;
    render() {
        return (
            <Col id = "information-wrapper">
                <Router history={this.context}>
                    <Switch>
                        <Redirect strict exact from="/" to = "/about" />
                        <Route path="/">
                            <Helmet>
                                <title>
                                    About | Arun Harish Balasubramonian
                                </title>
                            </Helmet>
                        </Route>
                    </Switch> 
                </Router>
                <Router history={this.context}> 
                    <TransitionGroup>
                        <CSSTransition in={false} appear mountOnEnter
                            unmountOnExit classNames="content" timeout={{
                                enter : 500, exit : 5000
                        }}>
                            <Switch>  
                                <Route path="/">
                                    <About></About>
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
                    <div id="design-symbol">
                        <span>&#125;</span>
                        <span>;</span>
                    </div>
                    <div id="design-contact">
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