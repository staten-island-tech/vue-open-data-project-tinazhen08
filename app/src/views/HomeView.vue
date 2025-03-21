<template>
  <main class="min-h-screen bg-gray-200 py-10">
    <div v-if="!schoolSelected" class="flex flex-wrap justify-center gap-6">
      <SchoolsCard
        v-for="(school, index) in schools"
        :key="index"
        :schools="school"
        :id="index + 1"
        class="max-w-xs"
      >
        <div class="flex justify-center mt-4">
          <button
            @click="chooseSchool(school)"
            class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Select School
          </button>
        </div>
      </SchoolsCard>
    </div>

    <div v-if="schoolSelected" class="flex justify-center mt-10">
      <SchoolInfo :school="schoolChosen" class="max-w-4xl w-full" />
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

<style scoped></style>
