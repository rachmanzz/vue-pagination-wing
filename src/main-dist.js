import VuePaginationWing from './VuePaginationWing.vue'

const plugin = {
  install: Vue => {
    Vue.component(VuePaginationWing.name, VuePaginationWing)
  }
}

VuePaginationWing.install = plugin.install

export default VuePaginationWing