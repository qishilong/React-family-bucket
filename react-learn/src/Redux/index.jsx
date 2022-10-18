import { bindActionCreators, createStore } from "redux";

import { getDecreaseAction, getIncreaseAction, getSetAction } from "./action/action-name";
import { DECREASE, INCREASE, SET } from "./action/action-type";

//假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
//约定action的格式：{type:"操作类型", payload:附加数据}

/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === INCREASE) {
        return state + 1;
    } else if (action.type === DECREASE) {
        return state - 1;
    } else if (action.type === SET) {
        return action.payload;
    }
    return state; //如果是一个无效的操作类型，数据不变
}

const store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const bindAction = bindActionCreators(
    { getIncreaseAction, getDecreaseAction, getSetAction },
    store.dispatch,
);

console.log(store.getState()); //得到仓库中当前的数据
//向仓库分发action
// store.dispatch(getIncreaseAction());
bindAction.getIncreaseAction(); // 得到一个 increase action, 并直接分发

console.log(store.getState());

// store.dispatch(getSetAction(100));
bindAction.getSetAction(100);

console.log(store.getState()); //得到仓库中当前的数据
