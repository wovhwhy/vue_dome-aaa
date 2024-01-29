<template>
    <i class="iconfont" :class="[iconclass, extraclass]"></i>
  </template>
  
  <script>
  var map = {
    fenlei: 'icon-fenlei3',
    fenlei1: 'icon-fenlei',
    arrowup: 'icon-xiangshang',
    arrowdown: 'icon-xiangxia',
    searh: 'icon-sousuo',
    user: 'icon-user1',
    shouye: 'icon-shouye1',
    tuijian: 'icon-shoucang',
  };
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      extraclass: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconclass() {
        return map[this.type];
      },
    },
  };
  </script>
  
  <style scoped>
  @import '//at.alicdn.com/t/c/font_4183937_psbhbw5rz.css';
  </style>
  