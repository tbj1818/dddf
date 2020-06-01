import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
