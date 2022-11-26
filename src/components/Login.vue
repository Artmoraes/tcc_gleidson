<template>
  <div class="container-general">
    <div class="text-center mb-4">
      <h1 class="h2 text-primary">Remedin do Bão</h1>
      <p class="lead">Logue abaixo para entrar no sistema</p>
    </div>
    <div class="container-login">
      <label class="label-general">Nome do Usuário:
        <input class="input-general" type="text" name="nameUser" placeholder="Digite o nome do usuário"
          v-model="input_name" />
      </label>
      <br />
      <br />
      <label class="label-general">Senha:
        <input class="input-general" type="password" name="passUser" placeholder="Digite sua senha"
          v-model="input_password" />
      </label>
      <br />
      <button class="btn btn-lg btn-primary" v-on:click="submitForm">
        Entrar
      </button>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
const routes = {
  '/home': Home,
}
export default {
  name: 'Login',
  data() {
    return {
      input_name: '',
      input_password: '',
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log('Usuário logado');
    }
  },
}
</script>

<style scoped>
.container-general {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  width: calc(100% - 20px);
  max-width: 570px;
}

.container-login {
  align-items: center;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 570px;
  height: 370px;
  margin: auto;
  top: 50px;
  margin-bottom: -10px;
  border-radius: 10px;
}

.label-general {
  display: flex;
  flex-direction: column;
}

.input-general {
  display: block;
  width: 100%;
  height: calc(1.8125rem + 2px);
  padding: 0.25rem 0.7rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
}

.input-general:hover {
  box-shadow: #b7d9fa;
  border-radius: 0.2rem;
}

.lead {
  font-size: 1.09375rem;
  font-weight: 300;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.text-primary {
  color: #000000 !important;
}

.h2,
h2 {
  font-size: 1.53125rem;
}

.text-center {
  text-align: center !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

*,
:after,
:before {
  box-sizing: border-box;
}

div {
  display: block;
}

.btn {
  background-color: #495057;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.25rem 0.7rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-group-lg>.btn,
.btn-lg {
  padding: 0.35rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-primary {
  color: #fff;
}

button,
select {
  text-transform: none;
}

button,
input {
  overflow: visible;
}
</style>
