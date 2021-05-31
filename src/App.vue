<template>
  <nav class="navbar navbar-light bg-light shadow">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Módulo Acadêmico</span>
  </div>
</nav>
    <img alt="Vue logo" src="./assets/logoEduca.png">
<div class="container" style="width: 50%;">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  props:{
  },
  components: {
  },
  data: () => {
    return {
      mostrar: false,
      user: {}
    };
  },
methods:{
},
  created() {
    this.$router.push('/')
  },
}
</script>