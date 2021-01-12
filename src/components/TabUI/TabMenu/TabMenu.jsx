import * as fontIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { SkillSetContext } from "../../../contexts/SkillSet";

import classes from "./TabMenu.module.scss";
class TabPane extends React.Component {
    static contextType = SkillSetContext;
    render() {
        const navWrapperClassList = [
                                        classes.nav_wrapper, "d-md-flex", 
                                        "justify-content-between", 
                                        "flex-grow", "flex-column", "h-auto",
                                        "d-none", "flex-lg-row"
                                    ];
        const navItemClassList = [
                                    classes.nav_link, "flex-grow-1", 
                                ];
        const navLinkClassList = [
                                    "d-flex", "justify-content-center",
                                    "align-items-center", "d-none", "d-md-flex"
                                ];
        const { skillset : tabMenuKeys, selected } = this.context;
        const { defaultSkillSet : defaultMenuKey } = this.context;

        const dropdownParentList = [
            classes.dropDownWrapper,
            "d-md-none", "w-100", "flex-1", "d-flex"
        ];

        const dropdownToggleList = [
            classes.dropDownMenuToggle,
            "d-flex", "w-100", "justify-content-center", "align-items-center"
        ];

        const dropdownIcons = [
            classes.icon,
            "d-flex", "justify-content-center", "align-items-center"
        ];

        const menuItemListWrapper = [classes.menuItemWrapper,
                        "w-100"];
        const menuItemWrapper = [classes.menu, "d-flex"];

        const labelStyling = ["flex-md-grow-1"];

        let selectedContent;

        if (selected && selected < tabMenuKeys.length) {
            selectedContent = tabMenuKeys[selected];
        } else {
            selectedContent = tabMenuKeys[defaultMenuKey];
        };
                                
        return (
            <>
                <Dropdown drop={"up"} 
                    className={dropdownParentList.join(" ")}>
                    <Dropdown.Toggle variant={"dark"}
                        className={dropdownToggleList.join(" ")}>
                        <div className={classes.selection}>
                            { selectedContent.label }
                        </div>
                        <FontAwesomeIcon icon={fontIcons.faBars} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={menuItemListWrapper.join(" ")}>
                        {
                            tabMenuKeys.map((e, i) => {
                                return (
                                    <Dropdown.Item
                                        className={menuItemWrapper.join(" ")}
                                        key={`dropdown${e.label}${i}`} 
                                        onSelect={() => this.setState({
                                            selected : i
                                        })}
                                        eventKey={e.label}>
                                        <div 
                                            className={dropdownIcons.join(" ")}>
                                            <FontAwesomeIcon 
                                                icon={fontIcons[e.icon]} />
                                        </div>
                                        <div className={classes.label}>
                                            { e.label }
                                        </div>
                                    </Dropdown.Item>
                                );
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Nav className={navWrapperClassList.join(" ")}>
                    {
                        tabMenuKeys.map((e, i) => {
                            return (
                                <Nav.Item className={navItemClassList.join(" ")} 
                                    key={`nav${e.label}${i}`}>
                                    <Nav.Link 
                                        className={navLinkClassList.join(" ")} 
                                        eventKey={e.label}>
                                        <div className={classes.icon_wrapper}>
                                            <FontAwesomeIcon 
                                                    icon={fontIcons[e.icon]} />
                                        </div>
                                        <div className={labelStyling.join(" ")}>
                                            { e.label }
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })
                    }
                </Nav>
            </>
        );
    }
};

export default TabPane;