import React from "react";

import Modal from "./common/Modal";

const Loading = props => {
    return (
        <>
            {props.show && (
                <div
                    style={{
                        color: "#fff",
                        fontSize: "3em",
                    }}
                >
                    <Modal>加载中...</Modal>
                </div>
            )}
        </>
    );
};
export default Loading;
