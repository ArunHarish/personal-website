import React from "react";
import {HashRouter as Router, NavLink, Switch, Route} from "react-router-dom";
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
                        <a href="/#/about">
                            <span id="orange">arun</span>
                        </a>
                        .
                        <span id="cyan">harish</span>.
                    </div>
                    <div id="this-is-small">
                        <div id="status">
                            <Router>
                                <Switch>
                                    <Route path="/about">
                                        about
                                    </Route>
                                    <Route exact path="/demo">
                                        demo
                                    </Route>
                                    <Route exact path="/portfolio">
                                        portfolio
                                    </Route>
                                </Switch>
                            </Router>
                        </div> = ()
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
                    <Navbar.Collapse id="nav-option">
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

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }

    render() {
        return (
            <div id = "information-wrapper">
                <Router>
                    <Switch>
                        <Route path="/about">
                            <h1>Hi there</h1>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div id = "content-wrapper">
                <TopBar></TopBar>
                <Content></Content>
            </div>
        )
    }
}

export default App;