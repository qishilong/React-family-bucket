import store from ".";
import {
    asyncDecreaseFn,
    asyncIncreaseFn,
    autoIncreaseFn,
    decreaseFn,
    increaseFn,
    stopAutoIncreaseFn,
} from "./action/counter";
import { setFetchStudent } from "./action/student/searchResult";

window.fetchStudent = () => {
    store.dispatch(setFetchStudent());
};
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

window.autoIncrease = () => {
    store.dispatch(autoIncreaseFn());
};

window.stopAutoIncrease = () => {
    store.dispatch(stopAutoIncreaseFn());
};
