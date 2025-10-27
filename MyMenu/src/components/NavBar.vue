<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const cartStore = useCartStore()
const router = useRouter()

function handleLogout() {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }">MyMenu</router-link>
    </div>
    <div class="navbar-links">
      <router-link :to="{ name: 'home' }">Cardápio</router-link>
      <router-link :to="{ name: 'cart' }">
        Carrinho ({{ cartStore.totalItems }})
      </router-link>
      <template v-if="!authStore.isAuthenticated">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </template>
      <template v-else>
        <span>Olá, {{ authStore.user?.name }}</span>
        <a @click.prevent="handleLogout" href="#">Sair</a>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}
.navbar-brand a {
  font-weight: bold;
  font-size: 1.5rem;
}
.navbar a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
}
.navbar a:hover {
  text-decoration: underline;
}
.navbar-links span {
  margin-left: 1.5rem;
}
</style>
