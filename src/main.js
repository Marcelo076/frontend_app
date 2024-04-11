import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { DatePicker } from 'ant-design-vue';
import registerGlobalComponents from './components/Components';


const app = createApp(App)


app.use(router)
app.use(DatePicker);
registerGlobalComponents(app);

app.mount('#app')
