import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Rutes = [
    {
        path: "/",
        children: <Page1 />
    },
    {
        path: "/DetailA",
        children: <Page1DetailA />
    },
    {
        path: "/DetailB",
        children: <Page1DetailB />
    },
];