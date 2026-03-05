<template>
    <button
    :class="[
    'px-4 py-2 rounded-lg font-medium transition',
    variant === 'primary' && 'bg-green-600 text-white hover:bg-green-700',
    variant === 'secondary' && 'bg-gray-200 dark:bg-gray-700',
    variant === 'outline' && 'border border-gray-300 dark:border-gray-600'
    ]"
    >
    <slot/>
    </button>
    </template>
    
    <script setup>
    defineProps({
    variant:{
    type:String,
    default:'primary'
    }
    })
</script>