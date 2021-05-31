<template>
  <nav class="navbar navbar-light bg-light shadow">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Módulo Acadêmico</span>
  </div>
</nav>
    <img alt="Vue logo" src="./assets/logoEduca.png">
<div class="container" style="width: 50%;">
      <Login v-if="rota == 'login'"/>
      <Alunos v-if="rota == 'lista'"/>
      <Cadastro v-if="rota == 'cadastro'"/>
<button v-if="rota == 'login'" v-on:click="rota = 'cadastro'" class="btn btn-primary">Cadastrar</button>
</div>
</template>

<script>
import Alunos from './components/Alunos.vue'
import Cadastro from './components/Cadastro.vue'
import Login from './components/Login.vue'

// let scopoInicio = null;
export default {
  name: 'App',
  props:{
  },
  components: {
    Alunos,
    Cadastro,
    Login
  },
  data: () => {
    return {
      mostrar: false,
      rota: 'cadastro'
    };
  },
methods:{
},
  created() {
  },
}
</script>