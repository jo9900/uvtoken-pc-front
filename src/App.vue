
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  <!--<service/>-->
  </div>
</template>
<script>
    import  service from '@/components/service'
    export default {
        name:'',
        components: {service},
        metaInfo() {
          return {
            title: 'UvToken',
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
