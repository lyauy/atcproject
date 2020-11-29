import { createWebHistory, createRouter } from "vue-router";
import CounterParameters from "../components/CounterParameters.vue";

const routes = [
    {
        path: "/",
        name: "CounterParameters",
        component: CounterParameters,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;