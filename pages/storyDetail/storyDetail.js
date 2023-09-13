var zawen = require("../../utils/zawen")

// pages/storyDetail/storyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    story: {},
    state: false,
    word: "点击收藏"
  },

  //点击收藏文章
  bindArticle: function(){
    var state = this.data.state;
    var story = this.data.story;
    var id = this.data.id;

    this.setData({
      state: !state
    })

    var article = {};
    if (wx.getStorageSync('article')){
      article = wx.getStorageSync('article');
    }

    //获取用户的信息
    var user = wx.getStorageSync('user001')
    if (user) {
      //已经收藏
      if (state) {
        delete article[id]
        wx.setStorageSync("article", article)
        
        wx.showToast({
          title: '取消收藏',
          icon: 'none',
          duration: 2000 //持续时间
        })
        this.setData({
          word: "点击收藏"
        })
      }
      //还未收藏
      else {
        article[id] = story;
        wx.setStorageSync("article", article)

        wx.showToast({
          title: "收藏成功",
          icon: 'none',
          duration: 2000 //持续时间
        })
        this.setData({
          word: "取消收藏"
        })
      }
    }
    //没有获取到用户信息，抛出错误
    else {
      wx.showToast({
        title: '请完善用户信息',
        icon: 'none',
        duration: 2000 //持续时间
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    let story = zawen.getZawenDetail(id)

    this.setData({
      id: id,
      story: story.zawen
    })

    //判断收藏状态
    var article = wx.getStorageSync('article')
    if (article[id]){
      this.setData({
        state: true,
        word: "取消收藏"
      })
    }
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