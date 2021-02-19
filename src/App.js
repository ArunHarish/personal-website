import React from "react";
import { Router, NavLink, Route, Redirect } from "react-router-dom";
import { Nav, Navbar, Col } from "react-bootstrap";
import smoothScroll from "smoothscroll-polyfill";
// import { useRouteMatch } from "react-router-dom";

import { createBrowserHistory } from 'history';
import { Helmet } from "react-helmet";

import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Certification from "./containers/Certification/Certification";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBook ,faInfoCircle, faAward } from "@fortawesome/free-solid-svg-icons";

const HistoryContext = React.createContext();

smoothScroll.polyfill();


class LogoBar extends React.Component {
    render() {
        return (
            <div id="logo-bar">
                <div id="name">
                    <div id="this-is-small">
                        <i>
                            <span>this</span>.
                        </i>
                    </div>
                    <div id="title">
                        <a href="/">
                            <span>arun</span>
                            <span>.</span>
                            <span>harish</span>
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

    constructor(props) {
        super(props);
        this.state = {
            collapsed : true
        };

        // Bindings
        this.onBlurCheckCallback = this.onBlurCheckCallback.bind(this);
        this.onToggleCallback = this.onToggleCallback.bind(this);
        this.onLinkCallback = this.onLinkCallback.bind(this);
        this.setBurgerMenuReference = this.setBurgerMenuReference.bind(this);

        this.burgerMenu = null;
    };

    setBurgerMenuReference(reference) {
        this.burgerMenu = reference;
    };

    onBlurCheckCallback(event) {
        if (!event) {
            console.warn("Warning: The burger menu blur callback " +
                        "not called through appropriate event.");
            return ;
        };

        const { target } = event;
        if (!target) {
            console.warn("Warning: The burger menu blur callback " + 
            "not called through appropriate event.");
            return ;
        };
        
        // Check whether the target is part of the burger menu
        // by traversing through the ancestors
        let currentElement = target;

        while (currentElement && currentElement !== this.burgerMenu) {
            // If reached body or window then it is not from the burger menu
            if (currentElement === document.body || currentElement === window) {
                this.setState({
                    collapsed : true
                });
                break ;
            };
            
            currentElement = currentElement.parentElement;
        };

    };

    onToggleCallback() {
        this.setState({
            collapsed : !this.state.collapsed
        });
    };

    onLinkCallback(event) {
        event.stopPropagation();
        this.setState({
            collapsed : true
        });
    };

    componentDidMount() {
        window.addEventListener("orientationchange", this.onBlurCheckCallback);
        window.addEventListener("blur", this.onBlurCheckCallback);
        window.addEventListener("click", this.onBlurCheckCallback);
    };

    componentWillUnmount() {
        window.removeEventListener("orientationchange", 
                                this.onBlurCheckCallback);
        window.removeEventListener("blur", this.onBlurCheckCallback);
        window.removeEventListener("click", this.onBlurCheckCallback);
    };

    render() {
        
        return (
            <div id="menu-wrapper">
                <Navbar ref={this.setBurgerMenuReference} 
                    className="p-0 justify-content-end d-md-flex" expand="sm" 
                    expanded={!this.state.collapsed}>
                    <Navbar.Toggle onClick={this.onToggleCallback}
                        aria-controls="nav-option"></Navbar.Toggle>
                    <Navbar.Collapse bg="light" id="nav-option">
                        <Nav className="mr-auto">
                            <Router history={this.context}>
                                <NavLink activeClassName="selected" 
                                    to="/about" className="menu-link"
                                    onClick={this.onLinkCallback}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                    </div>
                                    <div className="label">
                                        About
                                    </div>
                                </NavLink>
                                <NavLink activeClassName={"selected"}
                                    to="/certifications" className={"menu-link"}
                                    onClick={this.onLinkCallback}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faAward} />
                                    </div>
                                    <div className="label">
                                        Certifications
                                    </div>
                                </NavLink>
                                <NavLink activeClassName={"selected"} 
                                    to="/portfolio" className={"menu-link"}
                                    onClick={this.onLinkCallback}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faBook} />
                                    </div>
                                    <div className="label">
                                        Portfolio
                                    </div>
                                </NavLink>
                                <a target={"_blank"} 
                                    rel={"noopener noreferrer"} 
                                    href={"https://demo.arunharish.com"} className={"menu-link"}
                                    onClick={this.onLinkCallback}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                    <div className="label">
                                        Demo
                                    </div>
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
                    <MenuBar></MenuBar>
                    <Router history={this.context}>
                        <Redirect exact from="/" to="/about"></Redirect>
                        <Route exact path="/about">
                            <Helmet>
                                <title>
                                    Arun | About Me - My interests and skill sets
                                </title>
                            </Helmet>
                        </Route>
                        <Route exact path="/certifications">
                            <Helmet>
                                <title>
                                    Arun | My Certifications
                                </title>
                            </Helmet>
                        </Route>
                        <Route exact path="/portfolio">
                            <Helmet>
                                <title>
                                    Arun | Portfolio - My commercial and University project works
                                </title>
                            </Helmet>
                        </Route>
                        <Route exact path="/demo">
                            <Helmet>
                                <title>
                                    Arun | Demo - My stuff
                                </title>
                            </Helmet>
                        </Route>
                    </Router>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    // import context
    static contextType = HistoryContext;
    constructor() {
        super();
        // To hold page list references
        this.pageScrollData = [{
            route : "/about",
            component : About,
            dom : null
        }, {
            route : "/certifications",
            component : Certification,
            dom : null
        }, {
            route : "/portfolio",
            component : Portfolio,
            dom : null
        }];

        // Bindings
        this.addPage = this.addPage.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
        
    };

    addPage(node, routeIndex) {
        if (!node || !node instanceof Node) {
            throw new Error("Requires a node to set page list");
        };

        if (!this.pageScrollData) {
            throw new Error("Requires scroll data to be defined.");
        };

        this.pageScrollData[routeIndex].dom = node;
    };

    onRouteChange(nextRoute) {
        let pageIndex;
        for (pageIndex = 0 ; 
                pageIndex < this.pageScrollData.length; pageIndex++) {
            let element = this.pageScrollData[pageIndex];
            if (nextRoute.pathname === element.route) {
                if (!element.dom) {
                    throw new Error("Please check the dom is set.")
                };
                const { top, left } = element.dom.getBoundingClientRect();

                window.scrollTo({
                    top : window.scrollY + top - 80,
                    left : left + 0,
                    behavior : "smooth"
                });

                break ;
            };
        };


        if (pageIndex === this.pageScrollData.length) {
            // If this is reached then there is some logical error
            throw new Error("Invalid path provided, please check valid path list");
        };
    };
    
    componentDidMount() {
        const browserHistory = this.context;
        
        if (!browserHistory) {
            throw new Error("Requires browser history");
        };

        // Reset if necessary
        this.onRouteChange(browserHistory.location);
        
        // Listen for route path change
        browserHistory.listen(this.onRouteChange);
    };

    render() {
        return (
            <Col id = "information-wrapper">
                <div className={"content"}>
                    {
                        this.pageScrollData.map((e, i) => 
                            <e.component key={e.route} ref={node => {
                                this.addPage(node, i);
                            }} />
                        )
                    }      
                </div>
            </Col>
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
                    <Footer></Footer>
                </HistoryContext.Provider>
            </div>
        );
    }
}

export default App;