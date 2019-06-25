import utils from './../../utils/util.js';
import inter from './../../utils/interface.js';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgcode: '',
    product_id:"",
    merchant_id:"",
    merchant_type:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.product_id = options.idx;
    this.data.merchant_id = options.merchant_id;
    if (options.merchant_type == 1){
      this.getImgcode();
    } else if (options.merchant_type == 2){
      this.getImgcodes();
    } 
  },
  // 商户版
  getImgcode(){
    // console.log(this.data.merchant_id);
    utils.request({
      inter:'urlQcrode',
      method:'GET',
      data:{
        product_id: this.data.product_id,
        merchant_id: this.data.merchant_id
      }
    }).then(res => {
      this.setData({
        imgcode:res.result.link.link,
        title: res.result.link.title
      })
      wx.setNavigationBarTitle({
        title: res.result.link.title   //页面标题为路由参数
      })
    })
  },
  // 个人版
  getImgcodes() {
    utils.request({
      inter: 'shopQrcode',
      method: 'GET',
      data: {
        merchant_id: this.data.merchant_id,
        product_id: this.data.product_id
      }
    }).then(res => {
      this.setData({
        imgcode: res.result.linkUrl
      })
      wx.setNavigationBarTitle({
        title: res.result.title   //页面标题为路由参数
      })
    })
  },
  // 保存图片
  saveImg: function () {
    wx.getImageInfo({
      src: this.data.imgcode,
      success: function (ret) {
        var path = ret.path;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 1500
            })
          }
        })
      }
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