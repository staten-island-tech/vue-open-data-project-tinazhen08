<template>
  <div class="flex flex-col items-center">
    <div v-if="selectedSchool" class="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
      <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
        <h2 class="text-2xl font-bold">{{ selectedSchool?.school_name }}</h2>
      </div>
      <div class="w-full mt-4">
        <Bar :data="chartData" :options="chartOptions" class="h-96" />
      </div>
    </div>

    <div class="mt-6 flex space-x-4">
      <button
        @click="goBackToHome"
        class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Back to Home
      </button>

      <button
        @click="goToPieChart"
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
      >
        View Pie Chart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { useRouter } from 'vue-router'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const router = useRouter()
const selectedSchool = JSON.parse(localStorage.getItem('selectedSchool'))

const chartData = ref({
  labels: ['Reading', 'Math', 'Writing'],
  datasets: [
    {
      label: 'Average SAT Score',
      data: [
        selectedSchool.sat_critical_reading_avg_score,
        selectedSchool.sat_math_avg_score,
        selectedSchool.sat_writing_avg_score,
      ],
      backgroundColor: ['#E57373', '#64B5F6', '#F48FB1'],
      borderColor: ['#D32F2F', '#1976D2', '#D81B60'],
      borderWidth: 1,
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
})

const goBackToHome = () => {
  router.push({ name: 'home' })
}

const goToPieChart = () => {
  router.push({ name: 'pie-chart' })
}
</script>

<style scoped></style>
