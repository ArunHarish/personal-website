import React, { createContext } from "react";
import data from "../model/about.json";

const SkillSetContext = createContext(data);

class SkillSet extends React.Component {
    render() {
        return (
            <SkillSetContext.Provider value={ data }>
                { this.props.children }
            </SkillSetContext.Provider>
        );
    }
}

export default SkillSet;
export { SkillSetContext };