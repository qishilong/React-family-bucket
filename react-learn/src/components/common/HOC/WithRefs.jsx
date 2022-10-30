import React from "react";

const WithRefs = Comp => {
    class RefsWrapper extends React.Component {
        render() {
            // forwordRef 代表要转发的 ref {current: null}
            const { forwardRef, ...rest } = this.props;
            return (
                <Comp
                    ref={forwardRef}
                    {...rest}
                />
            );
        }
    }
    return React.forwardRef((props, ref) => {
        return (
            <RefsWrapper
                {...props}
                forwardRef={ref}
            />
        );
    });
};
export default WithRefs;
