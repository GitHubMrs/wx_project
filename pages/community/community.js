Page({

  data:{
    // 发帖数据
    noteInfo:[{
    title:'今日发帖',
    info:'888',
},{
  title:'总帖数',
  info:'10000'
},
{title:'会员数',
info:'999'}
],
    visibility:true,

// 开关按钮数据

    switchInfo:{
   one:['我关注的','one','小明'],
   tow: ['玉源有约', 'two', '小红'],
   there: ['新品发布', 'there', '小张']
    }
  },
  bindAction: function(event)
  {

    console.log(event);

    if (this.currentTarget.id.eques('one')){
      setData({

        visibility:false

      })

  }

  }

})