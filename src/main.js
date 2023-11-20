import {createApp} from 'vue'
//import store from "@/scripts/store"
import router from "@/scripts/router"
import App from './App.vue'
import axios from 'axios'


// import "@baklavajs/plugin-renderer-vue3/dist/styles.css";
//import "/src/assets/nstyle.scss";

// import "/src/assets/_variables.scss";
// import "/src/assets/bootstrap.min.css";
//import "/src/assets/mainscss.scss";
// import "/src/assets/_bootswatch.scss";

const app=createApp(App)

axios.defaults.baseURL = "http://localhost:8081"
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:8081'
app.use(router).mount('#app')
