// pages/sort/sort.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      "message":[
        {
          "cat_id":1,
          "cat_name":"家常菜",
          "cat_pid":0,
          "cat_level":0,
          "cat_deleted":false,
          "cat_icon":"",
          "children":[
            {
              "cat_id":3,
              "cat_name":"湘菜",
              "cat_pid":1,
              "cat_level":1,
              "cat_deleted":false,
              "cat_icon":"",
              "children":[
                {
                "cat_id":5,
                "cat_name":"大碗菜",
                "cat_pid":2,
                "cat_level":2,
                "cat_deleted":false,
                "cat_icon":"../../img/像素_兔子.png",
              }
            ]
          }
        ]
      },
      {
        "cat_id":2,
        "cat_name":"西洋风味",
        "cat_pid":0,
        "cat_level":0,
        "cat_deleted":false,
        "cat_icon":"",
        "children":[
          {
            "cat_id":4,
            "cat_name":"牛扒",
            "cat_pid":1,
            "cat_level":1,
            "cat_deleted":false,
            "cat_icon":"",
            "children":[
              {
              "cat_id":6,
              "cat_name":"Lady",
              "cat_pid":2,
              "cat_level":2,
              "cat_deleted":false,
              "cat_icon":"../../img/像素_兔子.png",
            }
          ]
        }
      ]
    }
    ],
      leftMenuList:[],
      rightContent:[],
      //被点击的左侧菜单
      currentIndex:0
  },
    getCates(){
      //构建左侧大菜单数据
      let leftMenuList=this.data.message.map(v=>v.cat_name);
      //构建右侧大菜单数据
      let rightContent=this.data.message[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    },
    //左侧菜单点击事件
    handleItemTap(e){
      /*1.获得索引
      2. 赋值*/
      const {index}=e.currentTarget.dataset;
      let rightContent=this.data.message[index].children;
      this.setData({
        currentIndex:index,
        rightContent
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
          title: '分类',
        })
        this.getCates();
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