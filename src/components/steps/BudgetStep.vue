<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">
        Set your budget
      </h2>
  
      <div class="flex gap-4 mb-4">
        <button
          @click="model.type='fixed'"
          :class="btnClass('fixed')"
        >Fixed</button>
  
        <button
          @click="model.type='hourly'"
          :class="btnClass('hourly')"
        >Hourly</button>
      </div>
  
      <input
        v-model="model.amount"
        type="number"
        placeholder="Enter amount"
        class="w-full border rounded-lg px-4 py-3"
      />
  
      <div class="mt-6 flex justify-between">
        <button @click="$emit('prev')" class="text-gray-500">
          Back
        </button>
  
        <button
          :disabled="!model.amount"
          @click="$emit('next')"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 text-white disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['model'])
  defineEmits(['next', 'prev'])
  
  const btnClass = (val) =>
    `px-5 py-2 rounded-lg border ${
      props.model.type === val
        ? 'bg-green-600 text-white'
        : 'bg-white'
    }`
  </script>