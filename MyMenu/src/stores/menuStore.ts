import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const useMenuStore = defineStore('menu', () => {
  const items = ref<MenuItem[]>([
    {
      id: 1,
      name: 'Hambúrguer Clássico',
      description: 'Pão, carne de 150g, queijo prato, alface, tomate e nosso molho especial.',
      price: 25.50,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Hambúrguer Duplo',
      description: 'Pão, duas carnes de 150g, queijo cheddar, bacon crocante e cebola caramelizada.',
      price: 32.75,
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fHww'
    },
    {
      id: 3,
      name: 'Batata Frita da Casa',
      description: 'Porção generosa de batatas fritas crocantes com alecrim e páprica.',
      price: 15.00,
      image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 4,
      name: 'Refrigerante Lata',
      description: 'Escolha entre Coca-Cola, Guaraná ou Soda (350ml).',
      price: 6.00,
      image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    },
    {
      id: 5,
      name: 'Milkshake de Ovomaltine',
      description: 'Cremoso milkshake de 400ml com pedaços crocantes de Ovomaltine.',
      price: 22.00,
      image: 'https://images.unsplash.com/photo-1586917049350-f2e7c62d4bfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686'
    }
  ])

  return { items }
})
