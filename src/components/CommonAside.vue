<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <h3 v-show="isCollapse">小滴</h3>
    <h3 v-show="!isCollapse">小滴课堂后台管理系统</h3>
    <el-menu-item :index="item.index" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="1" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path" v-for="(subItem, index) in item.children" :key="index">
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  // 计算属性
  computed: {
    noChildren() {
      return this.asideMeun.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMeun.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      // 侧边栏数组
      asideMeun: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 'edit'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'share'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 'message',
          children: [
            {
              path: '/page1',
              label: '页面1',
              name: 'page1',
              icon: 'date'
            },
            {
              path: '/page2',
              label: '页面2',
              name: 'page2',
              icon: 'document'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  border: none;
}
h3 {
  color: #ffffff;
  text-align: center;
  line-height: 48px;
}
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
