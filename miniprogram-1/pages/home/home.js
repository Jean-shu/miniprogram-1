// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //创建一个数组，用于展示数据
        array:[],
        swiperList:[{
            img:"../../img/铁锅鸡.jpg"
        },
        {
            img:"../../img/沙爹串.jpg"
        },{
            img:"../../img/粉蒸排骨.jpg"
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '美团外卖复刻版',
        });
        //加载时,调用执行自定义函数，给data中的array值
        var arr = this.initData();
        //设置data中的基本变量
        this.setData({
            array:arr
        })
    },
    //获取数据并返回
    initData:function(){
        var arr = [{
            img:"../../img/糖醋肉.jpg",
            title:"销魂糖醋肉",
            author:"舒怀婧",
            collectNumber:"10万+",
            browserNumber:"25.3万"
        },
        {
            img:"../../img/鳝鱼.jpg",
            title:"养生鳝鱼煲",
            author:"舒怀婧",
            collectNumber:"25万+",
            browserNumber:"40.3万"
        },
        {
            img:"../../img/糖醋肉.jpg",
            title:"盗版销魂糖醋肉",
            author:"朱康",
            collectNumber:"1",
            browserNumber:"100万"
        }
    ];
        return arr;
    },
    //如果需要跳转到tabBar绑定的页面，要用wxwx.switchTab({})
    toPage:function(){
        wx.switchTab({
          url: '../sort/sort',
        })
    },
    /* 调转函数
       navigateTo:function(){
           wx.navigateTo({
             url: '..',
             success:function(res){
                 console.log(res);
             },
             fail:function(){

             },
             complete:function(){

             }
           })
       }
    */

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