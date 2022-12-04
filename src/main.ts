import { createApp } from "vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import App from "./CompositionApi.vue";

const app = createApp(App)
app.component("hello",HelloWorldVue)


app.mount("#app")
