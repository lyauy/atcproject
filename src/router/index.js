import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import CounterParameters from "../components/CounterParameters.vue";
import CounterDatas from "../components/CounterDatas.vue";
import Counting from "../components/Counting.vue";
import Done from "../components/Done.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/counterparameters",
        name: "CounterParameters",
        component: CounterParameters,
    },
    {
        path: "/counterdatas",
        name: "CounterDatas",
        component: CounterDatas,
    },
    {
        path: "/counting",
        name: "Counting",
        component: Counting,
    },
    {
        path: "/done",
        name: "Done",
        component: Done,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;