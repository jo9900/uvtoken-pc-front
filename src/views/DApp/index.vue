<!-- -->
<template>
    <div class="page">



        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>海量Dapp</div>
                            <div>畅游链世界</div>
                        </div>
                        <div class="caosjet">
                            <div>潜心挖掘，安全审核，帮你找到最优质的最好玩的Dapp 将上架1000+ dapp</div>

                        </div>
                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_dapp@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>


        <div class="project project-3" >
            <div class="wrap">
                <div class="contetnt">
                    <div>
                        <div class="title-1">DApps</div>
                        <div class="fc-img"><img src="../../assets/img/pic_dapp.png"/></div>
                    </div>
                </div>
            </div>
        </div>


        <div class="project project-4" >
            <div class="wrap">
                <div class="contetnt">
                    <div>
                        <div class="title-1">联系我们</div>
                        <div class="coak">
                             <div class="boet">
                                 <div class="wloet"><img src="../../assets/img/icon_sxdapp@2x.png"/></div>
                                  <div class="title-2">上线 DApp</div>
                                  <div class="dwkoer">等待开通申请>></div>
                             </div>
                             <div class="boet">
                                 <div class="wloet"><img src="../../assets/img/icon_sxdapp@2x.png"/></div>
                                 <div class="title-2">商务合作</div>
                                 <div class="title-3">邮箱联系：xxxxx@uvtoken.com</div>
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
    import { WOW } from 'wowjs'
    import webFoot from '@/components/footer';

    import  languageNav from "@/language/index"


    export default {
        name: '',
        components: {webFoot},
        data() {
            return {
                NODE_ENV:process.env.NODE_ENV,
                closeTrime:14,
                timerNull:null,
                WindowHeight:0,
                countToMrue:false,
                countToMrue1:false,
                BaseUrl:this.$BaseUrl,
                option1:false,
                option2:false,
                option3:false,
                option4:false,
                option5:false,
                option6:false,
                option7:false,
                option8:false,
                class0:false,
                class1:false,
                class2:false,
                jgShow1:false,
                jgShow2:false,
                jgShow3:false,
                isAlertTrue:false,
                isFhows:false,

                languageNav:languageNav,
                languageName:this.$languageName
            }
        },
        computed:{

        },
        watch:{

        },
        methods:{

        },
        created(){

        },


        mounted(){
            // let that = this;
            // this.WindowHeight = (window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-77;
            // window.addEventListener("scroll", function(event) {
            //
            //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //     console.log(scrollTop)
            //     if(scrollTop>=2000){
            //
            //        that.countToMrue = true;
            //     }
            //     if(scrollTop>=2600){
            //         that.countToMrue1 = true;
            //     }
            //     if(scrollTop>=1400){
            //         setTimeout(()=>{that.option1 = true;},0)
            //         setTimeout(()=>{that.option2 = true;},1000);
            //         setTimeout(()=>{that.option3 = true;},2000);
            //         setTimeout(()=>{that.option4 = true;},3000)
            //         setTimeout(()=>{that.option5 = true;},4000)
            //         setTimeout(()=>{that.option6 = true;},5000);
            //         setTimeout(()=>{that.option7 = true;},6000);
            //         setTimeout(()=>{that.option8 = true;},7000)
            //     }
            //   if(scrollTop>=4000){
            //       setTimeout(()=>{that.class0 = true;},0)
            //       setTimeout(()=>{that.class1 = true;},500);
            //       setTimeout(()=>{that.class2 = true;},1000);
            //   }
            //     if(scrollTop>=4470){
            //         setTimeout(()=>{that.jgShow1 = true;},0)
            //         setTimeout(()=>{that.jgShow2 = true;},500);
            //         setTimeout(()=>{that.jgShow3 = true;},1000);
            //     }
            // },true);


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
                        width: 673px;
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
                margin-bottom: 130px;
            }
            .title-2{
                font-size: 30px;
                margin: 17px 0 31px 0;
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
            .boet{
                width: 579px;
                padding: 38px 0;
                margin-right: 29px;
                border: 1px solid #BACDFF;
                text-align: center;

            }
        }

    }


</style>
