
<template>
  <div id="app">
    <router-view/>
  <!--<service/>-->
  </div>
</template>
<script>
    import  service from '@/components/service'
    export default {
        name:'',
        components: {service},
        data(){
            return {

            }
        },
        methods:{

        },

    }
</script>
<style>
  .gobaket:hover{
    color: #5885FD;
  }
</style>
