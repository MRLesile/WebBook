/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/zl/Documents/GitHubWebBook/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-56aa2e3a",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-56aa2e3a").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-140a2a18",
    path: "/unityeditor/content.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-140a2a18").then(next)
    },
  },
  {
    name: "v-b4d6dc90",
    path: "/unitymobile/content.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b4d6dc90").then(next)
    },
  },
  {
    name: "v-ee190850",
    path: "/unityvrar/oculus.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ee190850").then(next)
    },
  },
  {
    name: "v-6d6a7820",
    path: "/unityvrar/pico.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d6a7820").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]