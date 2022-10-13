import { useMemo, useState } from "react";

const Item = props => {
    return <li>{props.value}</li>;
};

const App = () => {
    const [range] = useState({ min: 10, max: 10000 });
    const [n, setN] = useState(0);

    const list = useMemo(() => {
        const lists = [];
        for (let i = range.min; i < range.max; i++) {
            console.log(1);
            lists.push(
                <Item
                    key={i}
                    value={i}
                >
                    {i}
                </Item>,
            );
        }
        return lists;
    }, [range.min, range.max]);
    // const lists = [];
    // for (let i = range.min; i < range.max; i++) {
    //     console.log(1);
    //     lists.push(
    //         <Item
    //             key={i}
    //             value={i}
    //         >
    //             {i}
    //         </Item>,
    //     );
    // }
    // return lists;

    return (
        <>
            <ul>{list}</ul>
            <input
                type="number"
                value={n}
                onChange={e => setN(previous => (previous = e.target.value))}
            />
        </>
    );
};;

export default App;
