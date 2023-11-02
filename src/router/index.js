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
    component:()=>import("@/views/index.vue")
   },
   {
    path:"/trade",
    component:()=>import("@/views/Trade/trade.vue")
   }
  ]
})

export default router
