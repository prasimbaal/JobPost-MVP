<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">
        Add a description
      </h2>
  
      <textarea
        v-model="model.description"
        rows="6"
        class="w-full border rounded-lg px-4 py-3"
      ></textarea>
  
      <p class="text-sm text-gray-400 mt-1">
        {{ model.description.length }} characters
      </p>
  
      <div class="mt-6 flex justify-between">
        <button @click="$emit('prev')" class="text-gray-500">
          Back
        </button>
  
        <button
          :disabled="!model.description"
          @click="$emit('next')"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 text-white disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['model'])
  defineEmits(['next', 'prev'])
  </script>