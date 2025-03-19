<template>
    <div>
        <h2>{{ school.school_name }}</h2>
        <h3>Number of Test Takers: {{ school.num_of_sat_test_takers }}</h3>
        <h3>Average Reading Score: {{ school.sat_critical_reading_avg_score }}</h3>
        <h3>Average Math Score: {{ school.sat_math_avg_score }}</h3>
        <h3>Average Writing Score: {{ school.sat_writing_avg_score }}</h3>
    </div>
</template>

<script setup>
defineProps({
    school: Object
})
</script>

<style scoped>

</style>