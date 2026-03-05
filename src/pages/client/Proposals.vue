<template>
    <div class="max-w-4xl mx-auto py-10">
      <h1 class="text-2xl font-semibold mb-6 dark:text-white">
        Proposals
      </h1>
  
      <div
        v-for="proposal in proposals"
        :key="proposal.id"
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-4"
      >
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold text-lg">
              {{ proposal.freelancer }}
            </h2>
            <p class="text-gray-500 dark:text-gray-300 mt-2">
              {{ proposal.cover }}
            </p>
          </div>
  
          <div class="text-right">
            <p class="text-green-600 font-semibold">
              ${{ proposal.bid }}
            </p>
            <button class="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const proposals = ref([
    {
      id: 1,
      freelancer: "John Developer",
      cover: "I have 5 years experience in Vue and Tailwind...",
      bid: 450
    },
    {
      id: 2,
      freelancer: "Sarah Backend",
      cover: "I can integrate APIs efficiently and securely...",
      bid: 500
    }
  ])
  </script>