import React, { Component } from "react";

export default class NewEditionRef extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    handleClick = () => {
        // console.log(this.ref.current);
        this.ref.current.focus();
    };
    render() {
        return (
            <>
                <input
                    ref={this.ref}
                    type="text"
                />
                <button onClick={this.handleClick}>聚焦</button>
            </>
        );
    }
}
