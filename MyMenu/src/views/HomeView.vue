<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue'
import { useMenuStore } from '@/stores/menuStore'

const menuStore = useMenuStore()
</script>

<template>
  <div class="home-view">
    <h1>Nosso Cardápio</h1>
    <div class="menu-items">
      <MenuItem
        v-for="item in menuStore.items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 1rem;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>
