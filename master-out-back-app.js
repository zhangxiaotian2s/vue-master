//本插件需要 outbackapp.vue 组件
//为方便修改 组件文件 还是自己重新制作为好 其实只是为了 全局使用 backAppFn

const MasterOutBackApp = {}

MasterOutBackApp.install = function (Vue, options) {
  let $vm;
  const BackApp = Vue.extend(options.comment)
  $vm = new BackApp({
    el: document.createElement('div')
  })
  if (global.BOOL_OUTAPP) {
    document.body.appendChild($vm.$el)
    Vue.prototype.$outBackApp = function (url) {
      $vm.backAppFn(url)
    }
  }

}
export default MasterOutBackApp