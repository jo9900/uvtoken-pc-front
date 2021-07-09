
<template>
  <div id="app">
<!--    <keep-alive>-->
      <router-view/>
<!--    </keep-alive>-->
  <!--<service/>-->
  </div>
</template>
<script>
    import  service from '@/components/service'
    export default {
        name:'',
        data() {
          return {
            NODE_ENV: process.env.NODE_ENV
          }
        },
      mounted() {
        let type = 'common'
        if (window.location.search) {
          type = this.getUrlParam('rec')
          if (type) this.recordClick(type)
        }
        else this.recordClick(type)
      },
      methods: {
        getUrlParam(paraName) {
          var url = document.location.toString();
          var arrObj = url.split("?");

          if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;

            for (var i = 0; i < arrPara.length; i++) {
              arr = arrPara[i].split("=");

              if (arr != null && arr[0] == paraName) {
                return arr[1];
              }
            }
            return "";
          }
          else return "";
        },
        recordClick(type) {
          const url = 'http://wallet.uvtoken.com/wallet/statistics/downloadCount'
          let img = document.createElement('img')
          img.src = url + '?download_type=' + type +'&t=' + +new Date()
          img.style.display = 'none'
          document.body.appendChild(img)
          document.body.removeChild(img)
        },
      },
        components: {service},
        metaInfo() {
          return {
            title: this.NODE_ENV == 'production'? 'UvToken': 'test uvtoken',
            meta: [
              {
                name: "keyWords",
                content: this.$t("text210")
              },
              {
                name: "description",
                content: this.$t("text211")
              }
            ]
          };
        }

    }
</script>
<style>
  .gobaket:hover{
    color: #5885FD;
  }
</style>
