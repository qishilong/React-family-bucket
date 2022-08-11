import React from "react";

function SingleLine({ name, sex, birth }) {
    return (
        <li>
            姓名: {name}
            性别: {sex === 1 ? "male" : "female"}
            出生年龄: {birth}
        </li>
    );
}

export default function Multiline(props) {
    let stus = props.stus.map((item) => <SingleLine key={item.id} {...item} />);
    return <ul>{stus}</ul>;
}
