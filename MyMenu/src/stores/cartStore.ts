import { defineStore } from 'pinia'

export interface CartItem {
  id: number 
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  
})
