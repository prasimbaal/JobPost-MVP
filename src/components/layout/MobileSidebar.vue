<template>
    <div
    v-if="open"
    class="fixed inset-0 bg-black bg-opacity-40 z-40"
    @click="$emit('close')"
    ></div>
    
    <div
    :class="[
    'fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition',
    open ? 'translate-x-0' : '-translate-x-full'
    ]"
    >
    
    <div class="p-6 border-b dark:border-gray-700 font-bold">
    Menu
    </div>
    
    <div class="flex flex-col p-4 gap-4">
    
    <router-link @click="$emit('close')" to="/findWork">
    Find Work
    </router-link>
    
    <router-link @click="$emit('close')" to="/post-job">
        Hire Job seekers
    </router-link>

    <router-link @click="$emit('close')" to="/messages">
    Message interviews
    </router-link>
    
    <router-link @click="$emit('close')" to="/proposals">
    Proposals
    </router-link>
    <router-link @click="$emit('close')" to="/prices">
    Prices
    </router-link>

    
    </div>
    
    </div>
    </template>
    
    <script setup>
    defineProps({
    open: Boolean
    })
    </script>