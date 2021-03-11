<!-- -->
<template>
    <div class="page">



        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>Uvswap</div>
                        </div>
                        <div class="caosjet">
                            <div>用户可以直接跨链快速兑换</div>
                            <div>支持包括BTC、TAF、ETH等20多条公链及链上代币快速交易</div>
                        </div>
                        <div class="dwkoer">即将上线</div>
                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_lxyj@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>


        <div class="project project-3" >
            <div class="wrap">
                <div class="contetnt">
                     <div class="scoplert">
                         <div class="title-1">安全高效 可靠透明</div>
                         <div class="title-2">基于ArthurAPI框架的高性能跨链swap协议而构建的面向未来的去中心化交易所</div>
                         <div>
                              <div class="zarll">
                                   <div class="zllp" style="margin-right: 308px;">
                                       <div class="zllp-img"><img src="../../assets/img/pic_jsgx@2x.png"/></div>
                                       <div>
                                           <div class="title-3">极速高效</div>
                                            <div class="title-4">基于ArthurAPI框架的高性能跨链swap协议 理论TPS性能高达2万+</div>
                                       </div>
                                   </div>
                                  <div class="zllp">
                                      <div class="zllp-img"><img src="../../assets/img/pic_wgas@2x.png"/></div>
                                      <div>
                                          <div class="title-3">无GAS</div>
                                          <div class="title-4">流动性提供者和用户无需支付高昂 gas 费用 极大降低使用门槛</div>
                                      </div>
                                  </div>
                              </div>


                             <div class="zarll">
                                 <div class="zllp" style="margin-right: 308px;">
                                     <div class="zllp-img"><img src="../../assets/img/pic_gxldx@2x.png"/></div>
                                     <div>
                                         <div class="title-3">共享流动性</div>
                                         <div class="title-4">用户可以和使用同样 ArthurAPI框架的其他交易所共享流动性</div>
                                     </div>
                                 </div>
                                 <div class="zllp">
                                     <div class="zllp-img"><img src="../../assets/img/pic_wqls@2x.png"/></div>
                                     <div>
                                         <div class="title-3">完全链上</div>
                                         <div class="title-4">一次交易中进行多次交易 完全透明且可验证</div>
                                     </div>
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

                listQuery:{
                    lang_type:this.$languageName,
                    page_no:1,
                    page_size:3
                },
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

                        font-size: 50px;
                        color: #272727FF;
                        margin-bottom: 15px;
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
                    .contetnt_text{
                        width: 673px;
                        text-align: left;
                        padding-left: 57px;
                    }
                }

            }
        }

        .project-3{


            padding-top: 133px;
            padding-bottom: 147px;
            .scoplert{
                text-align: center;
                .title-1{
                    color: #272727;
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title-2{
                    margin: 0 auto;
                    color: #7B839A;
                    font-size: 20px;
                    margin-bottom: 54px;
                }
            }
            .zarll{
                display: flex;
                margin-bottom: 67px;
            }
            .zllp{
                width: 246px;
                text-align: center;
            }
            .zllp-img img{
                width: 200px;
            }
            .title-3{
                color: #4C546AFF;
                font-size: 20px;
                margin: 10px 0;
            }
            .title-4{
                color:  #7B839AFF;
                font-size: 14px;
            }
        }


    }


</style>
