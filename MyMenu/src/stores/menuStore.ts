import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuItem } from '@/types'
import axios from 'axios'

const STRAPI_API_URL = 'http://localhost:1337/api'

export const useMenuStore = defineStore('menu', () => {
  const items = ref<MenuItem[]>([])

  async function fetchItems() {
    try {
      const response = await axios.get<{ data: MenuItem[] }>(
        `${STRAPI_API_URL}/products?populate=*`
      )

      items.value = response.data.data
      
    } catch (error) {
      console.error('Erro ao buscar itens do cardápio:', error)
      // Opcional: tratar o erro, por exemplo, mostrando uma mensagem ao usuário
    }
  }

  return { items, fetchItems }
})