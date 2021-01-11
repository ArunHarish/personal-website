import React from "react";
import classes from "./TabContent.module.scss";
import {Tab, Badge } from "react-bootstrap";
import { SkillSetContext } from "../../../contexts/SkillSet";
class TabContent extends React.Component {
    static contextType = SkillSetContext;
    render() {
        const { skillset } = this.context;
        return (
            <Tab.Content className={classes.skillset_content}>
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

                        return (
                            <Tab.Pane key={`${e.label}${i}`} eventKey={e.label}>
                                <div className={classes.skillset_list}>
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