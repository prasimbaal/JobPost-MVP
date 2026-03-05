<template>
    <div>
      <h2 class="text-xl font-semibold mb-6">
        Review your job post
      </h2>
  
      <div class="space-y-3 text-sm">
        <p><strong>Title:</strong> {{ model.title }}</p>
        <p><strong>Skills:</strong> {{ model.skills.join(', ') }}</p>
        <p><strong>Budget:</strong> {{ model.type }} - ${{ model.amount }}</p>
        <p><strong>Description:</strong> {{ model.description }}</p>
      </div>
  
      <div class="mt-6 flex justify-between">
        <button @click="$emit('prev')" class="text-gray-500">
          Back
        </button>
  
        <button
          @click="submit"
          :disabled="loading"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 text-white"
        >
          <span v-if="!loading">Post Job</span>
          <span v-else>Posting...</span>
        </button>
      </div>
  
      <div v-if="success" class="mt-4 text-green-600 font-semibold">
        ✅ Job posted successfully!
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps(['model'])
  defineEmits(['prev'])
  
  const loading = ref(false)
  const success = ref(false)
  
  const submit = () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      success.value = true
    }, 1500)
  }
  </script>