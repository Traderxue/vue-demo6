import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"",
    component:()=>import("@/views/index.vue")
   },
   {
    path:"/index",
    component:()=>import("@/views/index.vue"),
    children:([
      {
        path:"",
        component:()=>import("@/views/Home/home.vue")
      },
      {
        path:"/home",
        component:()=>import("@/views/Home/home.vue")
      },
      {
        path:"/trade",
        component:()=>import("@/views/Trade/trade.vue")
      },
      {
        path:"/deriver",
        component:()=>import("@/views/Deriver/deriver.vue")
      },
      {
        path:"/mining",
        component:()=>import("@/views/Mining/mining.vue")
      },
      {
        path:"/lock",
        component:()=>import("@/views/Lock/lock.vue")
      },
      {
        path:"/login",
        component:()=>import("@/views/Login/login.vue")
      },
      {
        path:"/register",
        component:()=>import("@/views/Register/register.vue")
      }
    ])
   },
  ]
})

export default router
