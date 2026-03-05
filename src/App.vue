<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue'
import { inject } from '@vercel/analytics'

// Initialize Vercel Web Analytics
inject()
</script>