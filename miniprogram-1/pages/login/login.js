// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //登录按钮的状态
        loginBtnState:true,
        username:'',
        passwd:''
    },
    usernameInput:function(e){
        //console.log(e);
        var val=e.detail.value;
        if (val !=""){
            this.setData({
                username:val
            });
            //判断passwd有无内容
            if(this.data.passwd!=""){
                this.setData({
                    loginBtnState:false
                })
            }
        }
        else{
            this.setData({
                loginBtnState:true
            })
        }
    },
    passwdInput:function(e){
        var val=e.detail.value;
        if (val !=""){
            this.setData({
                passwd:val
            });
            if(this.data.username!=""){
                this.setData({
                    loginBtnState:false
                })
            }
        }
        else{
            this.setData({
                loginBtnState:true
            })
        }
    },

    //登录（存储的是对象，对象里有数组）
    login:function(){
        //防止本地没有存取
        var userInfos=wx.getStorageSync('userobjs')||[];
        var userInfo=userInfos.find(item=>{
            username=this.data.username;
        });
        if(userInfo){
            if(this.data.passwd==userInfo.passwd){
                wx.showToast({
                  title: '登录成功',
                  duration:2000,
                  success:function(){
                      wx:wx.navigateTo({
                        url: '../home/home'
                      })
                  }
                })
            }
            else{
                wx.showToast({
                  title: '密码错误',
                })
            }
        }
        else{
            wx.showToast({
              title: '用户名不存在',
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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