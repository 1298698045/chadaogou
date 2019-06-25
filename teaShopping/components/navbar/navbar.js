Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    currentNavbar:"0",
    navbar: ['首页', '商品', '茶产区', '区域品牌', '茶品牌', '茶企业', '店铺', '去喝茶', '茶媒体'],
  },
  methods: {
    // 这里是一个自定义方法
    /**
 * 切换 navbar
 */
    swichNav(e) {
      this.setData({
        currentNavbar: e.currentTarget.dataset.idx
      })
    },
  }
})