// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "user001",
    avatarUrl: "/images/默认头像.png",
    sex: "man",
    birth: "",
    name: "",
    sign: ""
  },

  //设置生日事件
  bindDateChange: function(e){
    var birth = e.detail.value
    this.setData({
      birth: birth
    })
  },

  //查看收藏
  bindStore: function(){
    //先查看用户信息是否存在
    if (!wx.getStorageSync('user001')) {
      wx.showToast({
        title: '请完善用户信息',
        icon: 'none',
        duration: 2000 //持续时间
      })
      return
    }

    wx.navigateTo({
      url: '/pages/personalStore/personalStore',
    })
  },

  //提交表单事件
  functionSubmit: function(e){
    const {name, sex, sign} = e.detail.value
    
    if (name == "" || sign == ""){
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none',
        duration: 2000 //持续时间
      })
      return
    } else {
      this.setData({
        name: name,
        sex: sex,
        sign: sign
      })

      wx.showToast({
        title: '修改成功',
        icon: 'none',
        duration: 2000 //持续时间
      })
    }

    //将用户的信息存储下来
    var data = {
      imageUrl: this.data.avatarUrl,
      nickName: this.data.name,
      sex: this.data.sex,
      birth: this.data.birth,
      sign: this.data.sign
    }
    // if (wx.getStorageSync(this.data.id)){
    //   wx.removeStorageSync(this.data.id)
    // }
    wx.setStorageSync(this.data.id, data)
  },

  //更换头像
  avatarChange: function(){
    const that = this
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 最多可以选择的图片个数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        const img_path = res.tempFilePaths[0]
        that.setData({
          avatarUrl: img_path
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //先检查本地缓存中是否存在信息
    const id = this.data.id

    var data = wx.getStorageSync(id)
    if (data){
      this.setData({
        avatarUrl: data.imageUrl,
        name: data.nickName,
        sex: data.sex,
        birth: data.birth,
        sign: data.sign
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