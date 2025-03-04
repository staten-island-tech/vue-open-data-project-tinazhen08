<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

<style scoped>

</style>