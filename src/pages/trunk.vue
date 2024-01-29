<template>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="foot">
        <div class="footmenu">
            <span @click="goHome"><Icon type="shouye" extraclass="icon"/></span>
            <span @click="goClassify"><Icon type="fenlei" extraclass="icon"></Icon></span>
            <span @click="goAbout"><Icon type="tuijian" extraclass="icon"/></span>
            <span @click="goUser"><Icon type="user" extraclass="icon"/></span>
        </div>

    </div>
  </template>
  
  <script>
import Icon from '../components/Icon.vue';
export default{
    name :'trunk',
    components: {
        Icon
    },
    methods:{
        goHome(){
            this.$router.push('/home')
        },
        goUser(){
            this.$router.push('/user')
        },
        goClassify(){
            this.$router.push('/classify')
        },
        goAbout(){
            this.$router.push('/about')
        },
    }
}
  </script>
  
  <style scoped>
  .main{
    width: 100%;
    height: 90vh;
  }
  .foot{
    width: 100%;
    height: 10vh;
  }
  .footmenu{
height: 100%;
width: 100vw;
background-color: aqua;
display: flex;  
justify-content: space-around;
align-items: center;
}
span{
font-size: 30px;

}
.icon{
font-size: 30px;
}
</style>
  