import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

const A = props => {
    return (
        <>
            组件A
            {/* 第一种实现方式 */}
            {/* <B {...props} /> */}
            <BWrapper />
        </>
    );
};

const B = props => {
    console.log(props);
    return (
        <>
            <p>组件B</p>
            <button
                onClick={() => {
                    props.history.push("/");
                }}
            >
                跳转到首页
            </button>
        </>
    );
};

// 第二种实现方式
const BWrapper = withRouter(B);

// 猜想实现细节
// const withRouter = Comp => {
//     return function routerWrapper(props) {
//         return (
//             // 获取上下文中的信息
//             <Comp
//                 {...props}
//                 history={上下文中的history}
//             />
//         );
//     };
// };

const C = () => {
    return <>没有找到页面</>;
};

const Index = props => {
    return (
        <>
            <p>首页</p>
            <button
                onClick={() => {
                    props.history.push("/a");
                }}
            >
                跳转到组件A
            </button>
        </>
    );
};

const NonRoutingComponentsGetRoutingInformation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path="/a"
                    component={A}
                />
                <Route
                    path="/"
                    component={Index}
                />
                <Route component={C} />
            </Switch>
        </BrowserRouter>
    );
};

export default NonRoutingComponentsGetRoutingInformation;
