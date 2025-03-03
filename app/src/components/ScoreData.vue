<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const data = ref('')
async function getData(){
    let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
    let d = await res.json()
    data.value = d
}

onMounted(()=> {
    getData();
})
</script>

<style scoped>

</style>