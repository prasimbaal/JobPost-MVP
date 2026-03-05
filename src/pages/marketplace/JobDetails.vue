<template>
    <div class="min-h-screen bg-gray-50 py-10 flex justify-center">
      <div class="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
  
        <h1 class="text-2xl font-semibold mb-4">
          {{ job.title }}
        </h1>
  
        <p class="text-gray-600 mb-4">
          {{ job.description }}
        </p>
  
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="skill in job.skills"
            :key="skill"
            class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
          >
            {{ skill }}
          </span>
        </div>
  
        <p class="font-semibold text-green-600 mb-6">
          ${{ job.amount }} ({{ job.type }})
        </p>
  
        <button
          @click="showApply = true"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700"
        >
          Apply Now
        </button>
  
        <div v-if="showApply" class="mt-6 border-t pt-6">
          <h2 class="text-lg font-semibold mb-3">Submit Proposal</h2>
  
          <textarea
            v-model="cover"
            rows="4"
            placeholder="Write your proposal..."
            class="w-full border dark:border-gray-700 rounded-lg px-4 py-3"
          ></textarea>
  
          <input
            v-model="bid"
            type="number"
            placeholder="Your bid"
            class="w-full border dark:border-gray-700 rounded-lg px-4 py-3 mt-3"
          />
  
          <button
            @click="submit"
            :disabled="loading"
            class="mt-4 h-11 px-6 rounded-lg font-semibold bg-green-600 text-white"
          >
            <span v-if="!loading">Submit Proposal</span>
            <span v-else>Submitting...</span>
          </button>
  
          <div v-if="success" class="text-green-600 mt-3 font-semibold">
            Proposal submitted successfully!
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  // Fake data (same as list page)
  const job = ref({
    title: "Build Vue.js Website",
    description: "Need a professional Vue developer to build a landing page.",
    skills: ["Vue", "Tailwind", "Frontend"],
    type: "fixed",
    amount: 500
  })
  
  const showApply = ref(false)
  const cover = ref("")
  const bid = ref("")
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