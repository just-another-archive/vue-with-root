import component from './component'

export const WithRoot = component

export const Plugin = {
  install: function(Vue) {
    Vue.component('with-root', component)
  }
}

export default {
  WithRoot, Plugin
}
