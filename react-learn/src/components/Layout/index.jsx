import "./index.less";

import { Component } from "react";

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">{this.props.header}</header>
                <div className="middle">
                    <aside className="aside">{this.props.aside}</aside>
                    <div className="main">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
export default Layout;
