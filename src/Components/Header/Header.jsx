import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="Header">
                <h1>
                    Recibo Simples
                </h1>
            </div>
        );
    }
}

export default Header;