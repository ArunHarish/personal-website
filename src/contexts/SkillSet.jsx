import React, { createContext } from "react";
import data from "../model/about.json";

const SkillSetContext = createContext(data);

class SkillSet extends React.Component {
    constructor() {
        super();
        this.state = {
            selected : null
        };
        // Binding
        this.onSelectionChange = this.onSelectionChange.bind(this);
    };

    onSelectionChange(nextKey) {
        let nextIndex = data.skillset.findIndex(e => e.label === nextKey);
        this.setState({
            selected : nextIndex
        });
    };

    render() {
        const shared = {
            ...this.state,
            ...data,
            onSelectionChange : this.onSelectionChange
        };

        return (
            <SkillSetContext.Provider value={ shared }>
                { this.props.children }
            </SkillSetContext.Provider>
        );
    }
}

export default SkillSet;
export { SkillSetContext };