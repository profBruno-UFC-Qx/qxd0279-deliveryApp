<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationsStore'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()
const notifications = useNotificationStore()

function handleLogin() {
  // Simulação de login
  if (email.value && password.value) {
    authStore.login(email.value) // Usando o email como nome de usuário
    router.push({ name: 'home' })
  } else {
    notifications.addError('Por favor, preencha e-mail e senha.')
  }
}
</script>

<template>
  <div class="login-view">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
      <p class="register-link">
        Não tem uma conta? <router-link :to="{ name: 'register' }">Cadastre-se</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.login-form {
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
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.register-link {
  margin-top: 1rem;
  text-align: center;
}
</style>
