//using the composition api to create a component - Similar to the functional
component in react
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"

const count = ref(0)
const isDisabled = ref(true)
function increment() {
  count.value += 1
}
//reactive can only take Objects and not single values
const stateValue = reactive({
  count: 0,
  rawHtml: "<span style='color: red'>This content is rendered as raw html which is defined inside a reactive. Avoid using this to prevent xss attacks</span>",
  id:"refIncrementorBtnId"
})
//lifecycle hook
onMounted(() => {
  console.log(count.value)
})
</script>
<template>
  <h1 @click="stateValue.count++">Watch the state value change on clicking this text <span style="color: blue;">{{stateValue.count}}</span></h1>
  <button @click="increment" :id="stateValue.id">Ref variable increment: {{ count }}</button>

  <!-- this is a directive that renders raw html -->
  <p v-html="stateValue.rawHtml"/>
  <!-- This hello component is registered at the root file(in this case it is the CompositionApi.vue) to be used globally across the app without needing to import it everytime -->
  <hello msg=""/>
  <button :disabled="isDisabled">Disabled button</button>
  <button @click="()=>{isDisabled = !isDisabled}">toggle disable attribute button</button>
</template>
