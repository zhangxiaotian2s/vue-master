import outbackappComments from '../components/outbackapp.vue'

let $vm

const plugin = {
  install(Vue) {
    if (!$vm) {
      const MasterOUTBackApp = Vue.extend(outbackappComments)
      $vm = new MasterOUTBackApp({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
      if (global.BOOL_OUTAPP) {
        document.body.appendChild($vm.$el)
        Vue.prototype.$outBackApp = function (url) {
          $vm.backAppFn(url)
        }
      }
    }

    const MasterOUTBackApp = {


    }

    if (!Vue.$vux) {
      Vue.$vux = {
        MasterOUTBackApp
      }
    } else {
      Vue.$vux.MasterOUTBackApp = MasterOUTBackApp
    }

    Vue.mixin({
      created: function () {
        this.$vux = Vue.$vux
      }
    })
  }
}

export default plugin
export const install = plugin.install
