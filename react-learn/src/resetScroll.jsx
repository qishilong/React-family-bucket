/**
 * 滚动条横向和纵向复位动画
 */
let timer1, timer2;

const animate = (start, end, callback) => {
    const duration = 16;
    const total = 300;
    const times = Math.ceil(total / duration);
    let currentTimes = 0;
    const dis = (end - start) / times;

    const timer = setInterval(() => {
        currentTimes++;
        start += dis;
        if (currentTimes === times) {
            start = end;
            clearInterval(timer);
        }
        callback(start);
    }, duration);
    return timer;
};

const resetScroll = () => {
    clearInterval(timer1);
    clearInterval(timer2);
    const html = document.documentElement;
    timer1 = animate(html.scrollTop, 0, value => {
        html.scrollTop = value;
    });
    timer2 = animate(html.scrollLeft, 0, value => {
        html.scrollLeft = value;
    });
};

export default resetScroll;
