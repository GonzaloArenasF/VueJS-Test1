import Vue from 'vue'

// Importación de bootsratp
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// CSS principal
import './styles/index.css';

// Componentes
import Footer from './components/footer/footer.vue';
import Header from './components/header/header.vue';
import PageMain from './components/pages/main/main.vue';

// Definición
Vue.config.productionTip = false

// Header
new Vue({
  render: h => h(Header)
}).$mount('#header');

// App
new Vue({
  render: h => h(PageMain)
}).$mount('#app');

// Footer
new Vue({
  render: h => h(Footer)
}).$mount('#footer');