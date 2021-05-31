<template>
  <form v-if="mostrar">
    <div class="form-group">
      <label for="regAcademico">Registro Acadêmico</label>
      <input v-if="edicao"
        type="text"
        v-model="matricula.regAcademico"
        class="form-control"
        placeholder="Registro Acadêmico" readonly
      />
      <input v-if="!edicao"
        type="text"
        v-model="matricula.regAcademico"
        class="form-control" maxlength="5"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        placeholder="Registro Acadêmico" required
      />
    </div>
    <div class="form-group">
      <label for="inputName">Nome</label>
      <input
        type="text"
        v-model="matricula.nome"
        class="form-control"
        placeholder="Nome do Aluno" required
      />
    </div>
    <div class="form-group">
      <label for="inputCPF">CPF</label>
      <input
        type="text"
        v-model="matricula.cpf" maxlength="11"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        class="form-control"
        placeholder="CPF do Aluno" required
      />
    </div>
    <div class="form-group">
      <label for="inputEmail">Email</label>
      <input
        type="text"
        v-model="matricula.email"
        class="form-control"
        placeholder="Email do Aluno" required
      />
    </div>
    <br />
  <router-link to="/alunos"><button class="btn btn-primary" style="margin-right:20px" type="submit" 
  v-if="mostrar" v-on:click="!edicao? salvar(matricula) : editar(matricula)">Salvar</button>
  </router-link>
  <button class="btn btn-danger" v-if="mostrar" v-on:click="mostrar = false">Cancelar</button>
  </form>
  <button class="btn btn-light" v-if="!mostrar" 
  v-on:click="mostrar = true, edicao = false, matricula = {}">Matricular Aluno</button>
  <br/>
  <router-link to="/"><button  v-if="!mostrar" style="margin-left:10px"
  class="btn btn-danger btn-sm " v-on:click="matricula = {}">Sair</button>
  </router-link>
  <router-view/>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Registro Academico</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Ações</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aluno in alunos" v-bind:key="aluno.regAcademico">
          <td>
            {{ aluno.regAcademico }}
          </td>
          <td>
            {{ aluno.nome }}
          </td>
          <td>
            {{ aluno.cpf }}
          </td>
          <td>
            <button class="btn btn-warning btn-sm" v-on:click="habilitaEdicao(aluno), mostrar = true, edicao = true">Editar</button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" v-on:click="excluir(aluno.regAcademico)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

let scopeAlunos = null;
export default {
  name: "Alunos",
  props: {
  },
  components:{
  },
  data: () => {
    return {
      matricula:{
        regAcademico: "",
        nome: "",
        cpf: "",
        email: "",
      },
      alunos: [],
      edicao: false,
      mostrar: false
    };
  },
  methods: {
    lista: () => {
      axios.get(`https://localhost:44383/api/Aluno`).then((res) => {
        scopeAlunos.alunos = res.data;
      });
    },
    habilitaEdicao: (aluno) => {
              scopeAlunos.matricula.regAcademico = aluno.regAcademico,
              scopeAlunos.matricula.nome = aluno.nome,
              scopeAlunos.matricula.cpf = aluno.cpf,
              scopeAlunos.matricula.email = aluno.email
    },
    editar: (matricula) => {
            axios.put(`https://localhost:44383/api/Aluno/${matricula.regAcademico}`, matricula).then(() =>{
              scopeAlunos.lista();
              scopeAlunos.mostrar = false;
              alert("Dados alterados com sucesso!");
            });
    },
    excluir: (id) => {
      if(confirm("Confirmar exclusão?")){

        axios.delete(`https://localhost:44383/api/Aluno/${id}`).then(() =>{
          scopeAlunos.lista();
      });
      }
    },
    salvar: (matricula) => {
          axios.post(`https://localhost:44383/api/Aluno`, {
              regAcademico: parseInt(matricula.regAcademico),
              nome: matricula.nome,
              cpf: matricula.cpf,
              email: matricula.email
            })
            .then(() => {
                scopeAlunos.lista();
                scopeAlunos.mostrar = false;
                alert("Aluno matriculado com sucesso!");
            });
    },
    somenteNumeros:(evt) => {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}
  },
  created() {
    scopeAlunos = this;
    scopeAlunos.lista();
  },
};
</script>