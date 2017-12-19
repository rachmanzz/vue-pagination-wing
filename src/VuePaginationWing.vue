<template>
    <ul :class="customClass"> 
      <li> 
        <a :class="prevClass"
            @click="onChangePage(currentPage-1)">
            {{ prevText }}
        </a> 
      </li> 

      <li v-if="visibleFirstPage">
        <a :class="pageClass" 
            @click="onChangePage(1)">
            1
        </a>
      </li>
      
      <li v-if="visibleLeftDots">
        <a :class="pageClass">...</a>
      </li>

      <li v-for="n in wingLeftPages" :key="n">
        <a :class="pageClass" 
            @click="onChangePage(n)">
            {{ n }}
        </a>
      </li>

      <li>
        <a :class="activeClass">{{ currentPage }}</a>
      </li>

      <li v-for="n in wingRightPages" :key="n">
        <a :class="pageClass" 
            @click="onChangePage(n)">
            {{ n }}
        </a>
      </li>

      <li v-if="visibleRightDots">
        <a :class="pageClass">...</a>
      </li>

      <li v-if="visibleLastPage">
        <a :class="pageClass" 
            @click="onChangePage(totalPage)">
            {{ totalPage }}
        </a>
      </li>

      <li> 
        <a :class="nextClass" 
            @click="onChangePage(currentPage+1)">
            {{ nextText }}
        </a> 
      </li> 
  </ul>
</template>

<script>
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
    },
    customClass: {
      type: String,
      default: 'pager'
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
    },
    pageClass: function () {
      return `${this.customClass}__page`
    },
    activeClass: function () {
      return `${this.pageClass} ${this.customClass}--active`
    },
    prevClass: function () {
      return this.isFirstPage ? `${this.pageClass} ${this.customClass}--prev ${this.customClass}--disabled` : `${this.pageClass} ${this.customClass}--prev`
    },
    nextClass: function () {
      return this.isLastPage ? `${this.pageClass} ${this.customClass}--next ${this.customClass}--disabled` : `${this.pageClass} ${this.customClass}--next`
    }
  },
  methods: {
    onChangePage: function (page) {
      // do not emit when not valid page
      if (page > 0 && page <= this.totalPage) {
        this.$emit('onChangePage', page)
      }
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
</script>
<style src="./vue-pagination-wing.css"></style>
