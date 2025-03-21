<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
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

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const chartData = ref({
      labels: [],
      datasets: [],
    })

    const chartOptions = ref({
      responsive: true,
    })

    async function getData() {
      let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
      let data = await res.json()

      const labels = data.map(item => item.school_name)
      const dataValues = data.map(item => item.num_of_sat_test_takers || 0)

      chartData.value = {
        labels, 
        datasets: [
          {
            label: 'SAT Test Takers',
            data: dataValues,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      }
    }

    onMounted(() => {
      getData()
    })

    return { chartData, chartOptions }
  },
}
</script>
