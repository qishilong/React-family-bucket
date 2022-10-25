import store from ".";
import { asyncDecreaseFn, asyncIncreaseFn, decreaseFn, increaseFn } from "./action/counter";

window.increaseFn = () => {
    store.dispatch(increaseFn());
};

window.decreaseFn = () => {
    store.dispatch(decreaseFn());
};

window.asyncIncreaseFn = () => {
    store.dispatch(asyncIncreaseFn());
};

window.asyncDecreaseFn = () => {
    store.dispatch(asyncDecreaseFn());
};
