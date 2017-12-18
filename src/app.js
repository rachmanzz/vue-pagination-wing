
import VuePaginationWing from './VuePaginationWing.vue'

export default {
  name: 'app',
  components: { VuePaginationWing },
  data () {
    return {
      currentPage1: 1,
      currentPage2: 2
    }
  },
  methods: {
    onChangePage1: function (page) {
      this.currentPage1 = page
    },
    onChangePage2: function (page) {
      this.currentPage2 = page
    }
  }
}