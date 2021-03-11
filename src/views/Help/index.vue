<!-- -->
<template>
    <div class="page">



        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>帮助中心</div>
                        </div>

                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_help@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>



        <div class="project project-4" >
            <div class="wrap">
                <div class="contetnt">
                    <div>
                        <div class="title-1">常见问题</div>
                        <div class="coak">
                            <div class="bmllort">
                                <div class="boet" v-for="item in listData">
                                    <router-link  :to="{path:'/helpDetail',query:{id:item.id}}" >
                                        <div class="title-2">{{item.issueName}}</div>
                                    </router-link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        <webFoot/>
    </div>
</template>

<script>
    import webFoot from '@/components/footer';
    import  languageNav from "@/language/index"
    import { helpList }  from "@/request/news"
    export default {
        name: '',
        components: {webFoot},
        data() {
            return {
                listData:[],
                languageNav:languageNav,
                languageName:this.$languageName
            }
        },
        computed:{

        },
        watch:{

        },
        methods:{
            getlist(){
                helpList().then(res=>{
                    this.listData = res.data;
                })
            }
        },
        created(){
         this.getlist();
        },


        mounted(){



        }
    }
</script>

<style lang='less' scoped>
    .wrap{
        width: 1200px;
        margin: 0 auto;
    }
    .page {

        .project {

            background: #ffffff;
            .wrap {
                .title {
                    color: #282828;
                    font-size: 36px;
                    line-height: 60px;
                    text-align: center;
                    margin-bottom: 39px;
                }
                .contetnt {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .contetnt_img {
                        width: 480px;
                    }

                    .contetnt_text {
                        color: #7B7B7B;
                        font-size: 16px;
                        width: 498px;
                        text-align: right;
                    }
                    .bget{
                        font-size: 44px;
                        color: #272727FF;
                        margin-bottom: 15px;
                        letter-spacing: 4px;

                    }
                    .caosjet{
                        font-size: 20px;
                        color: #7B839AFF;
                        line-height: 29px;
                        margin-bottom: 19px;
                    }
                }
            }
        }

        .project-2{
            background: #F8FBFF;
            .wrap{
                .contetnt{
                    padding: 127px 0 157px 0;
                    .contetnt_text{
                        width: 597px;
                        text-align: left;
                        padding-left: 57px;
                        margin-right: 44px;
                    }
                }

            }
        }

        .project-3{
            padding-top: 110px;
            padding-bottom: 82px;
            .paddgint{
                margin-bottom: 131px;
            }
            .title-1{
                text-align: center;
                color: #272727FF;
                font-size: 34px;
                margin-bottom: 90px;

            }
            .fc-img img {
                width: 955px;
            }
        }

        .project-4{
            padding-top: 110px;
            padding-bottom: 196px;
            .paddgint{
                margin-bottom: 131px;
            }
            .title-1{
                text-align: center;
                color: #272727FF;
                font-size: 34px;
                margin-bottom: 115px;
            }
            .title-2{
                font-size: 16px;
                 color: #272727FF;
            }
            .title-3{
                font-size: 16px;
                color: #7B839AFF;
            }
            .coak{
                display: flex;

            }
            .wloet img{
                width: 60px;
            }
            .bmllort{
                display: flex;
                flex-wrap: wrap;
            }
            .boet{
                width: 559px;
                padding: 17px 0px;
                margin-right: 29px;
                border: 1px solid #BACDFF;
                text-align: center;
                margin-bottom: 35px;
                transition:all .3s;
                cursor: pointer;
            }

            .boet:hover{
                box-shadow: 4px 4px 12px 0px rgba(88, 133, 253, 0.18);
            }

        }

    }


</style>
