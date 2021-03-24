<template>
    <div>
        <div class="navhearder" ref="ele"><Nav/></div>
        <div class="layout_box">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
            >
                <router-view />
            </transition>

          <Footer/>
        </div>
    </div>

</template>

<script>



// import Left from './left'
import Nav from './nav'
import Footer from './footer'

export default {
    name:'',
    components: {Nav,Footer},
    data(){
        return {
        }
    },
    methods:{

    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>

    .layout_box{
        /*min-height: 900px;*/
        min-width: 1200px;
        height: 100%;
        overflow: auto;
        padding-top: 74px;
        .el-header{
            overflow: hidden;
           height:74px !important;
            padding: 0;
        }
        .el-main{
            height: 100%;
            padding: 0;
        }
        .el-footer{
            height: 90px !important;
            padding: 0;
        }
    }
    .navhearder{
        position: fixed;
        width: 100%;
        z-index: 999;
        /*height: 140px;*/
    }
</style>
