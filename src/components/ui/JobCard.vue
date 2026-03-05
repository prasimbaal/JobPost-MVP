<template>
<Card>

<div class="flex justify-between mb-2">

<h3 class="font-semibold text-lg dark:text-white">
{{ job.title }}
</h3>

<span class="text-sm text-gray-500">
{{ job.budget }}
</span>

</div>

<p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
{{ job.description }}
</p>

<div class="flex gap-2 mb-4">

<span
v-for="tag in job.skills"
:key="tag"
class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
>
{{ tag }}
</span>

</div>

<div class="flex justify-between items-center">

<span class="text-xs text-gray-400"> Posted {{ job.posted }} </span>

<Button variant="primary">Submit Proposal </Button>

</div>

</Card>
</template>
    
<script setup>
import Card from "./Card.vue"
import Button from "./Button.vue"
    
defineProps({job:Object})
</script>