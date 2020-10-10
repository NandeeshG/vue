import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cd130318 = () => interopDefault(import('../pages/about_me.vue' /* webpackChunkName: "pages/about_me" */))
const _08dc3b5a = () => interopDefault(import('../pages/resume/index.vue' /* webpackChunkName: "pages/resume/index" */))
const _54a64b50 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about_me",
    component: _cd130318,
    name: "about_me"
  }, {
    path: "/resume",
    component: _08dc3b5a,
    name: "resume"
  }, {
    path: "/",
    component: _54a64b50,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
