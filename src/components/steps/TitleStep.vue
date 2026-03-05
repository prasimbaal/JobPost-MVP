<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">
        Write a title for your job post
      </h2>
  
      <input
        v-model="model.title"
        placeholder="e.g. Build a Vue.js website"
        class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
      />
  
      <div class="mt-6 flex justify-end">
        <button
          :disabled="!model.title"
          @click="$emit('next')"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 hover:bg-green-700 text-white disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['model'])
  defineEmits(['next'])
  </script>