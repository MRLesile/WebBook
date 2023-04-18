/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/zl/Documents/GitHubWebBook/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-52373f50",
    path: "/unityai/ai.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-52373f50").then(next)
    },
  },
  {
    name: "v-242e5498",
    path: "/unityai/git.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-242e5498").then(next)
    },
  },
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
    name: "v-5e707f90",
    path: "/unityai/chatgpt.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5e707f90").then(next)
    },
  },
  {
    name: "v-21bca338",
    path: "/unityeditor/addressable.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-21bca338").then(next)
    },
  },
  {
    name: "v-7fb2f940",
    path: "/unityai/showdemo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7fb2f940").then(next)
    },
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
    name: "v-87b76b60",
    path: "/unityeditor/sdkuse.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-87b76b60").then(next)
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
    name: "v-6bc91616",
    path: "/unitymobile/mobileoptimize.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6bc91616").then(next)
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
    name: "v-0119e72c",
    path: "/unityerror/error.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0119e72c").then(next)
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