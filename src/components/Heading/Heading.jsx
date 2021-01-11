import React from "react";
import classes from "./Heading.module.scss";

class Heading extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className={classes.heading_wrapper}>
                <div className={classes.heading}>
                    <div className={classes.overlay}></div>
                    <h3>{ children }</h3>
                </div>
            </div>
        )
    }
}

export default Heading;