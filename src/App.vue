<template>
  <div id="app" class="VuePaginationWing">
    <header role="header" class="site__header header"><div class="header__wrapper"><div class="header__brand"> <a href="https://mazipan.github.io/demo/"> <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana"> </a><div class="header__title"> Irfan Maulana | Demo</div></div></div> </header>

    <h1>Vue Pagination Wing By Irfan Maulana</h1>

    <div style="margin-bottom: 1em;">
      <h3>Basic Setup</h3>
      <VuePaginationWing 
        :currentPage="currentPage1"
        :total-page="10"
        @onChangePage="onChangePage1">
      </VuePaginationWing>

    </div>

    <div style="margin-bottom: 1em;">
      <h3>Custom Next/Prev</h3>
      <VuePaginationWing 
        nextText="Next Page"
        prevText="Prev Page"
        :currentPage="currentPage2"
        :total-page="100"
        @onChangePage="onChangePage2">
      </VuePaginationWing>

    </div>

    <div style="margin-bottom: 1em;">
      <h3>Custom Class</h3>
      <VuePaginationWing 
        customClass="custom-pager"
        :currentPage="currentPage3"
        :total-page="100"
        @onChangePage="onChangePage3">
      </VuePaginationWing>
    </div>


    <div style="margin-bottom: 1em;">
      <h3>Custom Wing Setup : 3 Wing</h3>
      <VuePaginationWing 
        :wingCount="3"
        :currentPage="currentPage4"
        :total-page="100"
        @onChangePage="onChangePage4">
      </VuePaginationWing>
    </div>


    <div class="grid__row content centered"><h2>Contribute</h2><p> Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-pagination-wing" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p></div><div class="grid__row content centered"><h2>Contact Developer</h2><p><a href="https://github.com/mazipan"> <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" alt="Github"> </a><a href="mailto:mazipanneh@gmail.com"> <img src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" alt="Email"> </a><a href="https://mazipanneh.com/blog/"> <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" alt="Blog"> </a><a href="https://facebook.com/mazipanneh"> <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" alt="Facebook"> </a><br/><a href="https://twitter.com/Maz_Ipan"> <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" alt="Twitter"> </a><a href="https://id.linkedin.com/in/irfanmaulanamazipan"> <img src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" alt="Linkedin"> </a><a href="https://www.slideshare.net/IrfanMaulana21"> <img src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" alt="Slideshare"> </a></p></div><div class="grid__row content centered"><p> Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p></div>
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 6em;
}
</style>
