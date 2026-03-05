<template>
    <div class="min-h-screen bg-white dark:bg-gray-800 py-10 flex justify-center">
      <div class="w-full max-w-3xl">
  
        <h1 class="text-2xl font-semibold mb-6">
          Available Jobs
        </h1>
  
  
        <div
          v-for="job in filteredJobs"
          :key="job.id"
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-4"
        >
          <h2 class="text-lg font-semibold">
            {{ job.title }}
          </h2>
  
          <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {{ job.description.substring(0, 100) }}...
          </p>
  
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="skill in job.skills"
              :key="skill"
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
            >
              {{ skill }}
            </span>
          </div>
  
          <div class="flex justify-between items-center mt-4">
            <span class="font-semibold text-green-600">
              ${{ job.amount }} ({{ job.type }})
            </span>
  
            <router-link
              :to="'/job/' + job.id"
              class="h-10 px-5 flex items-center rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              View Details
            </router-link>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const search = ref("")
  
  const jobs = ref([
    {
      id: 1,
      title: "Build Vue.js Website",
      description: "Need a professional Vue developer to build a landing page.",
      skills: ["Vue", "Tailwind", "Frontend"],
      type: "fixed",
      amount: 500
    },
    {
      id: 2,
      title: "API Integration",
      description: "Looking for backend developer to integrate REST APIs.",
      skills: ["API", "Django", "Backend"],
      type: "hourly",
      amount: 25
    }
  ])
  
  const filteredJobs = computed(() =>
    jobs.value.filter(job =>
      job.title.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  </script>