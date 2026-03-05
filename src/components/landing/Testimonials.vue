<template>
    <section class="bg-gray-50 dark:bg-gray-900 py-20">

    <div class="max-w-7xl mx-auto px-6">

    <h2 class="text-3xl font-bold mb-10 dark:text-white">
    Trusted by businesses worldwide
    </h2>

    <div class="grid md:grid-cols-3 gap-6">

    <TestimonialCard
    name="Sarah"
    text="This platform changed how we hire freelancers"
    />

    <TestimonialCard
    name="Michael"
    text="Amazing talent pool"
    />

    <TestimonialCard
    name="Emma"
    text="Found the perfect developer"
    />

    </div>

    </div>

    </section>
</template>
    
<script setup>
import TestimonialCard from "../ui/TestimonialCard.vue"
</script>