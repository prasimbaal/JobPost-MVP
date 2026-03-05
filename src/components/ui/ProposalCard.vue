<template>
<Card>

<div class="flex justify-between">

<h3 class="font-semibold dark:text-white">
{{ proposal.job }}
</h3>

<span class="text-sm text-gray-500">
{{ proposal.status }}
</span>

</div>

<p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
Bid: ${{ proposal.bid }}
</p>

</Card>
</template>

<script setup>
import Card from "./Card.vue"

defineProps({proposal:Object})
</script>