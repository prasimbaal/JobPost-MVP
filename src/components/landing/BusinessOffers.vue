<template>
    <section class="py-20">
    
    <div class="max-w-7xl mx-auto px-6">
    
    <h2 class="text-3xl font-bold mb-10 dark:text-white">
    Solutions for every business
    </h2>
    
    <div class="grid md:grid-cols-3 gap-6">
    
    <OfferCard
    title="Enterprise"
    desc="Scale your workforce"
    />
    
    <OfferCard
    title="Agencies"
    desc="Manage multiple freelancers"
    />
    
    <OfferCard
    title="Startups"
    desc="Build your team quickly"
    />
    
    </div>
    
    </div>
    
    </section>
    </template>
    
    <script setup>
    import OfferCard from "../ui/OfferCard.vue"
    </script>