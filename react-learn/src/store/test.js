import store from ".";
import { asyncDecrease, asyncIncrease, decrease, increase } from "./action/counter";
import { fetchStudents } from "./action/student/searchResult";

window.fetchStudents = function () {
    store.dispatch(fetchStudents());
};

window.increase = function () {
    store.dispatch(increase());
};

window.decrease = function () {
    store.dispatch(decrease());
};

window.asyncIncrease = function () {
    store.dispatch(asyncIncrease());
};

window.asyncDecrease = function () {
    store.dispatch(asyncDecrease());
};
