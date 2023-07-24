import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyButton from './components/base/MyButton.vue';
import MyAutoComplete from './components/base/MyAutoComplete.vue';
import MyInputText from './components/base/MyInputText.vue';


const app = createApp(App)

app.component('MyButton', MyButton);
app.component('MyAutoComplete', MyAutoComplete);
app.component('MyInputText', MyInputText);
app.use(router)
app.use(store)
app.mount('#app')
