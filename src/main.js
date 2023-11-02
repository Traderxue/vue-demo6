import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import i18n from "@/lang/index.js"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)

app.use(ElementPlusIconsVue)

app.use(ElementPlus, {
    locale: zhCn,
  })
  

app.use(createPinia())
app.use(router)

app.mount('#app')
