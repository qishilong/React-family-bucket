import React, { Component } from "react";
import Form from ".";

class Test extends Component {
    render() {
        return (
            <>
                <Form
                    onSubmit={datas => {
                        console.log(datas);
                    }}
                >
                    <div>
                        账号:
                        <Form.Input name="loginId" />
                    </div>
                    <div>
                        密码:
                        <Form.Input
                            name="password"
                            type="password"
                        />
                    </div>
                    <div>
                        <Form.Button>提交</Form.Button>
                    </div>
                </Form>
            </>
        );
    }
}

export default Test;
