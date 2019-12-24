<template>
  <el-container style="height:100%">
    <!--右边导航栏-->
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header><common-header></common-header></el-header>
      <!-- tab导航栏 -->
      <common-tab></common-tab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/CommonAside'
import CommonTab from '../components/CommonTab'
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style>
.el-aside {
  width: 215px;
}
.el-header {
  background-color: #333;
}
</style>
