import React from "react";

const WithDataGroup = Comp => {
    return class WrapperDataGroup extends React.Component {
        static defaultProps = { data: [] };
        render() {
            const comps = this.props.data.map(item => (
                <Comp
                    key={item.value}
                    info={item}
                    {...this.props}
                />
            ));
            return <>{comps}</>;
        }
    };
};

export default WithDataGroup;
