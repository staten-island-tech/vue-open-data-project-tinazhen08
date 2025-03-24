<template>
  <main class="min-h-screen bg-gray-200 py-6">
    <SiteHeader />

    <div class="mb-6 px-4 max-w-screen-xl mx-auto mt-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a school..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 max-w-screen-xl mx-auto"
    >
      <SchoolsCard
        v-for="(school, index) in filteredSchools"
        :key="index"
        :schools="school"
        :id="school.dbn"
        @select-school="chooseSchool(school)"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SchoolsCard from '@/components/SchoolsCard.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const schools = ref([])
const searchQuery = ref('')

const router = useRouter()

async function getData() {
  const res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  const data = await res.json()
  schools.value = data
}

onMounted(() => {
  getData()
})

const filteredSchools = computed(() => {
  return schools.value.filter((school) => {
    return school.school_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

const chooseSchool = (school) => {
  localStorage.setItem('selectedSchool', JSON.stringify(school))
  router.push('/bar-chart')
}
</script>

<style scoped></style>
