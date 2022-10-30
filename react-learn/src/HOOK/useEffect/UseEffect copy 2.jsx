import { createRef, useEffect, useState } from "react";

const ref = createRef();
window.timer = null;

const MoveBlock = props => {
    const stop = () => {
        clearInterval(window.timer);
        window.timer = null;
    };
    useEffect(() => {
        const div = ref.current;
        let currentTimes = 0;
        const disX = props.x / 1000;
        const disY = props.y / 1000;
        window.timer = setInterval(() => {
            currentTimes++;
            const newLeft = disX * currentTimes + "px";
            const newTop = disY * currentTimes + "px";
            div.style.left = newLeft;
            div.style.top = newTop;
            if (currentTimes === 1000) {
                stop();
            }
        }, 10);
        return stop; // 直接使用 stop 作为清除函数
    });

    return (
        <div
            ref={ref}
            style={{
                position: "fixed",
                width: 100,
                height: 100,
                left: 0,
                top: 0,
                background: "#000",
            }}
        ></div>
    );
};

const UseEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(true);
    return (
        <div style={{ marginTop: 200 }}>
            {show && (
                <>
                    <p>
                        x:
                        <input
                            type="number"
                            value={position.x}
                            onChange={e => {
                                setPosition({ ...position, x: parseInt(e.target.value) });
                            }}
                        />
                    </p>
                    <p>
                        y:
                        <input
                            type="number"
                            value={position.y}
                            onChange={e => {
                                setPosition({ ...position, y: parseInt(e.target.value) });
                            }}
                        />
                    </p>
                    <MoveBlock
                        x={position.x}
                        y={position.y}
                    />
                </>
            )}
            <p>
                <button onClick={() => setShow(!show)}>显示/隐藏</button>
            </p>
        </div>
    );
};

export default UseEffect;
