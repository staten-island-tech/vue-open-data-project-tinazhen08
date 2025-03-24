<template>
    <div class="w-full mt-4">
      <Pie :data="pieChartData" :options="pieChartOptions" class="h-96" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Pie } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  const selectedSchool = JSON.parse(localStorage.getItem('selectedSchool'))
  
  const pieChartData = ref({
    labels: ['Reading', 'Math', 'Writing'],
    datasets: [
      {
        data: [
          selectedSchool.sat_critical_reading_avg_score,
          selectedSchool.sat_math_avg_score,
          selectedSchool.sat_writing_avg_score,
        ],
        backgroundColor: ['#E57373', '#64B5F6', '#F48FB1'],
      },
    ],
  })
  
  const pieChartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  })
  </script>
  
  <style scoped></style>
  