// pages/buy/buy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      currentIndex:0,
      winHeight:1260,
      advice:[{
        img:"../../img/辣椒酱.jpg",
        name:'辣椒酱',
        price:'20.0元'
      },
      {
        img:"../../img/泰国香米.jpg",
        name:'泰国香米',
        price:'135.8元'
      }],
      all:[{
        img:"../../img/沙爹串.jpg",
        name:'沙爹串'
      },{
          img:"../../img/粉蒸排骨.jpg",
          name:'粉蒸排骨'
      },{
          img:"../../img/糖醋肉.jpg",
          name:'糖醋肉'
      },
      {
        img:"../../img/沙爹串.jpg",
        name:'沙爹串'
      },{
          img:"../../img/粉蒸排骨.jpg",
          name:'粉蒸排骨'
      },{
          img:"../../img/糖醋肉.jpg",
          name:'糖醋肉'
      }]
    },
    changeTopNavIndex:function(e){
      this.setData({
        currentIndex:e.currentTarget.id
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
          title: '购物',
        })
        /* 可以直接拿别人的数据
        wx.request({
          url: 'url',
          success:function(res=>{

          })
        })
        */
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