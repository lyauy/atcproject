import { createWebHistory, createRouter } from "vue-router";
import CounterParameters from "../components/CounterParameters.vue";
import CounterDatas from "../components/CounterDatas.vue";
import Done from "../components/Done.vue";

const routes = [
    {
        path: "/",
        name: "CounterParameters",
        component: CounterParameters,
    },
    {
        path: "/counterdatas",
        name: "CounterDatas",
        component: CounterDatas,
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