// 为了配合佰佳高尔夫的分享设置。
// npm install vue-master;
// import MasterSetShare from 'vue-master/master-set-share';
// Vue.use(MasterSetShare);
// 使用 this.$setShare({
// title:'',summary:'',url:'',image:'' 
// })


const MasterSetShare = {}

MasterSetShare.install = function (Vue, Options) {

  Vue.prototype.$setShare = function (mes) {
    mes = Object.assign({}, Options, mes);
    document.querySelectorAll('title')[0].innerHTML = `${mes.title}`;
    let description = document.querySelector('meta[name="description"]'),
      share_title = document.querySelector('meta[name="share-title"]'),
      share_summary = document.querySelector('meta[name="share-summary"]'),
      share_url = document.querySelector('meta[name="share-url"]'),
      share_image = document.querySelector('meta[name="share-image"]');

    if (share_title) {
      share_title.setAttribute('content', mes.title);
    }
    if (share_summary) {
      share_summary.setAttribute('content', mes.summary);
      description.setAttribute('content', mes.summary);
    }
    if (share_url) {
      share_url.setAttribute('content', mes.url);
    }
    if (share_image) {
      share_image.setAttribute('content', mes.image)
    }

    if (!share_title) {
      document.head.innerHTML += `
      <meta name="description" content='${mes.summary}'>
      <meta name="share-title" content='${mes.title}'>
      <meta name="share-summary" content='${mes.summary}'>
      <meta name="share-url" content='${mes.url}'>
      <meta name="share-image" content='${mes.image}'>`;
    }
  }

}
export default MasterSetShare
