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
    <button v-on:click="entrar(usuario)" class="btn btn-primary">Entrar</button>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  props: {
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
          axios.post(`https://localhost:44383/api/Usuario`, {
              nome: usuario.nome,
              login: usuario.login,
              senha: usuario.senha,
            })
            .then((resp) => {
                console.log("resposta!", resp);
            });
    },
  },
  created() {
  },
};
</script>