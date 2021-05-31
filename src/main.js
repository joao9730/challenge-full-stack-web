import { createApp } from 'vue'
import App from './App.vue'
import Cadastro from './components/Cadastro.vue'
import Alunos from './components/Alunos.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'


const routes = [
    {path: "/", component: Login},
    {path: "/alunos", component: Alunos},
    {path: "/cadastro", component: Cadastro},
]

const router = VueRouter.createRouter({
    routes,
})
const app = createApp({})

app.use(router)
createApp(App).mount('#app')
