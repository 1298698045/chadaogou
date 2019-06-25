// pages/teaProducingDetail/teaProducingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:['产品介绍','代表企业','相关茶品牌','相关商品'],
    productHidden:true,
    enterpriseHidden:false,
    teoRelevantHidden:false,   // 相关茶品牌
    teoList:[
      {
        con:"12"
      },
      {
        con: "12"
      },
      {
        con: "12"
      }
    ],
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
    relevanShopHidden:false,  // 相关茶品牌
  },
  /**
  * 切换 navbar
  */
  swichNav(e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
    if (e.currentTarget.dataset.idx == 0){
      this.setData({
        productHidden:true,
        enterpriseHidden:false,
        teoRelevantHidden:false,
        relevanShopHidden:false
      })
    }else{
      this.setData({
        productHidden: false
      })
    }
    if (e.currentTarget.dataset.idx == 1){
      this.setData({
        enterpriseHidden:true,
        productHidden:false,
        teoRelevantHidden:false
      })
    }else{
      this.setData({
        enterpriseHidden:false
      })
    }

    if(e.currentTarget.dataset.idx == 2){
      this.setData({
        teoRelevantHidden:true
      })
    }else{
      this.setData({
        teoRelevantHidden:false
      })
    }
    if(e.currentTarget.dataset.idx == 3){
      this.setData({
        relevanShopHidden: true
      })
    }else {
      this.setData({
        relevanShopHidden: false
      })
    }
  },
  goEnter(ev){
    console.log(ev.currentTarget.dataset.idx);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.share);
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