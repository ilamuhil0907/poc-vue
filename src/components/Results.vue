<template>
  <p>
    Your score is {{props.score}}
  </p>
  <button @click="restart">play again</button>
</template>

<script setup lang="ts">
const props = defineProps(['score'])
const emit = defineEmits<{ (event: 'restartGame'):void }>()
const restart = () => { 
  emit('restartGame')
}
</script>

<style lang="scss" scoped>

</style>