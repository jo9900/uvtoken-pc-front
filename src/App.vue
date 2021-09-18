<!--
 * @Author: jhy
 * @Date: 2021-07-12 16:19:36
 * @LastEditTime: 2021-09-01 18:38:13
 * @LastEditors: jhy
 * @Description: 
 * @FilePath: /taf2-front-web/Users/jhy/yongqi/uvtoken-pc-front/src/App.vue
-->

<template>
  <div id="app" :class="[lang,ad_banner_status?'da_on':'']" >
    <div id="da_banner_con"></div>
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
            NODE_ENV: process.env.NODE_ENV,
            ad_banner_status: false,
          }
        },
        computed: {
          lang() {
            return localStorage.lang
          }
        },
      mounted() {
        let type = 'common'
        if (window.location.search) {
          type = this.getUrlParam('rec')
          if (type) this.recordClick(type)
        }
        else this.recordClick(type)


        let lang = localStorage.getItem('lang');
        ad('da_banner_con',lang,0,e=>{
          console.log(1,e)
          if(e){
            this.ad_banner_status = true;
          }else{
            this.ad_banner_status = false;
          }
        });
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
<style lang="less">
  .gobaket:hover{
    color: #5885FD;
  }
  #app{
    &.da_on{
      #da_banner_con{
        height: 85px;
        position: relative;
        z-index: 99;
        #da_banner{
          position: fixed;
        }
      }
    }
  }
</style>
