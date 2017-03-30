import setshareComment from '../components/setshare.vue'

let $vm

const plugin = {
  install(Vue, Options) {
    if (!$vm) {
      const MasterSetShare = Vue.extend(setshareComment)
      $vm = new MasterSetShare({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
      if (global.BOOL_OUTAPP) {
        document.body.appendChild($vm.$el)
        Vue.prototype.$setShare = function (mes) {
          mes = Object.assign({}, Options, mes);
          $vm.setShare(mes)
        }
      }
    }

    const MasterSetShare = {


    }

    if (!Vue.$vux) {
      Vue.$vux = {
        MasterSetShare
      }
    } else {
      Vue.$vux.MasterSetShare = MasterSetShare
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
