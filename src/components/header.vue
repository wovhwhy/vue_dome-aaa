<template>
    <div class="main">
    <el-page-header :icon="null">
    <template #content>
        <drawer/>
    </template>
    <template #extra>
      <div class="flex items-center admin" >
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </template>
  </el-page-header>

</div>
</template>

<script>
import drawer from '../components/drawer.vue'
export default {
    name: 'home',
    components: {
        drawer
    }
}
</script>

<style scoped>
.main{
width: 100vw;
height: 8vh;
background-color: aqua;
display: flex;
align-items: center;
position: relative;
}
.admin{
position: absolute;
right: 10px;
top:20px;
}
</style>