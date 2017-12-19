# vue-pagination-wing

[![License](https://img.shields.io/github/license/mazipan/vue-pagination-wing.svg?maxAge=3600)](https://github.com/mazipan/vue-pagination-wing) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/vue-pagination-wing.svg?maxAge=3600)](https://github.com/mazipan/vue-pagination-wing/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/vue-pagination-wing.svg?maxAge=3600)](https://github.com/mazipan/vue-pagination-wing/network/member) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/vue-pagination-wing.svg?maxAge=3600)](https://github.com/mazipan/vue-pagination-wing/stargazers) 
[![version](https://img.shields.io/npm/v/vue-pagination-wing.svg)](https://www.npmjs.com/package/vue-pagination-wing)
[![downloads monthly](https://img.shields.io/npm/dm/vue-pagination-wing.svg)](https://www.npmjs.com/package/vue-pagination-wing) 
[![downloads](https://img.shields.io/npm/dt/vue-pagination-wing.svg)](https://www.npmjs.com/package/vue-pagination-wing) 

:angel: Vue.js pagination with customize wing settings

### Demo
[https://mazipan.github.io/vue-pagination-wing/](https://mazipan.github.io/vue-pagination-wing/)

### Screenshoot
![Screenshoot](https://raw.githubusercontent.com/mazipan/vue-pagination-wing/master/screenshoot.png)

### Installation
#### Yarn
`yarn add vue-pagination-wing`

#### NPM
`npm i vue-pagination-wing --save-dev`

### How to use

#### Import Plugins

```javascript
import VuePaginationWing from 'vue-pagination-wing'
Vue.use(VuePaginationWing)
```

#### HTML Template

```html
<VuePaginationWing 
  :currentPage="currentPage"
  :total-page="100"
  @onChangePage="onChangePage">
</VuePaginationWing>
```

#### Avaibale Events and Props

##### Events

+ `onChangePage` : Event when user click page

  Parameter : `page` (Number: page that user clicked)

##### Props

+ `currentPage` : Current page active

  Type : `Number`

  Default : 1

+ `totalPage` : Total of page available

  Type : `Number`

  Default : 1
  
+ `wingCount` : Wing of left and right

  Type : `Number`

  Default : 2
  
+ `nextText` : Text for next button

  Type : `String`

  Default : 'Next'
  
+ `prevText` : Text for previous action

  Type : `String`

  Default : 'Prev'

+ `customClass` : Class for pagination element

  Type : `String`

  Default : 'pager'

**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 
