<script setup lang="ts">
import type { CartItem } from '@/stores/cartStore';


function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const items: CartItem[] = [{
  id: 1,
  name: 'Mocked Item',
  quantity: 10,
  price: 10.00
}]
</script>

<template>
  <div class="cart-view">
    <h2>Seu Carrinho</h2>
    <div class="empty-cart">
      <p>Seu carrinho está vazio.</p>
      <router-link :to="{ name: 'home' }">Ver cardápio</router-link>
    </div>
    <div>
      <ul class="cart-items">
        <li v-for="cartItem in items" :key="cartItem.id" class="cart-item">
          <div class="item-info">
            <span class="item-name">{{ cartItem.name }} ({{ cartItem.quantity }}x)</span>
            <span class="item-price">{{ formatCurrency(cartItem.price * cartItem.quantity) }}</span>
          </div>
          <button class="remove-btn">Remover</button>
        </li>
      </ul>
      <div class="cart-summary">
        <p>Total de itens: </p>
        <p class="total-price">Total: </p>
        <button class="checkout-btn">Finalizar Pedido</button>
        <button class="clear-btn">Limpar Carrinho</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.empty-cart {
  text-align: center;
  padding: 2rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
}
.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.item-info {
  display: flex;
  flex-direction: column;
}
.item-name {
  font-weight: bold;
}
.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.cart-summary {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #000;
  text-align: right;
}
.total-price {
  font-size: 1.2rem;
  font-weight: bold;
}
.checkout-btn, .clear-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.checkout-btn {
  background-color: #28a745;
}
.clear-btn {
  background-color: #6c757d;
  margin-left: 0.5rem;
}
</style>
