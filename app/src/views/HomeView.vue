<template>
  <main>
    <div v-if="!schoolSelected">
      <ScoreCard
        v-for="(school, index) in schools"
        :key="index"
        :schools="school"
        :id="index+1"
      ><button @click="chooseSchool(school)">
        Select School
      </button></ScoreCard>
    </div>
    <div v-if="schoolSelected">
      
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ScoreCard from "@/components/SchoolsCard.vue";
import SchoolInfo from "@/components/SchoolInfo.vue";
const schools = ref('')
const schoolSelected = ref(false)
const schoolName = ref(null)
async function getData(){
    let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
    let data = await res.json()
    schools.value = data
}

onMounted(() => {
    getData();
})

const chooseSchool = (school)=>{
  const schoolName = school.school_name
  console.log(schoolName)
  schoolSelected.value = true
}

</script>
