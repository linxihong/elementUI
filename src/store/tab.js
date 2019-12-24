import Cookie from 'js-cookie'
export default {
  // 状态
  state: {
    // 侧边栏展开和收缩
    isCollapse: false,
    menu: [],
    currentMenu: null,
    // 定义tab数组
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'edit'
      }
    ]
  },
  mutations: {
    // 保存后端返回的菜单列表
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
      console.log(val)
    },
    // 退出登录
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    // 菜单添加
    addMenu(state, router) {
      let menu = JSON.parse(Cookie.get('menu'))
      if (!menu) {
        return
      }
      state.menu = menu
      // 动态路由数组
      let currentMenu = [
        {
          path: '/',
          component: () => import(`@/views/Main`),
          children: []
        }
      ]
      console.log(menu)
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      console.log(currentMenu, 'cur')
      router.addRoutes(currentMenu)
    },
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 去重
        let resutl = state.tabsList.findIndex(item => item.name === val.name)
        if (resutl === -1) {
          state.tabsList.push(val)
        }
        // 去重
      } else {
        state.currentMenu = null
      }
    },
    // 关闭tab
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name == val.name)
      state.tabsList.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
