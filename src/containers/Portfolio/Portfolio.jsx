import React, { forwardRef } from "react";
import joinClassList from "../../functions/joinClassList";

class Portfolio extends React.Component {
    render() {
        const { domReference, 
                className : passedClassList, ...clonedProps } = this.props;
        const parentClassList = joinClassList([], passedClassList);
        return (
            <div {...clonedProps} className={parentClassList.join(" ")} 
                ref={domReference}>
                Portfolio
            </div>
        );
    };
};

export default forwardRef((props, reference) => {
    return <Portfolio domReference={reference} {...props} />;
});