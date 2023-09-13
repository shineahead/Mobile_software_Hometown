// pages/sceneryDetail/sceneryDetail.js
var tour = require("../../utils/tour")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "sce003",
    name: "都江堰景区",
    image: "/images/都江堰.jpg",
    level: "5A",
    starNum: 5,
    special: "千古第撒旦仨仨按时按时按时按一时按时按时按时",
    address: "四川省-成都市-都江堰市-城西",
    introduction: "都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区都江堰景区。",
    commentList: [],
    commentImg: "",
    comment: ""
  },

  //存储评论内容
  getInput: function(e){
    const content = e.detail.value
    console.log(content)
    this.setData({
      comment: content
    })
  },

  //在评论发送图片
  sendImg: function(){
    const that = this
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 最多可以选择的图片个数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        const img_path = res.tempFilePaths[0]
        that.setData({
          commentImg: img_path
        })
      }
    })
  },

  //发送评论
  sendComment: function(){
    var id = this.data.id
    var comment = this.data.comment
    var commentImg = this.data.commentImg
    var love = this.data.love
    var list = this.data.commentList
    var myDate = new Date()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var hour = myDate.getHours()
    var min = myDate.getMinutes()
    var sec = myDate.getSeconds()
    var time = "2023/" + month + "/" + day + " " + hour + ":" + min + ":" + sec

    console.log("comment = " + comment);
    //如果评论内容为空
    if (comment == "" && commentImg == ""){
      wx.showToast({
        title: '不能发送空消息',
        icon: 'none',
        duration: 2000 //持续时间
      })

      return
    }

    //获取用户的信息
    var user = wx.getStorageSync('user001')
    if (user) {
      //新增一条评论到列表中去
      var newObj = {
        image: user.imageUrl,
        nickName: user.nickName,
        content: comment,
        commentImg: commentImg,
        time: time,
        love: love
      }

      list.push(newObj)
      //把评论存储到本地缓存中去
      wx.setStorageSync(id, list)
      //将input框的内容清空
      this.setData({
        comment: "",
        commentList: list,
        commentImg: ""
      })
      wx.showToast({
        title: '发送成功',
        icon: 'none',
        duration: 2000 //持续时间
      })
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

  delete: function(time){
    var commentList = this.data.commentList
    var id = this.data.id
    
    for (var i = 0; i < commentList.length; i++){
      if (commentList[i].time == time){
        commentList.splice(i, 1)
      }
    }

    //把修改后的列表重新写回本地缓存
    wx.setStorageSync(id, commentList)

    this.onShow() //删除之后需要刷新页面
  },

  //评论点赞
  loveComment: function(e){
    var time = e.currentTarget.dataset.time
    var commentList = this.data.commentList
    var id = this.data.id
    
    for (var i = 0; i < commentList.length; i++){
      if (commentList[i].time == time){
        var love = commentList[i].love
        if (!love) {
          wx.showToast({
            title: '点赞成功',
            icon: 'none',
            duration: 1000 //持续时间
          })
        }
        commentList[i].love = !love
      }
    }

    //把修改后的列表重新写回本地缓存
    wx.setStorageSync(id, commentList)

    this.onShow() //删除之后需要刷新页面
  },

  //删除评论
  deleteComment: function(e){
    var that = this
    wx.showModal({
      title: "提示",
      content: "确认删除吗？",
      success: function(sm){
        if (sm.confirm) {
          console.log("用户点击了确定")
          that.delete(e.currentTarget.dataset.time)
        } else if (sm.cancel) {
          console.log("用户点击了取消")
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    const data = tour.getTourDetail(id).data
    var commentList
    if (wx.getStorageSync(id)) commentList = wx.getStorageSync(id)
    else commentList = []

    this.setData({
      id: id,
      introduction: data.introduction,
      name: data.name.slice(2),
      starNum: data.starNum,
      image: data.image,
      commentList: commentList
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
    var commentList
    var id = this.data.id
    
    if (wx.getStorageSync(id)) commentList = wx.getStorageSync(id)
    else commentList = []

    this.setData({
      commentList: commentList
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