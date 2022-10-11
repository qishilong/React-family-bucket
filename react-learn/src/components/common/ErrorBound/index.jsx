import { PureComponent } from "react";

class ErrorBound extends PureComponent {
    state = {
        isError: false,
    };

    static getDerivedStateFromError(error) {
        console.log("出错了！");
        return { isError: true };
    }
    componentDidCatch(error, info) {
        console.log("记录错误信息");
    }

    render() {
        if (this.state.isError) {
            return <h1>Error!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBound;
