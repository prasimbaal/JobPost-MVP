<template>
    <div class="max-w-5xl mx-auto py-10">
      <h1 class="text-2xl font-semibold mb-6 dark:text-white">
        Freelancer Dashboard
      </h1>
  
      <div class="grid grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 class="font-semibold">Submitted Proposals</h2>
          <p class="text-3xl mt-2">8</p>
        </div>
  
        <JobCard
          v-for="job in jobs"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
</template>

<script>
import jobCard from '@/components/ui/JobCard.vue'

const JobCard = jobCard
  const jobs = [
  {
  id:1,
  title:"Build Vue Landing Page",
  budget:"$300",
  description:"Need a landing page built with Vue and Tailwind",
  skills:["Vue","Tailwind","UI"],
  posted:"2 hours ago"
  }
  ]

</script>