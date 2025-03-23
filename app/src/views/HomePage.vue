<template>
  <main class="min-h-screen bg-gray-200 py-10">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
      <div v-for="(school, index) in schools" :key="index" class="w-full flex justify-center">
        <div
          class="bg-white p-4 rounded-lg shadow-md w-full max-w-sm h-64 flex flex-col justify-between"
        >
          <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
            <h2 class="text-2xl font-bold text-center truncate">{{ school.school_name }}</h2>
          </div>
          <div class="p-4 flex flex-col justify-between flex-grow">
            <p class="text-gray-600 text-center text-sm">DBN: {{ school.dbn }}</p>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="flex justify-center">
              <button
                @click="chooseSchool(school)"
                class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Select School
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const schools = ref([])
const router = useRouter()

async function getData() {
  const res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  const data = await res.json()
  schools.value = data
}

onMounted(() => {
  getData()
})

const chooseSchool = (school) => {
  localStorage.setItem('selectedSchool', JSON.stringify(school))
  router.push('/bar-chart')
}
</script>

<style scoped></style>
