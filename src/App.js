import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Spinner} from "react-bootstrap";
// Importing css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

class TopBar extends React.Component {
    render() {
        return (
            <div id="top-bar">
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
                <div id="design-menu">
                    <span>
                        &#123;
                    </span>
                </div>

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
            "display" : this.props.visible ? "block" : "none"
        }
        return (
            <div id="overlay" style={displayStyle}>
                <Spinner animation="grow"></Spinner>
            </div>
        )
    }

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false
        }
    }
    render() {
        return (
            <div id = "content-wrapper">
                <LoadBar visibile={this.state.loading}></LoadBar>
                <TopBar></TopBar>
            </div>
        )
    }
}

export default App;

console.log()