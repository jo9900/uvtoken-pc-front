<!-- -->
<template>
    <div class="page">



        <div class="project project-2" >
            <div class="wrap">
                <div class="contetnt">
                    <div class="contetnt_text wow  fadeInRight">
                        <div class="bget">
                            <div>一键买入</div>
                            <div>坐享高额回报</div>
                        </div>
                        <div class="caosjet">
                            <div>借贷生息、活期理财、定期理财、staking质押奖励等丰富理财玩法 中心化+去中心化理财，安全放心、随存随取、利息实时到账、高额回报</div>

                        </div>
                    </div>
                    <div class=" bloart wow  fadeInLeft" >
                        <img class="contetnt_img" src="@/assets/img/pic_lc@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>


        <div class="project project-3" >
            <div class="wrap">
                <div class="contetnt">
                    <div>
                        <div class="qkeoert paddgint">
                            <div class="billet">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_dqlc.png"/></div>
                                    <div class="title-1">定期理财</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">存币生息，高收益</div>
                                        <div class="title-2">7天、14天、30天、180天</div>
                                    </div>

                                    <div class="rmot-button">等待上线</div>
                                </div>

                            </div>
                            <div class="billet" style="margin: 0 28px;">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_hqlc.png"/></div>
                                    <div class="title-1">活期理财</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">随村随取，闲置资产利用</div>
                                    </div>

                                    <div class="rmot-button">等待上线</div>
                                </div>
                            </div>
                            <div class="billet">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_staking.png"/></div>
                                    <div class="title-1">Staking</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">POS类质押挖矿奖励</div>
                                        <div class="title-2">参与公链治理并坐享收益</div>
                                    </div>
                                    <div class="rmot-button">等待上线</div>
                                </div>

                            </div>
                        </div>

                        <div class="qkeoert">
                            <div class="billet">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_ywk.png"/></div>
                                    <div class="title-1">云挖坑</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">算力挖矿、机枪矿池</div>
                                        <div class="title-2">周期短、收益高</div>
                                    </div>

                                    <div class="rmot-button">等待上线</div>
                                </div>

                            </div>
                            <div class="billet" style="margin: 0 28px;">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_ytz.png"/></div>
                                    <div class="title-1">云投资</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">专业团队主动出击</div>
                                        <div class="title-2">寻找优质项目，提前布局</div>
                                    </div>

                                    <div class="rmot-button">等待上线</div>
                                </div>
                            </div>
                            <div class="billet">
                                <div class="fitop">
                                    <div><img src="../../assets/img/icon_ztg.png"/></div>
                                    <div class="title-1">Staking</div>
                                    <div class="wiiot">
                                        <div class="title-2 title-pi">新项目空投奖励</div>
                                        <div class="title-2">带领大家一起薅羊毛</div>
                                    </div>
                                    <div class="rmot-button">等待上线</div>
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
            padding-top: 133px;
            padding-bottom: 147px;
            .paddgint{
                margin-bottom: 131px;
            }
            .qkeoert{
                display: flex;
                align-items: center;
                .billet{
                    width: 371px;
                    padding-bottom: 38px;
                    text-align: center;
                    border: 1px solid #BACDFF;
                }
                .rmot-button{
                    line-height: 40px;
                    height: 40px;
                    color: #fff;
                    text-align: center;
                    background-color: #5885FD;
                    display: inline-block;
                    padding: 0 61px;
                }
                .wiiot{
                    min-height: 75px;
                    margin-bottom: 10px;
                }
                .fitop{
                    margin-top: -50px;
                }
                .title-1{
                    color: #272727FF;
                    font-size: 28px;
                    margin: 33px 0 12px 0;
                }
                .title-pi{
                    margin-bottom: 5px;
                }
                .title-2{
                    color: #7B839AFF;
                    font-size: 14px;
                }
            }
        }


    }


</style>
