import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { MenuItem } from './menuStore'

export interface CartItem {
  id: number // Usando o id do MenuItem para simplificar
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() => {
    return items.value.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  })

  const totalPrice = computed(() => {
    const total = items.value.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
    return parseFloat(total.toFixed(2));
  })

  function addItem(menuItem: MenuItem) {
    const existingItem = items.value.find(cartItem => cartItem.id === menuItem.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ 
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1 
      })
    }
  }

  function removeItem(itemId: number) {
    const index = items.value.findIndex(cartItem => cartItem.id === itemId)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity--
      } else {
        items.value.splice(index, 1)
      }
    }
  }
  
  function clearCart() {
    items.value = []
  }

  return { items, addItem, removeItem, clearCart, totalItems, totalPrice }
})
