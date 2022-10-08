import React from "react";

const WithLogin = Comp => {
    return function WrapperLogin(props) {
        if (props.isLogin) {
            return <Comp {...props} />;
        }
        return null;
    };
};

export default WithLogin;
