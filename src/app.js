
import VuePaginationWing from './VuePaginationWing.vue'

export default {
  name: 'app',
  components: { VuePaginationWing },
  data () {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      currentPage5: 1
    }
  },
  methods: {
    onChangePage1: function (page) {
      this.currentPage1 = page
    },
    onChangePage2: function (page) {
      this.currentPage2 = page
    },
    onChangePage3: function (page) {
      this.currentPage3 = page
    },
    onChangePage4: function (page) {
      this.currentPage4 = page
    },
    onChangePage5: function (page) {
      this.currentPage5 = page
    }
  }
}