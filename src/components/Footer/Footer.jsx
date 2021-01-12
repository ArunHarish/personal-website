import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div id="design-menu-footer">
                    <div id="design-symbol">
                        <span>&#125;</span>
                        <span>;</span>
                    </div>
                    <div id="design-contact">
                        <a href = "https://github.com/ArunHarish">
                            <i className="fa fa-github fa-1x"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;