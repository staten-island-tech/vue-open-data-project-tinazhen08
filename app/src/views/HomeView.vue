<template>
  <main>
    <ScoreCard
      v-for="(score, index) in scores"
      :key="index"
      :scores="score"
      :id="index+1"
    />
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ScoreCard from "@/components/ScoreCard.vue";
import { Bar } from 'vue-chartjs'
const scores = ref('')
async function getData(){
    let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
    let data = await res.json()
    scores.value = data
}

onMounted(() => {
    getData();
})
</script>
