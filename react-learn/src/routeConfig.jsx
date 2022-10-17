import Home from "./Home";
import News from "./News";
import NewsDetail from "./NewsDetail";
import NewsHome from "./NewsHome";
import NewsSearch from "./NewsSearch";

const config = [
    {
        path: "/news",
        name: "news",
        component: News,
        children: [
            { path: "/newsDetail", name: "newsDetail", exact: true, component: NewsDetail },
            { path: "/newsHome", name: "newsHome", exact: true, component: NewsHome },
            { path: "/NewsSearch", name: "newsSearch", exact: true, component: NewsSearch },
        ],
    },
    { path: "/", name: "home", component: Home },
];

export default config;
