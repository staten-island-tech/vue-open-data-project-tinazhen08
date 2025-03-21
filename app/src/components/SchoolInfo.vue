<template>
  <div class="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto flex flex-col items-center">
    <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
      <h2 class="text-2xl font-bold">{{ school.school_name }}</h2>
    </div>
    <div class="bg-gray-200 p-4 w-full">
      <h3 class="text-lg text-gray-600">Number of Test Takers: {{ school.num_of_sat_test_takers }}</h3>
      <h3 class="text-lg text-gray-600">Average Reading Score: {{ school.sat_critical_reading_avg_score }}</h3>
      <h3 class="text-lg text-gray-600">Average Math Score: {{ school.sat_math_avg_score }}</h3>
      <h3 class="text-lg text-gray-600">Average Writing Score: {{ school.sat_writing_avg_score }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  school: Object,
})
</script>

<style scoped>

</style>
