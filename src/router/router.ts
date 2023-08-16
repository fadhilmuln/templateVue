import { createRouter, createWebHistory } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";
import Home from "../components/Home.vue"

interface Routes {
    path: string,
    component: any
}

const routes:Array<Routes> = [
    {path:'/', component: HelloWorldVue},
    {path:'/home', component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;