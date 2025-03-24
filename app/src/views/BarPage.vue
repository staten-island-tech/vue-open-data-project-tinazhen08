<template>
  <div class="min-h-screen bg-gray-200 py-10">
    <div class="flex flex-col items-center">
      <div v-if="selectedSchool" class="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
          <h2 class="text-2xl font-bold">{{ selectedSchool?.school_name }}</h2>
        </div>
        <BarChart />
      </div>

      <div class="mt-6 flex space-x-4">
        <RouterLink to="/" class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Back to Home
        </RouterLink>

        <RouterLink
          to="/pie-chart"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          View Pie Chart
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'

const selectedSchool = JSON.parse(localStorage.getItem('selectedSchool'))
</script>

<style scoped></style>
