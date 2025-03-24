<template>
    <div class="w-full mt-4">
      <Bar :data="chartData" :options="chartOptions" class="h-96" />
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

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
  </script>
  
  <style scoped></style>
  
  