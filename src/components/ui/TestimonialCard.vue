<template>
    <Card>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4">
    "{{ text }}"
    </p>
    
    <div class="flex items-center gap-3">
    
    <div class="w-10 h-10 rounded-full bg-gray-300"></div>
    
    <div>
    
    <p class="font-medium dark:text-white">
    {{ name }}
    </p>
    
    <p class="text-xs text-gray-400">
    Client
    </p>
    
    </div>
    
    </div>
    
    </Card>
    </template>
    
    <script setup>
    import Card from "./Card.vue"
    
    defineProps({
    name:String,
    text:String
    })
    </script>