<template>
  <!-- 使用vuex实现切换tab页功能 -->
  <div class="tabs">
    <el-tag
      @click="changeMenu(tag)"
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    handleClose(tag) {
      // 调用vuex方法
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style scoped>
.tabs {
  padding: 20px;
  cursor: pointer;
}
</style>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
