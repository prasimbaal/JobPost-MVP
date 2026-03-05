<template>
  <nav class="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  
  <!-- LEFT -->
  <div class="flex items-center gap-4">
  
  <!-- Mobile menu button -->
  <button
  class="md:hidden"
  @click="toggleSidebar"
  >
  ☰
  </button>
  

  <router-link :to="homeRoute" class="text-2xl font-bold text-green-600">
  UpworkMVP
  </router-link>
  <!-- Desktop menu -->
  <div class="hidden md:flex gap-6 ml-6 text-sm font-medium">
  
  <router-link to="/">Find Work</router-link>
  
  <router-link v-if="user.role==='client'" to="/post-job">
  Post Job
  </router-link>
  
  <router-link to="/messages">Messages</router-link>
  
  <router-link to="/proposals">Proposals</router-link>
  
  </div>
  </div>
  
  
  <!-- RIGHT -->
  <div class="flex items-center gap-4">
  
  <button
  @click="user.toggleDarkMode()"
  class="text-sm border px-3 py-2 rounded-lg"
  >
  {{ user.darkMode ? "Light" : "Dark" }}
  </button>
  
  <!-- profile only after breakpoint -->
  <div v-if="user.isLoggedIn">
  {{ user.name }}
  </div>
  <div class="flex items-center gap-3 relative">

<!-- Help Icon -->
<button
  class="text-gray-500 hover:text-gray-700 dark:text-gray-300"
  title="Help"
>
  ?
</button>

<!-- Search Icon -->
<button
  v-if="!searchOpen"
  @click="searchOpen = true"
  class="text-gray-500 hover:text-gray-700 dark:text-gray-300"
>
  🔍
</button>

<!-- Expanded Search -->
<div
  v-if="searchOpen"
  class="relative transition-all duration-200"
>
  <svg
    class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>

  <input
    v-model="search"
    placeholder="Search jobs..."
    class="w-48 border dark:border-gray-700 rounded-full pl-9 pr-4 py-2
           bg-white dark:bg-gray-800
           text-gray-900 dark:text-white
           placeholder-gray-400
           focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <!-- Close button -->
  <button
    @click="searchOpen = false"
    class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
  >
    ✕
  </button>

</div>

<div class="relative" ref="dropdownRef">

<!-- Avatar -->
<div
  @click="dropdownOpen = !dropdownOpen"
  class="w-9 h-9 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-green-500"
>
  {{ user.role?.charAt(0).toUpperCase() }}
</div>

<!-- Dropdown -->
<div
  v-if="dropdownOpen"
  class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700"
>

  <router-link
    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    to="/client-dashboard"
  >
    Dashboard
  </router-link>

  <div
    class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    @click="logout"
  >
    Logout
  </div>

</div>

</div>  
  </div>
  
  </div>
  
  <router-link
  v-if="!user.isLoggedIn"
  to="/login"
  class="bg-green-600 text-white px-4 py-2 rounded-lg"
  >
  Login
  </router-link>
  
  </div>
  
  <MobileSidebar
  :open="sidebarOpen"
  @close="sidebarOpen=false"
  />
  
  </nav>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import MobileSidebar from "./MobileSidebar.vue"
  import { useRouter } from "vue-router"
  import { computed } from "vue"
  import { useUserStore } from "@/stores/userStore"
  import { onClickOutside } from '@vueuse/core'

  const dropdownRef = ref(null)

  onClickOutside(dropdownRef, () => {
    dropdownOpen.value = false
  })
  const search = ref("")
  const searchOpen = ref(false)
  const user = useUserStore()
  const router = useRouter()

  const homeRoute = computed(() => {
  if (!user.isLoggedIn) return "/"

  if (user.role === "client") {
    return "/client-dashboard"
  }

  if (user.role === "freelancer") {
    return "/findWork"
  }

  return "/"
  })

  const sidebarOpen = ref(false)
  const dropdownOpen = ref(false)
  
  const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  }
  

const logout = () => {
  user.logout()
  router.push("/login")
}



  </script>