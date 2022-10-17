import React from "react";
import { Route, Switch } from "react-router-dom";

import routeConfig from "./routeConfig";

/**
 * 根据一个路由配置数组，遍历该数组，得到一组 Route 组件
 */
const getRoutes = (config, baseUrl) => {
    if (!Array.isArray(config)) {
        return null;
    }
    const routes = config.map((item, i) => {
        const { children, name, path, component: Component, ...rest } = item;
        let newPath = `${baseUrl}${path}`;
        newPath = newPath.replace(/\/\//g, "/");
        return (
            <Route
                path={newPath}
                key={i}
                {...rest}
                render={values => (
                    <Component {...values}>{getRoutes(item.children, newPath)}</Component>
                )}
            />
        );
    });
    return <Switch>{routes}</Switch>;
};

/**
 * 使用Route组件，根据不同路径，渲染顶级页面
 */
const RootRouter = () => {
    return (
        <>
            {/* 返回一组Route */}
            {getRoutes(routeConfig, "/")}
        </>
    );
};

export default RootRouter;
