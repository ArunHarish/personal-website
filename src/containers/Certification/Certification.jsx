import React, { forwardRef } from "react";
import Heading from "../../components/Heading/Heading";
import classes from "./Certification.module.scss";
import joinClassList from "../../functions/joinClassList";

class Certification extends React.Component {
    render() {
        const { domReference, 
            className : passedClassList, ...clonedProps } = this.props;
        const parentClassList = joinClassList([classes.certification_wrapper],
                                                passedClassList);
        return (
            <div {...clonedProps} className={parentClassList.join(" ")} 
                ref={this.props.domReference}>
                <Heading>Certification</Heading>
            </div>
        );
    };
};

export default forwardRef((props, reference) => {
    return <Certification {...props} domReference={reference}></Certification>;
});