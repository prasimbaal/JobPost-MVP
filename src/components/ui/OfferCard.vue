<template>
    <Card class="hover:shadow-md transition cursor-pointer">
    
    <h3 class="font-semibold text-lg mb-2 dark:text-white">
    {{ title }}
    </h3>
    
    <p class="text-gray-600 dark:text-gray-300">
    {{ desc }}
    </p>
    
    </Card>
    </template>
    
    <script setup>
    import Card from "./Card.vue"
    
    defineProps({
    title:String,
    desc:String
    })
    </script>