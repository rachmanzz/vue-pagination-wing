const RIGHT = 'right'
const LEFT = 'left'

export default {
  name: 'VuePaginationWing',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 1
    },
    wingCount: {
      type: Number,
      default: 2
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    prevText: {
      type: String,
      default: 'Prev'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    wingLeftPages: function () {
      return this.getWings(LEFT, this.currentPage, this.totalPage)
    },
    wingRightPages: function () {
      return this.getWings(RIGHT, this.currentPage, this.totalPage)
    },
    visibleLeftDots: function () {
      return ((this.currentPage - this.wingLeftPages.length) > 2)
    },
    visibleRightDots: function () {
      return ((this.currentPage + this.wingRightPages.length) < (this.totalPage - 1))
    },
    visibleFirstPage: function () {
      return ((this.currentPage - this.wingLeftPages.length) > 1)
    },
    visibleLastPage: function () {
      return ((this.currentPage + this.wingRightPages.length) < this.totalPage)
    },
    isFirstPage: function () {
      return this.currentPage === 1
    },
    isLastPage: function () {
      return this.currentPage === this.totalPage
    }
  },
  methods: {
    onChangePage: function (page) {
      this.$emit('onChangePage', page)
    },
    getWings: function (wingPosition, currentPage, totalPage) {
      let numberOfWing = this.wingCount

      if (currentPage === 1 || currentPage === totalPage) {
        numberOfWing *= 2
      }

      let result = []
      let startPos = currentPage
      if (wingPosition === LEFT) {
        startPos = currentPage - numberOfWing - 1
      }

      for (let i = 1; i <= numberOfWing; i++) {
        let val = startPos + i
        // if it is within bound, add it to result data
        val > 0 && val <= totalPage && result.push(val)
      }

      return result
    }
  }
}
