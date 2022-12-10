<template>
  <h1>Users page</h1>
  <div v-for="(user, index) in users" :key="user.id" class="user">
    <router-link class="links" :to="{name:'user' ,params:{id:user.id}}">{{
      user.name
    }}</router-link>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from "vue"
let users = reactive<any>([])
onMounted(() => {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => (data.forEach((element:any) => {
      users.push(element)
    })))
    .catch((err) => console.log(err))
})
</script>
<style scoped>
h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.user {
  margin-block: 2rem;
}
</style>
