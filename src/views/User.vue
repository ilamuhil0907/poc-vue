<template>
  <h1>Details</h1>
  <div v-if="Object.keys(user).length!==0">
    <h4>Name: {{ user.name }} {{ user.username }}</h4>
    <h4>Lives In: {{user.address.street}} {{user.address.city}}</h4>
    <h4>Phone: {{user.phone}}</h4>

  </div>
  
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { useRoute } from "vue-router"

const user = reactive<any>({})

const route = useRoute()
onMounted(() => {
  fetch("http://localhost:3000/user/" + route.params.id)
    .then((res) => res.json())
    .then((data) => {Object.assign(user,data)})
    .catch((err) => {
      console.error(err)
    })
})
</script>
<style></style>
