import { useEffect } from "react";

import resetScroll from "./resetScroll";

const useScroll = pathname => {
    useEffect(() => resetScroll, [pathname]);
};

export default useScroll;
