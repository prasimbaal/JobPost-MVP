<template>
  <MainLayout>
    <router-view />
  </MainLayout>
  <Analytics />
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue'
import { Analytics } from '@vercel/analytics/vue'
</script>