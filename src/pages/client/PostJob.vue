<template>
    <div class="min-h-screen bg-gray-50 flex justify-center py-12">
      <div class="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
  
        <Stepper :currentStep="step" />
  
        <component
          :is="steps[step]"
          :model="form"
          @next="step++"
          @prev="step--"
        />
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Stepper from '../../components/Stepper.vue'
  import TitleStep from '../../components/steps/TitleStep.vue'
  import SkillsStep from '../../components/steps/SkillsStep.vue'
  import BudgetStep from '../../components/steps/BudgetStep.vue'
  import DescriptionStep from '../../components/steps/DescriptionStep.vue'
  import ReviewStep from '../../components/steps/ReviewStep.vue'
  
  const step = ref(0)
  
  const steps = [
    TitleStep,
    SkillsStep,
    BudgetStep,
    DescriptionStep,
    ReviewStep
  ]
  
  const form = ref({
    title: '',
    skills: [],
    type: 'fixed',
    amount: '',
    description: ''
  })
  </script>