Page({

  data: {

    itemInfo: [

      {
        image: '../../../image/spell/clazz/one.png', text: '和田玉',
       
      },

      {
        image: '../../../image/spell/clazz/two.png', text: '南红',
      
      },

      {
        image: '../../../image/spell/clazz/three.png', text: '翡翠',
      
      }

    ],

    resInfo: '',
    
    one: [

      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

      { image: '../../../image/spell/clazz/two.png', text: '南红' },

      { image: '../../../image/spell/clazz/three.png', text: '翡翠' },
    
      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

      { image: '../../../image/spell/clazz/two.png', text: '南红' },

      { image: '../../../image/spell/clazz/three.png', text: '翡翠' }

    ],

    two: [

      { image: '../../../image/spell/clazz/three.png', text: '翡翠' },
      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

      { image: '../../../image/spell/clazz/two.png', text: '南红' },

      { image: '../../../image/spell/clazz/two.png', text: '南红' },

      { image: '../../../image/spell/clazz/three.png', text: '翡翠' }

    ],

    three: [

      { image: '../../../image/spell/clazz/two.png', text: '南红' },
    
      { image: '../../../image/spell/clazz/three.png', text: '翡翠' },

      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

      { image: '../../../image/spell/clazz/two.png', text: '南红' },

      { image: '../../../image/spell/clazz/three.png', text: '翡翠' },
     
      { image: '../../../image/spell/clazz/one.png', text: '和田玉' },

    ],

    colors: ['yellow', 'red', 'blue'],

    color: ''
  },

  selectTab: function (e) {

    console.log(e);

    switch (e.currentTarget.id) {

      case '0':
        this.setData({
          color: this.data.colors[0],
          resInfo: this.data.one,
        })


    

        break;


      case '1':

        this.setData({
          color: this.data.colors[1],
          resInfo: this.data.two,
        })

        break;

      case '2':

        this.setData({
          color: this.data.colors[2],
          resInfo: this.data.three,
        })

        break;
    }

  },


  itemDsc: function (e) {

    console.log(e)
    switch (e.currentTarget.id) {
      case '0':

        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })


        break;




      case '1':

        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })


        break;



      case '2':


        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


      case '3':


        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


      case '4':



      //  wx.navigateTo({
      //     url: 'itemDsc/itemDsc',
      //   })
        break;


      case '5':

        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


      case '6':

        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


      case '7':

        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


      case '8':


        // wx.navigateTo({
        //   url: 'itemDsc/itemDsc',
        // })
        break;


    }


  }




})