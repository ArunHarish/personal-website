import React from "react";
import classes from "./TabContent.module.scss";
import {Tab, Badge } from "react-bootstrap";
import { SkillSetContext } from "../../../contexts/SkillSet";
class TabContent extends React.Component {
    static contextType = SkillSetContext;
    render() {
        const { skillset } = this.context;
        const tabWrapperStyling = [classes.skillset_content, 
                                    "d-flex", "align-items-center",
                                    "justify-content-center"];
        return (
            <Tab.Content className={tabWrapperStyling.join(" ")}>
                {
                    skillset.map((e, i) => {
                        const badges = e.skills.map((skill, index) => {
                            return (
                                <Badge className={classes.badges} 
                                    key={`${skill}${index}`} 
                                    variant={"dark"} pill>
                                    { skill }
                                </Badge>
                            )
                        });

                        const paragraphList = e.description.map((e, i) => {
                            return (
                                <p key={i}>
                                    { e }
                                </p>
                            )
                        });

                        const skillsetListStylings = [
                            classes.skillset_list,
                            "d-flex",
                            "flex-wrap",
                            "h-auto",
                            "justify-content-center",
                        ];

                        const skillsetListParentStyling = [
                            // "d-flex",
                            "align-items-center",
                            "justify-content-center",
                        ];

                        return (
                            <Tab.Pane 
                                className={skillsetListParentStyling.join(" ")} 
                                key={`${e.label}${i}`} eventKey={e.label}>
                                <div className={skillsetListStylings.join(" ")}>
                                    { badges }
                                </div>
                                <div className={classes.skillset_description}>
                                    { paragraphList }
                                </div>
                            </Tab.Pane>
                        );
                    })
                }
            </Tab.Content>
        );
    };

};

export default TabContent;