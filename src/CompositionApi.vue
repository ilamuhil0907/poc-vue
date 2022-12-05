//using the composition api to create a component - Similar to the functional
component in react
<script lang="ts" setup>
import { ref, onMounted, reactive,computed, nextTick } from "vue"

const count = ref(0)
const isDisabled = ref(true)
function increment() {
  count.value += 1
}
//reactive can only take Objects and not single values
const stateValue = reactive({
  count: 0,
  rawHtml:
    "<span style='color: red'>This content is rendered as raw html which is defined inside a reactive. Avoid using this to prevent xss attacks</span>",
  id: "refIncrementorBtnId",
})

const incrementreactiveCount = () => {
  stateValue.count++
  nextTick(() => {
    //unlike react we can access the updated state value using the nextTick hook 
    console.log(stateValue.count)
  })
}


const users = reactive([
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
    },
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
    },
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
    },
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
    },
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
    },
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
    },
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
    },
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
    },
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
    },
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
    },
    
  }
])

//This is a computed property dependent on the list of users
const filteredUsers  = computed(()=> users.filter(user=>user.name.includes("l")))
const input =reactive({message:"",checked:true})
//lifecycle hook
onMounted(() => {
  console.log(count.value)
})
</script>





<template>
  <h1 @click="incrementreactiveCount">
    Watch the state value change on clicking this text
    <span style="color: blue">{{ stateValue.count }}</span>
  </h1>
  <button @click="increment" :id="stateValue.id">
    Ref variable increment: {{ count }}
  </button>

  <!-- this is a directive that renders raw html -->
  <p v-html="stateValue.rawHtml" />
  <!-- This hello component is registered at the root file(in this case it is the CompositionApi.vue) to be used globally across the app without needing to import it everytime -->
  <hello msg="" class="hello"/>
  <button :disabled="isDisabled">Disabled button</button>
  <button
    @click="
      () => {
        isDisabled = !isDisabled
      }
    "
  >
    toggle disable attribute button
  </button>
  
  <!-- use the v-show="truthy expression" directive to adjust toggle opacity . v-if removes the element from the DOM  -->
  <p v-if="isDisabled" >this text will only show when the button is <b style="color:green">disabled</b>. v-if directive</p>
  <p v-else>this text will only show when the button is <b style="color:red">not disabled</b>. v-else directive</p>
  <br/>

  <p>Message is: {{ input.message }}</p>
  <input v-model="input.message" placeholder="edit me" />
  <input type="checkbox" id="checkbox" v-model="input.checked" />
  <label for="checkbox">{{ input.checked }}</label>
  <h1>Mapped list of users</h1>
  <div v-for="user in users">
    <h4>name : {{user.name}}</h4>
    <h4>email : {{user.email}}</h4>
    <h4 style="margin-bottom: 3rem">Lives in : {{user.address.city}}</h4>
  </div>
  <br/>

  <h1>List of users whose name contains 'l': To demonstrate use of computed properties </h1>
  <div v-for="user in filteredUsers">
    <h4>name : {{user.name}}</h4>
    <h4>email : {{user.email}}</h4>
    <h4 style="margin-bottom: 3rem">Lives in : {{user.address.city}}</h4>
  </div>
</template>

<style>
  .hello{
    color:green;
    text-decoration: underline;
  }
</style>