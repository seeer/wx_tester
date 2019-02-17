// pages/base/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    tmpName:"",
    tmpAge:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list:[
        {name:"tom",age:10},
        { name: "jerry", age: 20 },
        { name: "jack", age: 50 },
        { name: "tid", age: 24 }
      ]
    })
  },
  //添加一条数据
  addone(e,instance){
    console.log(e,e.detail.value);
    var d = e.detail.value
    if(!d.name){
      wx.showToast({
        title:"请输入姓名",
        icon: 'none',
        duration: 1500
      })
      return 
    }

    if (!d.age) {
      wx.showToast({
        title: "请输入年龄",
        icon: "none",  
        duration: 1500
      })
      return
    }

    this.setData({
      list: this.data.list.concat([{ name: d.name, age: d.age}]),
      tmpName: "",
      tmpAge: ""
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