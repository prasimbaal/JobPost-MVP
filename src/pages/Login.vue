<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
  
  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl w-96 shadow">
  
  <h1 class="text-2xl font-bold mb-6 dark:text-white">
  Login
  </h1>
  
  <input v-model="email" placeholder="Email" class="input mb-3" />
  <input v-model="password" type="password" placeholder="Password" class="input mb-4" />  
  <button
  @click="loginUser"
  class="w-full bg-green-600 text-white py-3 rounded-lg"
  >
  Login
  </button>
  
  <p v-if="error" class="text-red-500 mt-3 text-sm">
  {{ error }}
  </p>
  
  <div class="mt-6 text-sm text-gray-500 dark:text-gray-300">  
  <p class="font-semibold">Demo accounts:</p>
  
  <p>Client: client@demo.com / client123</p>
  <p>Freelancer: freelancer@demo.com / freelancer123</p>
  
  </div>
  
  </div>
  
  </div>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import { useUserStore } from "../stores/userStore"
  
  const email = ref("")
  const password = ref("")
  const error = ref("")
  
  const router = useRouter()
  const user = useUserStore()
  
  const loginUser = () => {
    const res = user.login(email.value, password.value)
  
    if (!res.success) {
      error.value = res.message
      return
    }
  
    if (user.role === "client") {
      router.push("/client-dashboard")
    } else {
      router.push("/freelancer-dashboard")
    }
  }
  </script>