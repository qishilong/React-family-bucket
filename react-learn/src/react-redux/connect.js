import { useContext, useEffect, useState } from "react";
import { bindActionCreators } from "redux";

import ctx from "./ctx";

const connect = (mapStateToProps, mapDispatchToProps) => {
    /**
     * 返回一个高阶组件
     */
    return Comp => {
        /**
         * 对于Temp组件，只有他需要的数据发生变化时才会重新渲染
         */
        const Temp = props => {
            /**
             * 从上下文中拿到数据
             */
            const store = useContext(ctx);
            const [state, setState] = useState(
                mapStateToProps && mapStateToProps(store.getState()),
            );

            /**
             * 进行浅比较，来确定组件是否重新渲染
             */
            const compare = (prev, curr) => {
                for (const key in prev) {
                    // console.log(prev);
                    // console.log(curr);
                    // console.log(prev[key]);
                    if (prev[key] !== curr[key]) {
                        return false;
                    } else {
                        return true;
                    }
                }
            };
            useEffect(() => {
                return store.subscribe(() => {
                    const newState = mapStateToProps(store.getState());
                    setState(prevState => {
                        if (compare(prevState, newState)) {
                            return prevState;
                        } else {
                            return newState;
                        }
                    });
                });
            }, [store]);

            /**
             * 得到需要传递的时间处理属性
             */
            const getEventDispatch = () => {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(store.dispatch, props);
                } else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            };

            let getDispatch = {};
            if (mapDispatchToProps) {
                getDispatch = getEventDispatch();
            }
            console.log(`${Temp.displayName}重新渲染了`, state);

            return (
                <Comp
                    {...props}
                    {...state}
                    {...getDispatch}
                />
            );
        };
        //类组件的名称和传入的组件一致
        Temp.displayName = Comp.displayName || Comp.name;
        return Temp;
    };
};

export default connect;
