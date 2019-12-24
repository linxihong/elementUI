<template>
  <header>
    <!--面包屑导航-->
    <div class="l-content">
      <el-button @click="collapseMenu" type="primary" icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--用户头像-->
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link"> <img :src="userImag" class="userImg" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImag: require('../assets/images/user.png')
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.userImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.l-content {
  display: flex;
  width: 380px;
  align-items: center;
}
.l-content .el-button {
  margin-right: 20px;
}
</style>

<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #fff;
}
.el-breadcrumb__item .el-breadcrumb__inner {
  color: #f4f4f4;
}
</style>
