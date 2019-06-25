import utils from './../../utils/util.js';
import inter from './../../utils/interface.js';
//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whloes: false,
    navbar: ['首页', '商品', '茶产区', '区域品牌', '茶品牌', '茶企业', '店铺', '去喝茶', '茶媒体'],
    sublist:['北京','山西','上海','广州','深圳','山东'],
    citylist:['朝阳','昌平','海淀','通州','顺义','朝阳'],
    citylist: ['朝阳', '昌平', '海淀', '通州', '顺义', '朝阳'],
    typeList:['全部','茶旅','培训','品茶'],    // 茶产区类型
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    inpisShow:false,
    aggregateHidden: false,   // 商品
    teaProducingHidden:false,  // 茶产区
    filterCenHidden:false,   // 茶产区类型
    filterHidden:false,   // 茶品牌类型
    filterShow:false,   // 茶企业类型
    teaMediaShow:false, // 茶媒体类型
    regionShow:false, // 区域品牌类型
    homeHidden:true,      // 首页
    regionalBrandHidden:false,  // 区域品牌
    teaBrandHidden:false,  // 茶品牌
    teaCompanyHidden:false, // 茶企业
    shopping:false,   // 店铺
    gotoTeaHidden:false, // 去喝茶
    shopbar:['省/市','市/区','区/县'],
    teaMediaHidden:false,  // 茶媒体
    fixedHidden:false, // 店铺城市选择
    teoList:[
      {
        main_output:"红茶绿茶黑茶",
        con:"40"
      },
      {
        main_output: "红茶绿茶黑茶",
        con: "40"
      },
      {
        main_output: "红茶绿茶黑茶",
        con: "40"
      }
    ],
    bannerHidden: true,
    classList: [
      {
        img: "./../../images/u40.png",
        title: "醉品朴茶 全新包装升级之自饮系列 金骏眉 特级100g",
        price: "138"
      },
      {
        img: "./../../images/u40.png",
        title: "醉品朴茶 全新包装升级之自饮系列 金骏眉 特级100g",
        price: "138"
      },
      {
        img: "./../../images/u40.png",
        title: "醉品朴茶 全新包装升级之自饮系列 金骏眉 特级100g",
        price: "138"
      },
      {
        img: "./../../images/u40.png",
        title: "醉品朴茶 全新包装升级之自饮系列 金骏眉 特级100g",
        price: "138"
      }
    ],
    hotCha: [
      {
        img: "./../../images/u40.png",
        name: "产品名称"
      },
      {
        img: "./../../images/u40.png",
        name: "产品名称"
      },
      {
        img: "./../../images/u40.png",
        name: "产品名称"
      },
      {
        img: "./../../images/u40.png",
        name: "产品名称"
      }
    ],
    lists:['类型','产地'],
    sw: [
      {
        name: "销量",
        sort: '',
        inter: 'productSearch',
        any_ids: 1,
        order: ""
      },
      {
        name: "价格",
        sort: "desc",
        inter: 'productSearch',
        any_ids: 1,
        order: "price",
      },
      {
        name: "类型",
        sort: "desc",
        inter: 'productSearch',
        any_ids: 0,
        order: "sales",
        category_id: '',
        isClass: false
      }
    ],
    swCurIdx: 0,   //当前显示分类index
    swOldIdx: 0,  //old显示分类index
    page: 1,
    pagesize: 20,
    isPage: true,     //是否可以翻页
    total: 1,
    tagsLIndex: -1,
    tagsRIndex: -1,
    hasType: false,
    list: [],
    imgs: "",
    id: "",

    filters: [{ name: '销量' }],
    filters1: [{ name: '价格' }],
    filterIndex: 0,
    category_id: "",
    ints: 0,
    ification: 0,
    prices: 0,
    currentid: ''
  },

  /**
  * 切换 navbar
  */
  swichNav(e) {
    console.log(e.currentTarget.dataset.idx);
    var id = e.currentTarget.dataset.idx;
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx,
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: id,
    })
    if (e.currentTarget.dataset.idx == 0) {
      this.setData({
        homeHidden:true,
        aggregateHidden: false,
        bannerHidden: true
      })
    }else{
      this.setData({
        homeHidden:false
      })
    }
    // 商品
    if (e.currentTarget.dataset.idx == 1) {
      this.setData({
        aggregateHidden: true,
        bannerHidden: false
      })
    } else {
      this.setData({
        aggregateHidden: false
      })
    }
    if (e.currentTarget.dataset.idx == 2){
        this.setData({
          aggregateHidden: false,
          bannerHidden: false,
          teaProducingHidden:true
        })
    }else {
      this.setData({
        teaProducingHidden: false
      })
    }

    if(e.currentTarget.dataset.idx == 3){
      this.setData({
        regionalBrandHidden:true
      })
    }else{
      this.setData({
        regionalBrandHidden:false
      })
    }
    
    if(e.currentTarget.dataset.idx == 4){
      this.setData({
        teaBrandHidden:true
      })
    }else{
      this.setData({
        teaBrandHidden:false
      })
    }

    if(e.currentTarget.dataset.idx == 5){
      this.setData({
        teaCompanyHidden:true
      })
    }else{
      this.setData({
        teaCompanyHidden:false
      })
    }

    if(e.currentTarget.dataset.idx == 6){
      this.setData({
        shopping:true
      })
    }else {
      this.setData({
        shopping:false
      })
    }

    if(e.currentTarget.dataset.idx == 7){
      this.setData({
        gotoTeaHidden:true
      })
    }else{
      this.setData({
        gotoTeaHidden:false
      })
    }

    if(e.currentTarget.dataset.idx == 8){
      this.setData({
        teaMediaHidden:true
      })
    }else{
      this.setData({
        teaMediaHidden:false
      })
    }
  },
  // 区域品牌类型
  goClass(e){
    console.log(e.currentTarget.dataset.idx);
    this.setData({
      regionShow:!this.data.regionShow
    })
  },
  // 搜索
  goBack(){
    this.setData({
      inpisShow: !this.data.inpisShow
    })
  },
  // 茶产区类型
  typeFn(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      typeIdx:e.currentTarget.dataset.idx,
      filterCenHidden:false
    })
  },
  // 茶品牌类型
  teaTypeFn(e){
    this.setData({
      teaTypeIdx: e.currentTarget.dataset.idx,
      filterHidden: false
    })
  },
  // 茶企业类型
  teaCompanyFn(e){
    this.setData({
      teaCompanyIdx: e.currentTarget.dataset.idx,
      filterShow: false
    })
  },
  // 茶媒体类型
  teaMediaTab(e){
    this.setData({
      currenMedia: e.currentTarget.dataset.idx,
      teaMediaShow: false
    })
  },
  // 区域品牌的二级分类
  regionTab(e){
    console.log(e.currentTarget.dataset.idx);
    this.setData({
      currenRegion:e.currentTarget.dataset.idx
    })
  },
  // 店铺下面的二级分类
  catShop(e){
    console.log(e.currentTarget.dataset.idx);
    this.setData({
      fixedHidden: !this.data.fixedHidden
    })
  },
  // 店铺下面二级分类选择省/市
  subFn(e){
    console.log(e.currentTarget.dataset.idx);
    this.setData({
      current: e.currentTarget.dataset.idx
    })
  },
  // 店铺下面二级分类选择市/区
  cityTab(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx: e.currentTarget.dataset.idx
    })
  },
  // 店铺下面二级分类选择区/县
  areaTab(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      areaIdx:e.currentTarget.dataset.idx,
      fixedHidden:false
    })
  },
  // 跳转店铺商品的详情
  goShopping(){
    wx.navigateTo({
      url: '../shopDetail/shopDetail',
    })
  },
  // 跳转去喝茶详情页
  drinkTeaFn(){
    wx.navigateTo({
      url: '../drinkteaDetail/drinkteaDetail',
    })
  },
  // 跳转茶媒体详情页
  goMedia(){
    wx.navigateTo({
      url: '../mediaDetail/mediaDetail',
    })
  },


  goConbox(){
    wx.navigateTo({
      url: '/pages/teaProducingDetail/teaProducingDetail?share=' + "share" ,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 顶部导航滑动tab
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight - 51, windowWidth: res.windowWidth, sliderLeft: 8, sliderOffset: res.windowWidth / that.data.navbar.length * that.data.activeIndex
        });
      }
    })
    this.detailFn();
    this.classification();
  },
  // 茶产区（类型）
  clissTab(){
    this.setData({
      filterCenHidden: !this.data.filterCenHidden
    })
  },
  // 茶品牌（类型）
  teaBrandTab(){
    this.setData({
      filterHidden: !this.data.filterHidden
    })
  },
  // 茶企业（类型）
  CompanyFn(){
    this.setData({
      filterShow: !this.data.filterShow
    })
  },
  // 茶媒体（类型）
  teaMediaFn(){
    this.setData({
      teaMediaShow: !this.data.teaMediaShow
    })
  },
  // 类型 分类
  classification() {
    utils.request({
      inter: 'categorySelect',
      method: 'POST',
      data: {}
    }).then(res => {
      let types = [
        { id: '', category_id: 0, name: "全部", type: "product", sort: 99, son: [{ id: '', category_id: 0, name: "全部", type: "product", sort: 1 }] }
      ];
      for (var i = 0, m = res.result.list.length; i < m; i++) {
        var row = res.result.list[i];
        row.son.unshift({ id: '', category_id: 0, name: "全部", type: "product", sort: 1 });
        types.push(row);
      }
      // types = types.sort(utils.sortPro);
      this.setData({
        types: types
      })
      this.detailFn();
    })
  },
  // 分类
  classify: function (ev) {
    let idx = ev.currentTarget.dataset.idx;
    this.currentid = this.data.types[idx].id;
    this.setData({
      tagsLIndex: idx,
      tagsRIndex: this.data.tagsLIndex != idx ? -1 : this.data.tagsRIndex    //是否清除右侧历史选中记录
    })
  },
  // 点击分类的类型
  classifySon: function (ev) {
    let idx = ev.currentTarget.dataset.idx;
    if (this.data.types[this.data.tagsLIndex].son[idx].id != this.data.sw[2].category_id) {
      this.data.page = 1;
    }
    if (!this.data.types[this.data.tagsLIndex].son[idx].id) {
      this.data.sw[2].category_id = this.currentid
    } else {
      this.data.sw[2].category_id = this.data.types[this.data.tagsLIndex].son[idx].id;
    }
    // console.log(this.data.sw[2].category_id);
    this.data.sw[2].isClass = false;
    this.data.hasType = true;
    this.setData({
      tagsRIndex: idx,
      sw: this.data.sw
    });
    this.detailFn();
  },
  // 进入商品详情页
  goProduct: function (ev) {
    let idx = ev.currentTarget.dataset.idx;
    // console.log(this.data.list[idx].id);
    wx.navigateTo({
      url: '../detail/detail?ids=' + this.data.list[idx].id,
    })
  },
  // 切换
  filterFn: function (ev) {
    let idx = ev.currentTarget.dataset.idx;
    let item = this.data.sw[idx];
    if (idx == 0) {
      this.data.sw[0].order = this.data.sw[0].order == '' ? 'sales' : this.data.sw[0].order;
      this.data.sw[0].sort = this.data.sw[0].sort == 'desc'
    }
    if (this.data.swOldIdx == idx) {
      this.data.sw[idx].sort = this.data.sw[idx].sort == 'desc' ? 'asc' : 'desc';
    } else {
      this.data.page = 1;
      this.data.sw[idx].sort = 'desc';
    }
    if (idx == 2) {
      this.data.sw[idx].isClass = !this.data.sw[idx].isClass;
    }
    this.data.swOldIdx = idx;
    this.setData({
      swCurIdx: idx,
      sw: this.data.sw
    });
    if (idx != 2) {
      this.detailFn();
    }
  },

  // 
  detailFn() {
    let option = {
      any_ids: this.data.sw[this.data.swCurIdx].any_ids,
      order: this.data.sw[this.data.swCurIdx].order,
      order_type: this.data.sw[this.data.swCurIdx].sort,
      page: this.data.page,
      size: this.data.pageSize
    }
    if (this.data.hasType) {
      option.any_ids = 0;
      option.category_id = this.data.sw[2].category_id
    }
    utils.request({
      inter: this.data.sw[this.data.swCurIdx].inter,
      method: 'POST',
      data: option
    }).then(res => {
      // console.log(res);
      if (this.data.page * this.data.pagesize <= res.result.total) {
        this.isPage = true;
      } else {
        this.isPage = false;
      }
      let temp = [];
      if (this.data.page == 1) {
        temp = res.result.list;
      } else {
        temp = this.data.list.concat(res.result.list);
      }
      this.setData({
        list: temp
      })
    })
  },
  // 分类按销量从低到高排序
  detailAnya() {
    utils.request({
      inter: 'productSearch',
      method: 'POST',
      data: {
        any_ids: 0,
        order: "sales",
        order_type: "asc",
        category_id: this.data.category_id,
      }
    }).then(res => {
      this.setData({
        list: res.result.list,
      })
    })
  },
  // 分类按销量从高到低排序
  detailAnys() {
    utils.request({
      inter: 'productSearch',
      method: 'POST',
      data: {
        any_ids: 0,
        order: "sales",
        order_type: "desc",
        category_id: this.data.category_id,
      }
    }).then(res => {
      this.setData({
        list: res.result.list,
      })
    })
  },
  // 分类按价格从高到低排序
  PriceH() {
    utils.request({
      inter: 'productSearch',
      method: 'POST',
      data: {
        any_ids: 0,
        order: "price",
        order_type: "asc",
        category_id: this.data.category_id,
      }
    }).then(res => {
      this.setData({
        list: res.result.list,
      })
    })
  },
  // 分类按价格从低到高排序
  PriceW() {
    utils.request({
      inter: 'productSearch',
      method: 'POST',
      data: {
        any_ids: 0,
        order: "price",
        order_type: "desc",
        category_id: this.data.category_id,
      }
    }).then(res => {
      this.setData({
        list: res.result.list,
      })
    })
  },
  // 商品列表
  getDetail(isNew) {
    // console.log(isNew);
    if (this.data.isPage) {
      return;
    }
    this.data.isPage = true;

    utils.request({
      inter: 'productSearch',
      method: 'POST',
      data: {
        any_ids: 1,
        page: this.data.page,
        size: this.data.pagesize,
      }
    }).then(res => {
      console.log(res);
      if (res.result.list.length >= this.data.pageSize) {
        this.data.isPage = false;
      } else {
        this.data.isPage = true;
      }
      let temp = [];
      if (isNew) {
        temp = res.result.list;
      } else {
        temp = this.data.list.concat(res.result.list);
      }
      this.setData({
        list: res.result.list,
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getDetail();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    this.data.isPage = true;
    this.data.page = 1;
    // this.detailFn();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.isPage) {
      this.data.page++;
      this.detailFn();
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 上拉加载商品 

})
