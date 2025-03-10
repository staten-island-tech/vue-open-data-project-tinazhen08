<template>
    <div>
        <h2>{{ scores.school_name }}</h2>
        <h3>{{ id }}</h3>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    scores: Object,
    id: Number
})
</script>

<style scoped>

</style>