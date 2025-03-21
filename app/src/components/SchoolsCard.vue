<template>
  <div class="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto flex flex-col items-center">
    <div class="bg-gray-600 text-white p-4 rounded-t-lg w-full">
      <h2 class="text-2xl font-bold">{{ schools.school_name }}</h2>
    </div>
    <div class="bg-gray-200 p-4 w-full">
      <h3 class="text-lg text-gray-800">{{ id }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  schools: Object,
  id: Number,
})
</script>

<style scoped>
</style>
