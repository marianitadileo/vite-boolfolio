import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import AboutUs from "./pages/AboutUs.vue";
import PostList from "./pages/PostList.vue"

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/",
            name: "about",
            component: AboutUs
        },
        {
            path: "/",
            name: "posts",
            component: PostList
        }
    ]
});
    
export { router };