
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
    color: #D2A629;
  }
</style>
