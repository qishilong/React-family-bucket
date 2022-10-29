import React from "react";

import ctx from "./ctx";

const Provider = props => {
    return <ctx.Provider value={props.store}>{props.children}</ctx.Provider>;
};

export default Provider;
