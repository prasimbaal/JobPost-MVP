<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">
        What skills are required?
      </h2>
  
      <input
        v-model="skillInput"
        @keyup.enter="addSkill"
        placeholder="Type a skill and press enter"
        class="w-full border rounded-lg px-4 py-3"
      />
  
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="(skill, i) in model.skills"
          :key="i"
          class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm cursor-pointer"
          @click="removeSkill(i)"
        >
          {{ skill }}
        </span>
      </div>
  
      <div class="mt-6 flex justify-between">
        <button @click="$emit('prev')" class="text-gray-500">
          Back
        </button>
  
        <button
          :disabled="model.skills.length === 0"
          @click="$emit('next')"
          class="h-11 px-6 rounded-lg font-semibold bg-green-600 text-white disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps(['model'])
  defineEmits(['next', 'prev'])
  
  const skillInput = ref("")
  
  const addSkill = () => {
    if (skillInput.value.trim()) {
      props.model.skills.push(skillInput.value.trim())
      skillInput.value = ""
    }
  }
  
  const removeSkill = (i) => {
    props.model.skills.splice(i, 1)
  }
  </script>