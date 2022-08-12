import React from "react";
import Layout from "./layout.jsx";

export default function ThreeLayout() {
    return (
        <div>
            <Layout margin={20} left={<div style={{ border: " 1px solid " }}>左边栏</div>} right={<div style={{ border: " 1px solid " }}>右边栏</div>}>
                <div style={{ border: " 1px solid " }}>
                    <p>qwertyuiop</p>
                    <h1>qwertyuiop</h1>
                </div>
            </Layout>
        </div>
    );
}
