<script lang="ts" setup>
import {reactive} from "vue"
import Block from "./components/Block.vue"
import Results from "./components/Results.vue";
const state = reactive({
  isPlaying: false,
  delay: null as Number | null,
  score:0
})

const endGame = (reactionTime:number) => { 
  state.score = 1 / (reactionTime/100)
  reactionTime = 0
}

const restart = () => {
  state.isPlaying = false
  state.delay = null
  state.score =0
}

const startTimer= ()=> {
  state.isPlaying = true
  state.delay = Math.floor(2000 + Math.random() * 8000)
}

</script>

<template>
  <h1>Reaction Timer</h1>
  <p>Get a score as close to 1 as possible</p>
  <button @click="startTimer" :disabled="state.isPlaying">Start game</button>
  <Block :delay="state.delay" @end="endGame" v-if="state.isPlaying"/>
  <Results :score="state.score" @restart-game="restart" v-if="(state.score!==0)"/>
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
</style>
