import React, { PureComponent } from "react";
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
        class Temp extends PureComponent {
            static contextType = ctx;

            /**
             * 得到需要传递的时间处理属性
             */
            getEventDispatch = () => {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(this.store.dispatch, this.props);
                } else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, this.store.dispatch);
                }
            };
            constructor(props, context) {
                super(props, context);
                this.store = this.context;
                if (mapStateToProps) {
                    //状态中的数据，来自于仓库中映射的结果
                    this.state = mapStateToProps(this.store.getState(), this.props);
                    //监听仓库中的数据变化，得到一个取消监听的函数
                    this.unListen = this.store.subscribe(() => {
                        this.setState(mapStateToProps(this.store.getState(), this.props));
                    });
                }

                if (mapDispatchToProps) {
                    this.getDispatch = this.getEventDispatch();
                }
            }

            componentWillUnmount() {
                //当组件卸载时，取消监听
                if (this.unListen) {
                    this.unListen();
                }
            }

            render() {
                console.log(`${Temp.displayName}重新渲染了`, this.state);
                return (
                    <Comp
                        {...this.props}
                        {...this.state}
                        {...this.getDispatch}
                    />
                );
            }
        }

        //类组件的名称和传入的组件一致
        Temp.displayName = Comp.displayName || Comp.name;
        return Temp;
    };
};

export default connect;
