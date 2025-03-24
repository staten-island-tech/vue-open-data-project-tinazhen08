<template>
  <div class="bg-white p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
      <h2 class="text-2xl font-semibold truncate">{{ schools.school_name }}</h2>
    </div>

    <div class="bg-gray-100 p-4 w-full">
      <h3 class="text-lg text-gray-700 font-medium truncate">{{ id }}</h3>
    </div>

    <div class="bg-gray-100 p-4 flex justify-center">
      <button
        @click="selectSchool"
        class="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-200"
      >
        Select School
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  schools: Object,
  id: String,
})

const emit = defineEmits(['select-school'])

const selectSchool = () => {
  emit('select-school', props.schools)
}
</script>

<style scoped></style>

