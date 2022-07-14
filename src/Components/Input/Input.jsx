import React from "react";

import "../FormularioRecibo/FormularioRecibo.css"

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    changeInput(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <label>
                {this.props.valor}<br/>
                <input type={this.props.type} id={this.props.id} onChange={(e) => this.changeInput(e)}/>
            </label>
        );
    }
}

export default Input