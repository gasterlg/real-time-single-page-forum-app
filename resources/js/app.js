require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import AppHome from './components/AppHome.vue'

Vue.use(Vuetify)

import router from './Router/router.js'
var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: {
        'app-home': AppHome
    },
    router
  });