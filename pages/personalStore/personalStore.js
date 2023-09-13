// pages/personalStore/personalStore.js
const classic = require("../../utils/classic")
const snack = require("../../utils/snack")
const special = require("../../utils/special")
const barbecue = require("../../utils/barbecue")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表示评分星星，1表示未选，2表示选中
    check: [1, 1, 1, 1, 1],
    recommendList: "",
    storage: "",
    nickName: "",
    sign: "",
    imageUrl: "",
    label: ['经典味道', '强力推荐', '人气榜单', '回味无穷', '麻辣鲜香']
  },
  //返回上一页
  backward: function(){
    wx.switchTab({
      url: '../personal/personal',
    })
  },

  //获取评分
  getMark: function(e){
    const id = e.currentTarget.dataset.id
    const fid = e.currentTarget.dataset.fid
    const title = e.currentTarget.dataset.title
    const mark = [1, 1, 1, 1, 1]

    for (var i = 0; i <= id; i++){
      mark[i] = 2
    }

    //应该修改本地缓存收藏的check，因为show函数是从本地缓存中取的
    var data = wx.getStorageSync('storage')
    data[fid].check = [].concat(mark)
    wx.setStorageSync('storage', data)

    this.onShow()
  },

  //随机获取推荐的三个食物
  getRandomFood: function(){
    var food = []

    var f1 = classic.getRandomObj().data
    var f2 = snack.getRandomObj().data
    var f3 = special.getRandomObj().data
    food = [f1, f2, f3]

    this.setData({
      recommendList: food
    })
  },

  //更多界面
  getMore: function(){
    wx.switchTab({
      url: '../food/food',
    })
  },

  //跳转食物详情页
  goToDetail: function(e){
    const id = e.currentTarget.dataset.id
    const title = e.currentTarget.dataset.title

    wx.navigateTo({
      url: '../foodDetail/foodDetail?id=' + id + "&title=" + title,
    })
  },

  //跳转杂闻详情
  goToZawen: function(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../storyDetail/storyDetail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('user001')){
      var data = wx.getStorageSync('user001')
      this.setData({
        nickName: data.nickName,
        sign: data.sign,
        imageUrl: data.imageUrl
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
    //获取随机推荐食物
    this.getRandomFood()
    //获取收藏的食物
    var data = wx.getStorageSync('storage')
    var keys = Object.keys(data)
    var list = []

    for (var i = 0; i < keys.length; i++){
      list.push(data[keys[i]])
    }

    this.setData({
      storage: list
    })

    //获取收藏的杂闻
    var article = wx.getStorageSync('article')
    keys = Object.keys(article)
    list = []

    for (var i = 0; i < keys.length; i++){
      list.push(article[keys[i]])
    }

    this.setData({
      article: list
    })

    console.log(this.data.article)
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