const classic = require("../../utils/classic")
const snack = require("../../utils/snack")
const barbecue = require("../../utils/barbecue")
const special = require("../../utils/special")

// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "川菜经典",
    count: 2, //一侧显示的总数量
    label: ['经典味道', '强力推荐', '人气榜单', '回味无穷', '麻辣鲜香'],
  },

  //点击跳转到对应的美食详情页
  foodDetail: function(e){
    const id = e.currentTarget.dataset.id
    const title = this.data.title
    
    wx.navigateTo({
      url: '../foodDetail/foodDetail?id=' + id + "&title="+title
    })
  },

  //点击切换菜系
  changeTitle: function(e){
    const title = e.currentTarget.dataset.title

    this.setData({
      title: title,
      //切换菜系的时候把数量回到初始状态
      count: 2
    })

    //切换了菜系之后切换菜品
    this.getCertainData(title, 2)
  },

  //下拉刷新事件
  onRefresh: function(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: '加载中...',
    })
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000)
  },

  //获取指定数量的数据
  getCertainData: function(title, n){
    if (title == "川菜经典"){
      var total = classic.getTotal()
      //超过了请求的数据
      if (n > total){
        return false
      } else {
        var data = classic.getFoodList(n)
        console.log("更新数据")
        this.setData({
          food_left: data.food_left,
          food_right: data.food_right
        })
        
        return true
      }
    } else if (title == '川味小吃') {
      var total = snack.getTotal()
      //超过了请求的数据
      if (n > total){
        return false
      } else {
        var data = snack.getFoodList(n)
        console.log("更新数据")
        this.setData({
          food_left: data.food_left,
          food_right: data.food_right
        })
        
        return true
      }
    } else if (title == '川式烧烤') {
      var total = barbecue.getTotal()
      //超过了请求的数据
      if (n > total){
        return false
      } else {
        var data = barbecue.getFoodList(n)
        console.log("更新数据")
        this.setData({
          food_left: data.food_left,
          food_right: data.food_right
        })
        
        return true
      }
    } else if (title == "地方特色") {
      var total = special.getTotal()
      //超过了请求的数据
      if (n > total){
        return false
      } else {
        var data = special.getFoodList(n)
        console.log("更新数据")
        this.setData({
          food_left: data.food_left,
          food_right: data.food_right
        })
        
        return true
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载初始的菜品
    var count = this.data.count
    var title = this.data.title
    var flag = this.getCertainData(title, count)

    if (flag) {
      this.setData({
        count: count + 1
      })
    }
    //请求错误，抛出弹窗
    else {
      wx.showToast({
        title: '数据加载完毕',
        icon: 'none',
        duration: 2000 //持续时间
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
  onPullDownRefresh: function() {
    this.onRefresh()
    //把count进行初始化
    this.setData({
      count: 2
    })
    var title = this.data.title
    this.getCertainData(title, 2)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("触发上拉触底事件")

    //让用户触底后等1秒执行
    setTimeout(()=>{
      //加载菜品
      var count = this.data.count
      var title = this.data.title
      var flag = this.getCertainData(title, count)
      this.setData({
        count: count + 1
      })

      //请求错误，抛出弹窗
      if (!flag){
        wx.showToast({
          title: '数据加载完毕',
          icon: 'none',
          duration: 2000 //持续时间
        })
      }
    }, 500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})