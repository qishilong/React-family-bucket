import React from "react";

const StudentDetail = props => {
    return (
        <>
            <p>学生详情页</p>
            <div>学号详情:{props.match.params.sno}</div>
        </>
    );
};

export default StudentDetail;
