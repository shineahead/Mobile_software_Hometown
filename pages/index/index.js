var zawen = require("../../utils/zawen")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    zawen: []
  },

  //跳转到起源界面
  goToOrigin: function(){
      wx.navigateTo({
        url: '../origin/origin',
      })
  },

  //跳转到杂闻详情界面，记得带id
  goToStoryDetail: function(args){
    let id = args.currentTarget.dataset.id

    wx.navigateTo({
      url: '../storyDetail/storyDetail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    let zw = zawen.getZawenList()
    this.setData({zawen: zw})

    // 自动播放音乐
    this.audioContext = wx.createInnerAudioContext();
    this.audioContext.src = 'https://dl.stream.qqmusic.qq.com/C400003JGJdw41pJar.m4a?guid=7824220640&vkey=9D496D7EC3A62A2033A1528B90673CE54061B272C8546D160F85CC0301868D336CEE56A893EB81476BB6AFC8B2E547DE848C68AD81F660B8&uin=634831867&fromtag=120032';
    this.audioContext.autoplay = true; // 自动播放
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
    this.audioContext.play()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if (this.audioContext) {
      this.audioContext.pause(); // 停止音频播放
    }
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