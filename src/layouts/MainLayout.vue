<template>
    <div :class="user.darkMode ? 'dark' : ''">
      <div class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <div class="px-6 py-6">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/layout/Navbar.vue'
  import Footer from '../components/layout/Footer.vue'
  import { useUserStore } from '../stores/userStore'


  const user = useUserStore()

</script>