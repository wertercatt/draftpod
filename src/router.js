

import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/HomePage.vue'
import DraftPage from './components/draft/DraftPage.vue'
import NavigatorPage from './components/draft/navigator/NavigatorPage.vue'
import AboutPage from './components/AboutPage.vue'

import { store, useDraftModule } from './store'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  
  routes: [
    { path: '/', component: HomePage },
    { path: '/draft/', component: NavigatorPage },
    { path: '/draft/:draft_id', component: DraftPage, props: true, 
      beforeEnter: (to, from, next) => {
        let draft_id = to.params.draft_id;
        if (draft_id in store.state.drafts) {
          useDraftModule(draft_id, { preserveState: true });
          next();
        } else {
          next("/draft/");
        }
      } 
    },
    { path: '/about', component: AboutPage },
  ],
  
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

});

