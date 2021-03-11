<!-- -->
<template>
    <div class="page">
        <div class="content-muner" style="position: relative;" :style="{'min-height':'900px'}">

            <div class="bsolert">
                <div class="flex1">
                    <div>
                        <div class="tile-bket">
                            <p>打造数字资产管理</p>
                            <p>新生态</p>
                        </div>
                    </div>
                    <div class="qosker">安全、便捷、高效的去中心化数字资产管理平台</div>
                    <div >
                        <div class="rat_t">
                            <a class="coet" target="_blank" :href="NODE_ENV==='test'?'http://apps.apple.com/us/app/UvToken/id1552556395':'https://apps.apple.com/us/app/UvToken/id1552556395'" style="margin-right: 15px">
                                <div class="coet-ab">
                                    <div class="coet-fg"><img src="../../assets/img/icon_apple@2x.png"/></div>
                                    <div class="rcan">App store</div>
                                </div>
                            </a>
                            <a class="coet" :href="NODE_ENV==='test'?'http://wallet.uvtoken.com/static/download/android/uvtoken.apk':'https://wallet.uvtoken.com/static/download/android/uvtoken.apk'">
                                <div class="coet-ab">
                                    <div class="coet-fg"><img src="../../assets/img/icon_android@2x.png"/></div>
                                    <div class="rcan">Android APK</div>
                                </div>

                            </a>
                            <a href="javascript:;" class="gdroe">
                                <el-dropdown  placement="bottom" style="width: 74px;">
                                    <div class="waet"><img src="../../assets/img/robge.png"/></div>
                                    <el-dropdown-menu slot="dropdown">
                                        <div class="gdroe-bler">
                                            <img src="../../assets/img/dowemoey.png"/>
                                        </div>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex1">
                   <img src="../../assets/img/pic_phone.png"/>
                </div>
            </div>
        </div>

        <!--<el-carousel height="700px" interval="4000">-->
            <!--<el-carousel-item style="cursor: pointer">-->
                <!--<div class="banner" style="position: relative" @click="slkowet">-->
                    <!--<img style="height: 100%;"  src="@/assets/img/banner-bg_Compress.png">-->
                    <!--<div style="position: absolute;top: 136px;;text-align: center;width:100%">-->
                        <!--<template v-if="languageName=='English'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_Entext.png" alt="">-->
                        <!--</template>-->
                        <!--<template v-if="languageName=='Chinese'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_text.png" alt="">-->
                        <!--</template>-->
                        <!--<template v-if="languageName=='Russian'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_els.png" alt="">-->
                        <!--</template>-->
                        <!--<template v-if="languageName=='Korean'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_hu.png" alt="">-->
                        <!--</template>-->
                        <!--<template v-if="languageName=='Japanese'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_Japanese.png" alt="">-->
                        <!--</template>-->
                        <!--<template v-if="languageName=='Arabic'">-->
                            <!--<img style="height: 100%;"  src="@/assets/img/pc_banner_Arabic.png" alt="">-->
                        <!--</template>-->

                    <!--</div>-->
                    <!--&lt;!&ndash;<img  :src="languageName=='English'?require('@/assets/img/banner_English.png'):require('@/assets/img/banner_chinese.png')" alt="">&ndash;&gt;-->
                <!--</div>-->
            <!--</el-carousel-item>-->
            <!--<el-carousel-item style="cursor: pointer">-->
                <!--<div  class="banner" style="height: 100%;">-->
                    <!--<img class="banner_img" style="height: 100%;" src="@/assets/img/silder_01.jpg" alt="">-->
                    <!--<div class="posuRoert" style="top: 204px;">-->
                        <!--<img src="../../assets/logo.png" style="margin-bottom: 32px;"/>-->

                        <!--<div style="font-size: 39px;font-weight: 700;color: #eae7e7;letter-spacing: 3px;text-align: center;">-->
                            <!--<template v-if="languageName=='English'">-->
                                <!--<div style="font-size: 41px;margin-bottom: 19px;">TAF CHAIN COMMERCIAL PUBLIC CHAIN</div>-->
                                <!--<div style=" font-size: 32px;width: 1189px;margin: 0 auto;">The world's first million-breaking TPS public blockchain Rezempower the blockchain-economy</div>-->
                            <!--</template>-->
                            <!--<template v-if="languageName=='Chinese'">-->
                                <!--<div style="font-size: 46px;margin-bottom: 19px;">TAF CHAIN 商业级公链</div>-->
                                <!--<div>世界首个破百万TPS公链 为区块链经济重新赋能</div>-->
                            <!--</template>-->
                            <!--<template v-if="languageName=='Korean'">-->
                                <!--<div style="font-size: 46px;margin-bottom: 19px;">세계 최초 비지니스급 퍼블릭 블록체인 TAF CHAIN의</div>-->
                                <!--<div>제1차 사모 발행 초과완성을 축하합니다</div>-->
                            <!--</template>-->
                            <!--<template v-if="languageName=='Russian'">-->
                                <!--<div style="font-size: 46px;margin-bottom: 19px;">Горячо поздравляем с успешным выпуском первого частного размещения выше лимита</div>-->
                                <!--<div> первого всемирного коммерческого блокчейна TAF CHAIN</div>-->
                            <!--</template>-->

                            <!--<template v-if="languageName=='Japanese'">-->
                                <!--<div style="font-size: 46px;margin-bottom: 19px;">世界初めのビジネスクラスのパブリックチェーンTAF CHAINがリリースされることを熱烈に祝賀する</div>-->
                                <!--<div>第一ラウンドの私募が超過的にリリースされた</div>-->
                            <!--</template>-->

                        <!--</div>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<img class="banner_guide" :src="languageName=='English'?require('@/assets/img/english.png'):require('@/assets/img/index_banner_guide.png')" alt="">&ndash;&gt;-->
                <!--</div>-->
            <!--</el-carousel-item>-->



            <!--<el-carousel-item style="cursor: pointer">-->
                <!--<div  class="banner banereot" style="height: 100%;" > -->
                    <!--<div style="display: flex;justify-content: center;padding-top: 178px;align-items: center;">-->
                         <!--<div style="text-align: left">-->
                             <!--<div class="slRowet">-->
                                 <!--<template v-if="languageName=='English'"><img src="@/assets/img/pic_baipi_e_1.png"/></template>-->
                                 <!--<template v-if="languageName=='Chinese'"><img src="@/assets/img/pic_baipi_c_1.png"/></template>-->
                                 <!--<template v-if="languageName=='Arabic'"><img src="@/assets/img/pic_baipi_Arabic.png"/></template>-->
                                 <!--<template v-if="languageName=='Russian'"><img src="@/assets/img/pic_baipi_Russian.png"/></template>-->
                                 <!--<template v-if="languageName=='Korean'"><img src="@/assets/img/pic_baipi_Korean.png"/></template>-->
                                 <!--<template v-if="languageName=='Japanese'"><img src="@/assets/img/pic_baipi_Japanese.png"/></template>-->
                             <!--</div>-->
                             <!--<div class="downBook">-->
                                 <!--<template v-if="languageName=='Chinese'">-->
                                     <!--<a target="_blank" href="../img/TAFChain白皮书1.0.pdf">{{languageNav[languageName].language_text30}}</a>-->
                                 <!--</template>-->
                                 <!--<template v-else>-->
                                     <!--<a target="_blank" href="../img/TAF Chain White Paper 1.0.0.pdf">{{languageNav[languageName].language_text30}}</a>-->
                                 <!--</template>-->
                             <!--</div>-->
                         <!--</div>-->
                         <!--<div>-->
                             <!--<img src="@/assets/img/pic_baipi_c_2.png"/>-->
                         <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->



        <div class="project">
            <div class="wrap">
                <div class="contetnt">
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_zlzc@2x.png" alt="">
                    </div>

                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>最全主链支持</div>
                            <div>轻松管理多链资产</div>
                        </div>
                         <div class="caosjet">将支持TAF、BTC、ETH、EOS、DOT、BCH、TRX、BSC FIL、IOST、ATOM等20多个主链上千代币</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>领先业界</div>
                            <div>真正跨多链闪兑</div>
                        </div>
                        <div class="caosjet">自主创新研发的高性能跨链交易协议，由智能合约实施的跨链直接交易 理论上支持任意数字货币之间进行交易，相对于市面单链Dex完成质的飞跃</div>
                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_lxyj@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="project">
            <div class="wrap">
                <div class="contetnt">
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_lxyjg@2x.png" alt="">
                    </div>

                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>一键买入</div>
                            <div>坐享高额回报</div>
                        </div>
                        <div class="caosjet">借贷生息、活期理财、定期理财、staking质押奖励等丰富理财玩法 安全放心、随存随取、利息实时到账、高额回报</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>安全保障</div>
                            <div>极致守护值得信赖</div>
                        </div>
                        <div class="caosjet">私钥完全自持，资产一手掌握，一套助记词管理所有数字货币 多重加密算法，验证保障您的数字资产安全</div>
                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_aqbz@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="project project-3" >
            <div class="wrap">
               <div class="scoplert">
                   <div>
                       <div class="title-1">海量Dapp  畅游链世界</div>
                       <div class="title-2">潜心挖掘，安全审核，帮你找到最优质的最好玩的Dapp 将上架1000+ Dapp</div>
                       <div><img src="../../assets/img/pic_dapp.png"/></div>
                   </div>
               </div>
            </div>
        </div>

        <div class="project project-3 project-4" >
            <div class="wrap">
                <div class="scoplert">
                    <div>
                        <div class="title-1">硬件钱包</div>
                        <div class="title-3">由密码学专家、硬件工程师等主要成员为用户定制较于市面更加强化版本</div>
                        <div><img src="../../assets/img/pic_yjqb.png"/></div>
                    </div>
                </div>
            </div>
        </div>

         <!--<div class="boxCoent" v-if="isAlertTrue" >-->
             <!--<div style="display: table;width: 100%;height: 100%;">-->
                 <!--<div class="boxAlert animated1 zoomIn" >-->
                      <!--<div class="lseot">-->
                             <!--<div class="gplor">-->
                                 <!--<template v-if="languageName=='Chinese'">-->
                                     <!--<img src="@/assets/img/bannerAlert_zn.png"/>-->
                                 <!--</template>-->
                                 <!--<template v-else>-->
                                     <!--<img src="@/assets/img/bannerAlert_en.png"/>-->
                                 <!--</template>-->
                             <!--</div>-->
                             <!--<div class="" style="align-items: center;color:#fff;display: flex;position: absolute;top: 11px;right: 15px;opacity: 0.7">-->
                                  <!--<div style="font-size: 13px;">-->
                                      <!--{{closeTrime}}S-->
                                      <!--{{languageNav[languageName].language_text46}}-->
                                  <!--</div>-->
                                  <!--<div class="alertColse" @click="colsepl"><i class="el-icon-circle-close"></i></div>-->
                             <!--</div>-->
                      <!--</div>-->
                 <!--</div>-->
             <!--</div>-->

         <!--</div>-->


        <webFoot/>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
import webFoot from '@/components/footer';
import {digest}  from "@/request/news"
import  languageNav from "@/language/index"
import countTo from 'vue-count-to';

export default {
    name: '',
    components: {webFoot,countTo},
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
           list:[
               {code:"",title:"TAF Chain和以太坊2.0谁将开启新一轮牛市",publish_date:"2020-11-12",digest:"截至11月11日，已有超5万枚ETH打入以太坊2.0存款合约地址，以太坊2.0进入创世启动阶段，启动进度完成10%。同时区块链3.0的代表TAFT完成了第一阶段的私募发售。仅用时26天第一阶段预售就已售罄。由此可见投资者对区块链3.0的期待和认可。2021年TAF Chain公链和以太坊2.0公链都将问世，届时将会是顶尖区块链技术的对垒，也是一场科技的盛宴。"},
               {code:"",title:"区块链技术如何变革供应链金融",publish_date:"2020-10-02",digest:"尽管长期以来区块链的应用重点一直被放在支付和证券领域，但一个重要，且仍被低估的用例是供应链金融。目前，情况已在发生改变。现有供应链财务解决方案的复杂性和规模，在确保充足的资金和高效的运营方面提出了重大挑战。区块链技术有可能改变供应链金融的游戏规则。"},
               {code:"",title:"企业链改三原则：简化，连接，交易",publish_date:"2020-10-02",digest:"按照大多数技术的标准，区块链仍应处于起步阶段。例如，现代计算机已经存在了80多年，云计算尽管自1996年以来就已存在，但它在许多行业领域仍属于努力获得市场份额阶段。"}
           ],
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

        slkowet(){
            this.$router.push({path:'/newsDetail',query:{code:this.list[0].code}})
        },
        getsolltop(){

                console.log(document.body.scrollTop)


        },
        colsepl(){
            this.isAlertTrue = false;
            this.$store.commit('TRIM',true)
        },
        timer() {
            if (this.closeTrime > 0) {
                this.closeTrime--;
               this.timerNull = setTimeout(this.timer, 1000);
            } else {
                clearTimeout(this.timerNull);
                this.closeTrime = 0;
                this.isAlertTrue = false;
                this.$store.commit('TRIM',true)
            }
        },
        mosuseenterFun(){
            this.isFhows = true;
        },
        mouseleaveFun(){
            this.isFhows = false;

        }
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
        .banner {
            position: relative;
            width: 100%;

            text-align: center;

            .banner_img {
                width: 100%;
            }
            .banner_guide {
                width: 1000px;
                position: absolute;
                left: 50%;
                top: 52%;
                margin-left: -500px;
            }
        }
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

                        font-size: 34px;
                        color: #272727FF;
                        margin-bottom: 15px;
                    }
                    .caosjet{
                        font-size: 18px;
                        color: #7B839AFF;
                        line-height: 29px;
                    }
                }
            }
        }

       .project-2{
           .wrap{
               .contetnt{
                   .contetnt_text{
                       width: 617px;
                       text-align: left;
                       padding-left: 36px;
                   }
               }

           }
       }

    .project-3{
        background: #F8FBFF;

        padding-top: 133px;
        padding-bottom: 147px;
        .scoplert{
            text-align: center;
            display: flex;
            justify-content: center;
            .title-1{
                color: #272727;
                font-size: 34px;
                margin-bottom: 23px;
            }
            .title-2{
                margin: 0 auto;
                width: 465px;
                line-height: 26px;
                color: #7B839A;
                font-size: 18px;
                margin-bottom: 54px;
            }
        }
    }

        .project-4{
            background: #fff;
            .title-3{
                margin: 0 auto;
                line-height: 26px;
                color: #7B839A;
                font-size: 18px;
                margin-bottom: 87px;
            }
        }


    }



    .zspt{
        position: relative;
        overflow: hidden;
    }
    .bg-trime{
        background: rgba(0, 0, 0, 0.4);
        color: #ffffff;
        padding: 5px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 14px;
    }
    .jg_flex{
        display: flex;
        justify-content: center;
        margin-bottom: 51px;
    }
    .jg-mrt{
        margin-left: 40px;
    }
    .jg-logo{
        margin-bottom: 20px;
    }
    .jg-context{
        color: #605C5C;
        line-height: 23px;
        text-align: left;
        font-size: 14px;
        /*display: -webkit-box;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-line-clamp: 12;*/
        /*overflow: hidden;*/
    }
    .asowt{
        width: 287px;
        height:50px;
        overflow: hidden;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
        margin-top: 47px;
        background-size:cover;
        background: url("../../assets/img/bg-bon.png") no-repeat ;
    }
    .posuRoert{
        position: absolute;
        top: 163px;
        width: 100%;
    }
    .posuRoert img{
          margin: 0 auto;
        width: 83px;
    }

    .banereot{
        background: linear-gradient(180deg, #006DDD 0%, #02285B 100%);

    }
    .slRowet{
        margin-bottom: 49px;
    }

    .downBook a{
        padding: 15px 67px;
        background-color: #e6a640;
        font-size: 20px;
    }

    .downBook a:hover{
        background-color: #FFBB44;
    }
    .content-muner{
        background:url("../../assets/img/baground-mob.png") 100% 100% no-repeat;
    }
    .bsolert{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        padding-top: 57px;
    }
    .tile-bket{
        font-size: 45px;
        color: #fff;
        line-height: 61px;
        margin-bottom: 38px;
    }
    .qosker{
        font-size: 20px;
        opacity: 0.7;
        color: #fff;
        margin-bottom: 29px;
    }

    .flex1{
        flex: 1;
    }
    .rat_t{
        display: flex;
    }
    .coet{
        display: block;
        width: 130px;
        height: 40px;
        background: #FFFFFF;
        border-radius: 3px;

    }
    .coet-ab{
       display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
    .rcan{
        font-size: 14px;
        margin-left: 6px;
        color: #5885FDFF;
    }
    .coet-fg{
        margin-top: -5px;
    }
    .coet-fg img{
        width: 20px;
    }
    .particles{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
    }

    .platform_advantage_bg {
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .platform_advantage_bg li {
        position: absolute;
        display: block;
        width: 40px;
        z-index: 0;
        height: 40px;
        background: rgba(255, 255, 255, .15);
        bottom: -180px;
        -webkit-animation: square 30s infinite;
        animation: square 30s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: translateY(-1500px)rotate(600deg);
            transform: translateY(-1500px)rotate(600deg)
        }
    }

    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: translateY(-1500px)rotate(600deg);
            transform: translateY(-1500px)rotate(600deg)
        }
    }

    .platform_advantage_bg li:nth-child(1) {
        left: 10%
    }

    .platform_advantage_bg li:nth-child(2) {
        left: 20%;
        width: 50px;
        height: 50px;
        -webkit-animation-delay: 1000ms;
        animation-delay: 1000ms;
        -webkit-animation-duration: 25s;
        animation-duration: 25s
    }

    .platform_advantage_bg li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 400ms;
        animation-delay: 400ms
    }

    .platform_advantage_bg li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, .25)
    }

    .platform_advantage_bg li:nth-child(5),
    .platform_advantage_bg_z li:nth-child(5) {
        left: 70%
    }

    .platform_advantage_bg li:nth-child(6) {
        left: 80%;
        width: 40px;
        height: 40px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, .2)
    }

    .platform_advantage_bg li:nth-child(7){
        left: 32%;
        width: 60px;
        height: 60px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s
    }

    .platform_advantage_bg li:nth-child(8){
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s
    }

    .platform_advantage_bg li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, .3)
    }

    .platform_advantage_bg li:nth-child(10)
    {
        left: 90%;
        width: 70px;
        height: 70px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s
    }

    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 30%, 0);
            transform: translate3d(0, 30%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 30%, 0);
            transform: translate3d(0, 30%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
    }

    .boxCoent{
        position: fixed;
        width: 100%;
        top:0;
        background-color: rgba(0,0,0,0.7);
        height: 100%;
        z-index: 99999;
    }
    .boxAlert{
        margin: 0 auto;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    .lseot{

        width: 900px;
        height: 500px;
        margin: 0 auto;
        position: relative;
    }


    .gplor img{
        width: 100%;
        height: 100%;
    }


    @-webkit-keyframes zoomIn1 {
        from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
            opacity: 1;
        }
    }

    @keyframes zoomIn1 {
        from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
            opacity: 1;
        }
    }

    .zoomIn {
        -webkit-animation-name: zoomIn1;
        animation-name: zoomIn1;
    }
    .animated1 {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .alertColse{
        margin-left:8px;
        font-size: 22px;
        cursor: pointer;
    }
    .waet{
       margin-left: 15px;
    }
    .waet img{
        width: 40px;
        height: 40px;
    }
    .gdroe{
        position: relative;
    }

    .gdroe-bler img{
        width: 172px;
        height: 174px;
        margin: 0 10px;

    }
  .pad20{
      padding-top: 30  px;
  }
</style>
