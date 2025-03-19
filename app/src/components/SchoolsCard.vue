<template>
    <div>
        <h2>{{ schools.school_name }}</h2>
        <h3>{{ id }}</h3>
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    schools: Object,
    id: Number
})
</script>

<style scoped>

</style>