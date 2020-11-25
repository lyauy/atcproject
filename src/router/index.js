import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import CounterParameters from "../components/CounterParameters.vue";
import CounterDatas from "../components/CounterDatas.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;