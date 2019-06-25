import utils from './../../utils/util.js';
import inter from './../../utils/interface.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgs: [],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 300,
      circular: true,
      imageHeight: 0,
      product_id:"",
      merchant_id:"",
      merchant_type:"",
      swIndex:0,
      list:[],
      swTitle: ['图文详情', '产品参数'],
      id:""
    },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.ids)
    if (options.ids) {
      this.data.product_id = options.ids
    }
    this.imgHeight();
    this.getData();
    
  },
  // 商品详情
  getData(){
    utils.request({
      inter:'productDetail',
      method:'GET',
      data:{
        product_id: this.data.product_id,
      }
    }).then(res => {
      this.setData({
        list: res.result,
        category_id: res.result.category_id,
        merchant_type: res.result.merchant_type,
        merchant_id: res.result.merchant_id,
        id: res.result.id
      })
      wx.setNavigationBarTitle({
        title: res.result.title   //页面标题为路由参数
      })
    })
  },
  swFn:function(ev){
    this.setData({
      swIndex: ev.currentTarget.dataset.idx
    });
  },
  imgHeight: function (e) {
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res);
      },
    })
  },
  // 立即购买
  goshop:function(){
    wx.navigateTo({
      url: '../purchase/purchase?idx=' + this.data.id + '&merchant_id=' + this.data.merchant_id + '&merchant_type=' + this.data.merchant_type,
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
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.data.imageHeight = res.windowWidth
      }
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})