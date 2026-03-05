<template>
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <div
          v-for="(label, index) in steps"
          :key="index"
          class="flex-1 mx-1"
        >
          <div
            class="h-2 rounded-full transition-all duration-300"
            :class="currentStep >= index 
              ? 'bg-green-600' 
              : 'bg-gray-200'"
          ></div>
        </div>
      </div>
  
      <div class="flex justify-between text-xs mt-2 text-gray-600 dark:text-gray-300">
        <span v-for="(label, i) in steps" :key="i">
          {{ label }}
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    currentStep: Number
  })
  
  const steps = [
    "Title",
    "Skills",
    "Budget",
    "Description",
    "Review"
  ]
  </script>