<template>
  <form>
    <div class="form-group">
      <label>Nome</label>
      <input
        type="text"
        v-model="usuario.nome"
        class="form-control"
        placeholder="Nome" required
      />
    </div>
    <div class="form-group">
      <label>Usuário</label>
      <input
        type="text"
        v-model="usuario.login"
        class="form-control"
        placeholder="Usuário" required
      />
    </div>
    <div class="form-group">
      <label>Senha</label>
      <input
        type="password"
        v-model="usuario.senha"
        class="form-control"
        placeholder="Senha" required
      />
    </div>
    <br />
    <button v-on:click="salvar(usuario)" class="btn btn-primary" style="margin-right:30px">Cadastrar</button>
    <router-link to="/"><button class="btn btn-danger">Cancelar</button></router-link>
  <router-view/>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Cadastro",
  props: {
    msg: String,
  },
  data: () => {
    return {
      cadastro: [],
      usuario: {
        nome: "",
        login: "",
        senha: "",
      },
      mensagem: "",
    };
  },
  methods: {
    salvar: (dadosCadastro) => {
          axios.post(`https://localhost:44383/api/Usuario`, dadosCadastro)
            .then((res) => {
                if(res.status == 200 || res.status == 201)
                {
                    alert("Cadastrado com sucesso!", res.status);
                }
                else{
                    alert("Erro ao cadastrar usuário!", res.status);
                    return;
                }

            });
    },
  },
  created() {
  },
};
</script>