import Vue from 'vue'
import axios from 'axios'

// Importación de bootsratp
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// CSS principal
import './styles/index.css'

// Importación VueRx
import VueRx from 'vue-rx'
Vue.use(VueRx)

// Componentes
import Footer from './components/footer/footer.vue'
import Header from './components/header/header.vue'
import PageMain from './components/pages/main/main.vue'

// Definición
Vue.config.productionTip = false

// Header
new Vue({
  render: h => h(Header)
}).$mount('#header')

// App
new Vue({
  render: h => h(PageMain),
  data() {
    return {
      currentprice: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.currentprice = response))
  }
}).$mount('#app')

// Footer
new Vue({
  render: h => h(Footer)
}).$mount('#footer')