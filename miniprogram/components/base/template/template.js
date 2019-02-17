// /miniprogram/components/base/template/template.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:null,
      observe (newVal, oldVal, changedPath) {
        console.log("list changed",newVal,oldVal,changedPath)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  lifetimes:{
    attached(){
      console.log("component attached")
    }
  }
})
