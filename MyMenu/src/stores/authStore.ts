import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import api from '@/services/api';
import type { User } from '@/types';

// Tente carregar o usuário do localStorage ao iniciar
const initialUser = JSON.parse(localStorage.getItem('user') || "{}");

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>(initialUser);

  const token = computed(() => user.value.jwt)
  const isAuthenticated = computed(() => user.value.jwt);
  const isAdmin = computed(() => user.value.role?.name === 'administrator');

  async function login(credentials: { identifier: string; password: string }) {
    try {
      const response = await api.post('/auth/local', credentials);
      const { jwt, user: userData } = response.data;
      
      const role = await getRoles(jwt)
      user.value = { ...userData, role, jwt} ;

      localStorage.setItem('token', jwt);
      localStorage.setItem('user', JSON.stringify(user.value));

      return true;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  }

  async function getRoles(jwt: string) {
    const { data } = await api.get('/users/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: {
            populate: ["role"],
        }
    })
    return { name: data.role.type }
  }

  function logout() {
    user.value = {} as User;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return { user, token, login, logout, isAuthenticated, isAdmin };
});
