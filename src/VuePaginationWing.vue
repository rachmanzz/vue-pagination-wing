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

<script src="./vue-pagination-wing.js"></script>
<style src="./vue-pagination-wing.css"></style>
