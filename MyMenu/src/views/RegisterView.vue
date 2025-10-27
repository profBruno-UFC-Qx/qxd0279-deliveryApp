<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

function handleRegister() {
  // Simulação de cadastro
  if (name.value && email.value && password.value) {
    alert('Cadastro realizado com sucesso! (Simulação)')
    router.push({ name: 'login' })
  } else {
    alert('Por favor, preencha todos os campos.')
  }
}
</script>

<template>
  <div class="register-view">
    <form @submit.prevent="handleRegister" class="register-form">
      <h2>Cadastro</h2>
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Cadastrar</button>
       <p class="login-link">
        Já tem uma conta? <router-link :to="{ name: 'login' }">Faça o login</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.register-form {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
.login-link {
  margin-top: 1rem;
  text-align: center;
}
</style>
