<template>
    <ul class="pager"> 
      <li> 
        <a class="pager__page is--prev" @click="onChangePage(currentPage-1)" :class="{'is--disabled': !isFirstPage}">{{ prevText }}</a> 
      </li> 

      <li v-if="visibleFirstPage">
        <a class="pager__page" @click="onChangePage(1)">1</a>
      </li>
      
      <li v-if="visibleLeftDots">
        <a class="pager__page">...</a>
      </li>

      <li v-for="n in wingLeftPages" :key="n">
        <a class="pager__page" @click="onChangePage(n)">{{ n }}</a>
      </li>

      <li>
        <a class="pager__page pager--active">{{ currentPage }}</a>
      </li>

      <li v-for="n in wingRightPages" :key="n">
        <a class="pager__page" @click="onChangePage(n)">{{ n }}</a>
      </li>

      <li v-if="visibleRightDots">
        <a class="pager__page">...</a>
      </li>

      <li v-if="visibleLastPage">
        <a class="pager__page" @click="onChangePage(totalPage)">{{ totalPage }}</a>
      </li>

      <li> 
        <a class="pager__page is--next" @click="onChangePage(currentPage+1)" :class="{'is--disabled': !isLastPage}">{{ nextText }}</a> 
      </li> 
  </ul>
</template>

<script src="./vue-pagination-wing.js"></script>
<style src="./vue-pagination-wing.css"></style>
