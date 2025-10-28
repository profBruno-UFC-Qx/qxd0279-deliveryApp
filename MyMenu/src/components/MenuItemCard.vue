<script setup lang="ts">
import type { MenuItem } from '@/types/'
import { useCartStore } from '@/stores/cartStore'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationsStore'
import { useRouter } from 'vue-router'

const props = defineProps<{
  item: MenuItem
}>()

const cartStore = useCartStore()
const authStore = useAuthStore()
const notifications = useNotificationStore()

const router = useRouter()

function addToCart() {
  if (!authStore.isAuthenticated) {
    notifications.addError('Você precisa estar logado para adicionar itens ao carrinho.')
    router.push({ name: 'login' })
  } else {
    cartStore.addItem(props.item)
    notifications.addSuccess(`"${props.item.name}" foi adicionado ao carrinho!`)
  }
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
</script>

<template>
  <div class="menu-item">
    <img :src="item.image" :alt="item.name" class="item-image" />
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <div class="item-footer">
        <span class="price">{{ formatCurrency(item.price) }}</span>
        <button @click="addToCart">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.item-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.item-details {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.item-details h3 {
  margin-top: 0;
}
.item-footer {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-weight: bold;
  font-size: 1.2rem;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
