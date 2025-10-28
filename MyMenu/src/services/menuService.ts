import api from './api'
import type { MenuItem } from '@/types'

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { data } = await api.get<{ data: MenuItem[] }>(
      '/products',
    )
    return data.data
  } catch (error) {
    console.error('Erro ao buscar itens do cardápio:', error)
    // Em um app real, poderíamos ter um tratamento de erro mais robusto
    return []
  }
}
