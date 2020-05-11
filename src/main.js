import Vue from 'vue'
import App from './App.vue'

import "./assets/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

Vue.config.productionTip = false

new Vue({
    data:{
      menuOpen: false,
    },
    render: h => h(App),
}).$mount('#app')
