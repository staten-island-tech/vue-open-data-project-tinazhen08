<template>
  <main>
    <div v-if="!schoolSelected">
      <SchoolsCard v-for="(school, index) in schools" :key="index" :schools="school" :id="index + 1"
        ><button @click="chooseSchool(school)">Select School</button></SchoolsCard
      >
    </div>
    <div v-if="schoolSelected">
      <SchoolInfo :school="schoolChosen" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SchoolsCard from '@/components/SchoolsCard.vue'
import SchoolInfo from '@/components/SchoolInfo.vue'

const schools = ref('')
const schoolSelected = ref(false)
const schoolChosen = ref(null)

async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  let data = await res.json()
  schools.value = data
}

onMounted(() => {
  getData()
})

const chooseSchool = (school) => {
  schoolChosen.value = school
  console.log(schoolChosen)
  schoolSelected.value = true
}
</script>
