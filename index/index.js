const app = getApp();

let oneList = [{
  url: "https://kpw.lanbofei.com/static/upload/video/goods/2019/01/14/1547458876723311.mp4",
  data: {
    staff: "美短",
    staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f1e0000bqdrths81ukrt8bl1vo0&ratio=720p&line=0",
  data: {
    staff: "林阿姨",
    staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f910000bq5vu2hpjc2l2ia3qdag&ratio=720p&line=0",
  data: {
    staff: "张阿姨",
    staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fe10000bq468s2gd9fsplok9nug&ratio=720p&line=0",
  data: {
    staff: "卡哇伊",
    staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f9c0000bq3vlhsr08m957u0loig&ratio=720p&line=0",
  data: {
    staff: "ABT RS7",
    staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
  }
}
]

let twoList = [{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f010000bpvv18evld73ms92p770&ratio=720p&line=0",
  data: {
    staff: "高比",
    staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f010000bp698qcpg62fiaqj3urg&ratio=720p&line=0",
  data: {
    staff: "peaceful",
    staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200ff10000bosmaliikatjm5bihk9g&ratio=720p&line=0",
  data: {
    staff: "8阿姨",
    staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200ff10000boq0qrf3cp5b1msdm6pg&ratio=720p&line=0",
  data: {
    staff: "9阿姨",
    staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300f310000bhvqhvoe8b7m81gk674g&ratio=720p&line=0",
  data: {
    staff: "告白之夜",
    staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
  }
}
]

let threeList = [{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f330000bqk0juej5ughp5d7esc0&ratio=720p&line=0",
  data: {
    staff: "美短",
    staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f1e0000bqdrths81ukrt8bl1vo0&ratio=720p&line=0",
  data: {
    staff: "林阿姨",
    staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f910000bq5vu2hpjc2l2ia3qdag&ratio=720p&line=0",
  data: {
    staff: "张阿姨",
    staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fe10000bq468s2gd9fsplok9nug&ratio=720p&line=0",
  data: {
    staff: "卡哇伊",
    staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f9c0000bq3vlhsr08m957u0loig&ratio=720p&line=0",
  data: {
    staff: "ABT RS7",
    staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
  }
}]

let fourList = [
  {
    url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f190000bo8svig9lr74g544s110&ratio=720p&line=0",
    data: {
      staff: "11阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    },
  },
  {
    url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fa10000bo3i376vld73mkvk3iug&ratio=720p&line=0",
    data: {
      staff: "12阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    },
  },
]

/**
 * 页面的视频列表，最多 pageSize 个
 * 不通过setData videoList 的个数来动态更新视频，因为切换的时候动画会卡顿一下
 * 可固定videoList的个数，通过<swiper circular="{{true}}">和更改detail来更新
 */
Page({
  data: {
    systemInfo: null,
    page: 0, // 页面 锚点
    pageSize: 5, // 大于等于5
    totalPage: 4,  // 总页数
    videoListAll: [], // 所有的视频列表 [[{},{}..], [{},{}..]]。单页：this.data.videoListAll[page - 1]
    videoList: [], // 页面的视频列表[{},{},{}..]
    videoListContext: [], // 所有的视频列表对应的context对象，控制暂停|播放
    current: 0,  // 记录上一个current
    circular: true, // 是否可以循环播放
    isLike: false  // 是否点赞了该视频
  },

  onLoad: function () {
    this.getSystemInfo()
    this.getVideoAll(this.data.page)
  },

  getSystemInfo: function () {
    let that = this
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          systemInfo: res
        })
      },
    })
  },

  // 模拟网络请求
  getVideoAll: function (p) {
    let data = this.data
    let videoArrTemp = []
    let pageTemp = p + 1
    this.setData({
      page: pageTemp,
      totalPage: 4
    })
    let page = data.page
    if (page == 1) {
      videoArrTemp = oneList
    } else if (page == 2) {
      videoArrTemp = twoList
    } else if (page == 3) {
      videoArrTemp = threeList
    } else if (page == 4) {
      videoArrTemp = fourList
    }
    let videoListAllTemp = data.videoListAll
    videoListAllTemp.push(videoArrTemp)
    this.setData({
      videoListAll: videoListAllTemp // 追加 video 到所有的视频列表
    })
    this.concatVideoList(page, "presSetData")
  },

  // 切换视频，判断方向（上下）
  changeSwiper: function (e) {
    if (e.detail.source == "touch") { // 手动
      let data = this.data
      let currentDetail = e.detail.current
      let currentData = data.current
      if (currentDetail > currentData) {
        if (currentDetail - currentData == 1) { // 正常切换下一个
          this.next(currentDetail, currentData)
        } else { // 特殊情况：第二页的第一个切换到第一页的最后一个，则 currentDetail: this.data.videoList.length - 1、currentData: 0
          this.pre(currentDetail)
        }
      } else if (currentDetail < currentData) {
        if (currentData - currentDetail == 1) { // 正常切换到上一个
          this.pre(currentDetail, currentData)
        } else { // 特殊情况：第一页的最后一个切换到第二页的第一个，则 currentDetail: 0、currentData: this.data.videoList.length - 1
          this.next(currentDetail)
        }
      }
      // 播放视频
      this.playVideo(currentDetail)
      // update current and isPlaying
      this.setData({
        current: currentDetail,
        isPlaying: true
      })
    }
  },

  // 加载下一个视频
  next: function (currentDetail, currentData) {
    let data = this.data
    let len = data.videoList.length  // 等于pageSize
    let page = data.page
    if (currentDetail == len - 2) { // 当前页面倒数第二个，加载下一页的视频列表，并更新倒数第四个和以前的视频列表

      this.getVideoAll(page)
    } else if (currentDetail == len - 1) { // 当前页面最后一个，更新倒数第三个的视频
      this.concatVideoList(page, "lastOne")
    } else if (currentDetail == 0 && currentData != 0) {  // 下个页面第一个，更新上个页面倒数第二个的视频
      this.concatVideoList(page, "toNextPage")
    } else if (currentDetail == 1 && currentData == 0) {  // 下个页面第二个，更新上个页面倒数第一个的视频
      this.concatVideoList(page, "toNextPageTwo")
    }
  },

  // 切换到上一个视频
  pre: function (currentDetail) {
    let data = this.data
    let page = data.page
    let videoListTemp = data.videoList
    let videoPage = []
    // 第一页，还没加载
    if (page == 1) return;
    if (currentDetail >= 1) {
      videoPage = data.videoListAll[page - 2]
      videoListTemp[currentDetail - 1] = videoPage[currentDetail - 1]
    } else {
      if (page > 2) {
        // 上一页
        let pageTemp = page - 1
        this.setData({
          page: pageTemp
        })
        // 上一页的视频列表
        videoPage = data.videoListAll[pageTemp - 2]
        videoListTemp[data.pageSize - 1] = videoPage[data.pageSize - 1]
      }
    }
    this.setData({
      videoList: videoListTemp
    })
  },

  // 服务器加载完视频列表后，更新 页面的视频列表
  concatVideoList: function (page, type) {
    let data = this.data
    let videoPage = JSON.parse(JSON.stringify(data.videoListAll[page - 1]))
    if (page == 1) {  // 第一页，直接赋值
      let videoListTemp = JSON.parse(JSON.stringify(this.data.videoListAll[0]))
      this.setData({
        videoList: videoListTemp
      })
      let videoListTempTwo = JSON.parse(JSON.stringify(this.data.videoListAll[0]))
      let videoListContextTemp = data.videoListContext
      videoListTempTwo.forEach(function (v, i) {
        let videoContextTemp = wx.createVideoContext("myVideo_" + i)
        videoListContextTemp.push(videoContextTemp)
      })
      this.setData({   // 设置 videoListContext，控制暂停|播放
        videoListContext: videoListContextTemp
      })
      this.playVideo(0)
    } else {  // 非第一页 追加数据处理
      if (videoPage.length == 0) return;
      let videoListTemp = data.videoList
      let len = videoPage.length
      if (type == "presSetData") {
        if (len < data.pageSize - 2) {  // 视频个数不足（没达到getDataAll），直接赋值就好
          for (let i = 0; i < videoPage.length; i++) {
            videoListTemp[i] = videoPage[i]
          }
        } else {  // 视频个数够长（达到getDataAll），更新倒数第四个和以前的视频列表
          for (let i = 0; i < data.pageSize - 3; i++) { // 3的由来：从倒数第二个开始加载，所以 -2，再 -1 是因为上一个视频的data我们不处理，因为会切换到上一个视
            videoListTemp[i] = videoPage[i]
          }
        }
      } else if (type == "lastOne") {
        // 更新倒数第三个的视频
        videoListTemp[len - 3] = videoPage[len - 3]
      } else if (type == "toNextPage") {
        // 更新倒数第二个的视频
        videoListTemp[len - 2] = videoPage[len - 2]
      } else if (type == "toNextPageTwo") {
        // 更新倒数第一个的视频
        videoListTemp[len - 1] = videoPage[len - 1]
      }
      this.setData({
        videoList: videoListTemp
      })
    }
  },

  // 切换视频后 播放视频
  playVideo: function (c) {
    let data = this.data
    let videoListContext = data.videoListContext
    // 全部暂停
    videoListContext.forEach(function (v, i) {
      if (i != c) {
        v.pause()
        v.seek(0)
      }
    })
    // 开始播放
    setTimeout(function () {
      videoListContext[c].play()
    }, 200)
  },

  // 手动 暂停|播放
  playOrPause: function (e) {
    let index = e.currentTarget.dataset.index
    let data = this.data
    if (data.isPlaying) {
      data.videoListContext[index].pause()
    } else {
      data.videoListContext[index].play()
    }
    let isPlayingTemp = !data.isPlaying
    this.setData({
      isPlaying: isPlayingTemp
    })
  },

  // 点赞
  switchIsLike: function () {
    let isLikeTemp = !this.data.isLike
    this.setData({
      isLike: isLikeTemp
    })
  }
})