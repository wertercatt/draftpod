import Vue from 'vue'

import 'bootswatch/dist/slate/bootstrap.min.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/slate.css'

import router from './router'
import store from './store'


// do we need to tear down the pick_timer when exiting or somehow make it global?

// overly chatty PACK_TO_PICK (AI ends up calling it as well)

// TODO: implement separate piles for instants and sorceries in deck

// TODO: color_order should be stored with the deck in DeckLands 
// (currently doesn't survive reload)

// TODO: flicker when pack is loading

// TODO: cleanup Pile (code too intermingled)

// TODO: some additional gradiants

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h('router-view')
}).$mount('#app');
