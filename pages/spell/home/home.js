// pages/spell/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: ({

    imgUrls: [
      '../../../image/index/one.jpg',
      '../../../image/index/two.jpg',
      '../../../image/index/there.jpg',
      '../../../image/index/four.jpg'],
    resInfo:
    [{
      image: '../../../image/spell/new.png',
      text: '新 品'
    }, {
      image: '../../../image/spell/hotBuy.png',
      text: '热 卖'
    }, {
      image: '../../../image/spell/groupBuy.png',
      text: '团 购'
    }, {
      image: '../../../image/spell/order.png',
      text: '订 单'
    }, {
      image: '../../../image/spell/community.png',
      text: '社 区'
    }, {
      image: '../../../image/spell/category.png',
      text: '分 类'
    }, {
      image: '../../../image/spell/footstep.png',
      text: '足 迹'
    }, {
      image: '../../../image/spell/find.png',
      text: '找 货'
    }, {
      image: '../../../image/spell/sale.png',
      text: '拍 卖'
    }, {
      image: '../../../image/spell/appreciate.png',
      text: '鉴 赏'
    }
    ],
    shopImageSet: [
      '../../../image/spell/shopImageSet/a.jpg',
      '../../../image/spell/shopImageSet/b.jpg', '../../../image/spell/shopImageSet/c.jpg', '../../../image/spell/shopImageSet/d.jpg', '../../../image/spell/shopImageSet/e.jpg', '../../../image/spell/shopImageSet/f.jpg',
      '../../../image/spell/shopImageSet/g.jpg',
      '../../../image/spell/shopImageSet/h.jpg',
      '../../../image/spell/shopImageSet/i.jpg',
      '../../../image/spell/shopImageSet/j.jpg'
    ],
    shopItem: [
      {
        imageRec: '../../../image/spell/shopImageSet/a.jpg',
        text: '独山玉',
        price: '¥99.9',

      }, {
        imageRec: '../../../image/spell/shopImageSet/b.jpg',
        text: '新疆玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/c.jpg',
        text: '和田玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/e.jpg',
        text: '和氏璧',
        price: '¥99.9'
      }, {
        imageRec:
        '../../../image/spell/shopImageSet/d.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/f.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/g.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/h.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/i.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/j.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/a.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/b.jpg',
        text: '新疆玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/c.jpg',
        text: '和田玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/e.jpg',
        text: '和氏璧',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/a.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/b.jpg',
        text: '新疆玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/c.jpg',
        text: '和田玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/e.jpg',
        text: '和氏璧',
        price: '¥99.9'
      }, {
        imageRec:
        '../../../image/spell/shopImageSet/d.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/f.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/g.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/h.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/i.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/j.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/a.jpg',
        text: '独山玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/b.jpg',
        text: '新疆玉',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/c.jpg',
        text: '和田玉\t\t\t',
        price: '¥99.9'
      }, {
        imageRec: '../../../image/spell/shopImageSet/e.jpg',
        text: '和氏璧',
        price: '¥99.9'
      }
    ]
  }),

  listItem: function (e) {

    console.log(e);

    switch (e.currentTarget.id) {
      case '5':
        wx.navigateTo({
          url: '../../../pages/spell/classification/classification',
        });
        break;

    }
  },



  buyClikck: function () {
    wx.navigateTo({
      url: '../../../pages/spell/myGroup/myGroup',
    })
  }
})