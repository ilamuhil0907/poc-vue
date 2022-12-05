<template>
  <div class="box" @click="clearTimer" v-if="state.showBlock">Click me</div>
</template>
<script lang="ts" setup>
import { reactive, onUpdated, onMounted } from "vue"
const props = defineProps(["delay"])
const state = reactive({
  showBlock: false,
  timer: null as any,
  reactionTime: 0,
})

const clearTimer = () => {
  clearInterval(state.timer)
  emits("end", state.reactionTime)
}
const emits = defineEmits<{
  (event: "end", reactionTime: number): void
}>()

const startTimer = () => {
  console.log("timer started")
  state.timer = setInterval(() => {
    state.reactionTime += 10
  }, 10)
}
onMounted(() => {
  setTimeout(() => {
    state.showBlock = true
    startTimer()
  }, props.delay)
})

</script>

<style>
.box {
  width: 10rem;
  height: 10rem;
  background-color: lightblue;
  margin-inline: auto;
  margin-top: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
