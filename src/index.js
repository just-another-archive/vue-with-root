import component from './component'

export default {
  component,
  Plugin: {
    install: function(Vue) {
      Vue.component('with-root', component)
    }
  }
}
