<script lang="ts" setup>

</script>

<template>
  <ul>
  <router-link to="/" class="links">Home</router-link>
  <router-link :to="{ name:'users'}" class="links">Users</router-link>
  </ul>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-right:2rem;
}

ul * {
  margin-left: 1rem;
}
.links{
  color: #378adc;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
