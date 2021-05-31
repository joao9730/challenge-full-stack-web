<template>
  <form>
    <div class="form-group">
      <label>Usuário</label>
      <input
        type="text"
        v-model="usuario.login"
        class="form-control"
        placeholder="Usuário"
      />
    </div>
    <div class="form-group">
      <label >Senha</label>
      <input
        type="password"
        v-model="usuario.senha"
        class="form-control"
        placeholder="Senha"
      />
    </div>
    <br />
  </form>
    <button v-on:click="entrar(usuario)" class="btn btn-primary btn-sm" style="margin-right:30px">Entrar</button>
  <router-link to="/cadastro"><button class="btn btn-primary btn-sm">Cadastrar</button></router-link>
  <router-view/>
</template>

<script>
import axios from "axios";
import { createApp } from 'vue';

let scopeLogin = null;
export default {
  name: "Login",
  props: {
    isLoged: {}
  },
  data: () => {
    return {
      listaCadastro: [],
      usuario: {
        login: "",
        senha: "",
      },
      mensagem: "",
    };
  },
  methods: {
    entrar: (usuario) => {
          axios.get(`https://localhost:44383/api/Usuario`)
            .then((resp) => {
              resp.data.forEach(u => {
                if (u.login == usuario.login && u.senha == usuario.senha)
                {
                  createApp.$user = u;
                  console.log("teste", createApp.$user);
                  scopeLogin.$router.push('/alunos');
                }
              });
              if(!createApp.$user)
              {
                alert("Usuário não cadastrado!")
              }
            });
    },
  },
  created() {
  scopeLogin = this;
  },
};
</script>