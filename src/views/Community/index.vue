<!-- -->
<template>
    <div class="page">
        <div class="page-cont">
             <div class="pamet">
                    <div class="nodeet">
                        NODE
                        <div class="imgket"></div>
                    </div>
                    <div class="dowet">节点投票</div>
             </div>
            <div class="tp-j">
                <div class="acoert"></div>
                <span>投票机制</span>
                <div class="acoert"></div>
            </div>
            <div style="display: flex;margin-bottom: 98px;">
               <div class="coanet-lkt" style="margin-right: 65px;">
                        <div class="sowl-lt"><img src="../../assets/img/sq-tp.png"/></div>
                        <div class="mau-lrit">
                             <p class="slwt-llt">一币一票</p>
                             <p class="aolst">每个账户可为最多5个节点投票，每一个 TAFT 仅视为一票</p>
                            <p class="aolst liht" style="margin: 22px 0;">参与节点投票的TAFT将被锁仓，期限1个月，到期后自动解锁，在锁仓期间可以设置固定的节点选举者及备选的选举者，若锁仓期间投票的节点放弃竞选，则相应的TAFT自动解锁。</p>
                            <p class="aolst">累计得票权重排名前21名节点将自动当选为TAF Chain节点；</p>
                        </div>
                 </div>
                <div class="coanet-lkt">
                    <div class="sowl-lt"><img src="../../assets/img/sq-zq.png"/></div>
                    <div class="mau-lrit">
                        <p class="slwt-llt">权重比例</p>
                        <p class="aolst">节点排名由投票总值决定，投票总值 = 投票总数*节点锁仓权重</p>
                        <p class="aolst liht" style="margin: 22px 0;">节点锁仓权重分别为：30天=1；60天=2；90天=3；120天=4；360天=5；</p>

                    </div>
                </div>
            </div>

            <div class="tp-j">
                <div class="acoert"></div>
                <span>节点收益</span>
                <div class="acoert"></div>
            </div>

            <div style="display: flex;margin-bottom: 98px;">
                <div class="coanet-lkt" style="margin-right: 65px;">
                    <div class="sowl-lt"><img src="../../assets/img/sq-st2.png"/></div>
                    <div class="mau-lrit">
                        <p class="slwt-llt">出块机制</p>
                        <p class="aolst">TAF Chain超级节点由全体持币者投票选出，每105分钟举行一次，投票率排列的前21位自动成为超级节点，进行轮循出块。前50名的剩下29名自动成为备选节点。</p>
                        <p class="aolst liht" style="margin: 22px 0;">节点排名由投票总值确决定，投票总值 = 投票总数*节点锁仓权重。节点锁仓权重分别为：30天=1；60天=2；90天=3；120天=4；360天=5；</p>

                    </div>
                </div>
                <div class="coanet-lkt">
                    <div class="sowl-lt"><img src="../../assets/img/sq-jl.png"/></div>
                    <div class="mau-lrit">
                        <p class="slwt-llt">奖励机制</p>
                        <p class="aolst">TAF Chain 每年增发总发行量的1.5%，即60亿 * １.5% =9000 万 Token，用于所有节点奖励。</p>

                    </div>
                </div>
            </div>

            <div style="display: flex;margin-bottom: 98px;">
                <div class="coanet-lkt" style="margin-right: 65px;">
                    <div class="sowl-lt"><img src="../../assets/img/sq-jd.png"/></div>
                    <div class="mau-lrit">
                        <p class="slwt-llt">出块节点奖励</p>
                        <p class="aolst">每年增发量9000万的TAFT，其中50%部分用于21个节点出块奖励。</p>
                        <p class="aolst liht" style="margin: 22px 0;">在TAFT中，每105分钟共出块63000个，平均每个节点可以获得3000次出块奖励。</p>

                    </div>
                </div>
                <div class="coanet-lkt">
                    <div class="sowl-lt"><img src="../../assets/img/sq-slt.png"/></div>
                    <div class="mau-lrit">
                        <p class="slwt-llt">备选节点奖励</p>
                        <p class="aolst">除了出块奖励，另50%增发部分用于平均奖励每次竞选的 21个出块节点+29个备选节点，以鼓励竞争及公平。</p>

                    </div>
                </div>
            </div>

            <div class="tp-j">
                <div class="acoert"></div>
                <span>投票入口</span>
                <div class="acoert"></div>
            </div>
              <div style="display: flex;justify-content: center;margin-bottom: 310px;">
                  <!--sq-clw.png-->
                  <div style="margin-right: 173px;">
                      <div class="tolett">
                          <div class="wit-kir"><img src="../../assets/img/sq-clw.png"/></div>
                          <div class="rleit">等待开放</div>
                      </div>
                      <div class="ldert">参与节点竞选</div>
                  </div>
                 <div>
                     <div class="tolett">
                         <div class="wit-kir"><img src="../../assets/img/sq-clw.png"/></div>
                         <div class="rleit">等待开放</div>
                     </div>
                     <div class="ldert">节点投票</div>
                 </div>

              </div>
        </div>
        <webFoot/>
    </div>
</template>

<script>
import webFoot from '@/Layout/footer';
export default {
    name: '',
    components: {webFoot},
    data() {
       return {

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

    }
}
</script>

<style lang='less' scoped>
    .page{
        height: 100%;
       background-color: #ffffff;

    }
    .page-cont{
        width: 1200px;
        margin: 0 auto;
        padding-top: 95px;
    }
    .pamet{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-bottom: 66px;
    }
   .nodeet{
       font-size: 36px;
       font-family: Alibaba;
       color: #D2A629;
       line-height: 24px;
       position: relative;
       width: 167px;
   }
   .dowet{
       font-size: 36px;
       font-family: Alibaba;
       color: #282828;
       line-height: 24px;
   }
    .imgket{
        top: -15px;
        width: 13px;
        right: 13px;
        border-left: 2px solid #D2A629;
        background-color: #fff;
        position: absolute;
        height: 60px;
        transform: rotate(26deg);
    }
    .tp-j{
        width: 973px;
        /* height: 20px; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #000;
        font-size: 12px;
        /* line-height: 20px; */
        position: relative;
        margin: 0 auto;
        margin-bottom: 60px;
    }
    .tp-j:after{
        content: "";
        width: 100%;
        height: 2px;
        background-color: #e6e6e6;
        position: absolute;
        bottom: 47%;
        z-index: 1;
        left: 0;
    }
    .tp-j span{
        z-index: 999;
        position: relative;
        background-color: #fff;
        padding: 0 18px;
        font-size: 30px;
        color: #D2A629;
    }
    .acoert{
        z-index: 22;
        width: 7px;
        height: 7px;
        background-color: #ffffff;
        border-radius: 9999px;
        border: 2px solid #D2A629;
    }
    .coanet-lkt{
        padding: 31px 20px 20px 15px;
        width: 570px;
        height: 320px;
        background: #FFFBEF;
    }
    .sowl-lt{
        width: 70px;
        height: 70px;
        float: left;
    }
    .mau-lrit{
        margin-left: 96px;
        padding-top: 16px;
    }
  .slwt-llt{
      font-size: 24px;
      color: #D2A62A;
      margin-bottom: 33px;
  }
  .aolst{
      font-size: 16px;
      color: #505050;
  }
    .liht{
        line-height: 28px;
    }

  .tolett{
      width: 450px;
      height: 264px;
      background: #FFFBEF;
      text-align: center;
      padding-top: 50px;
  }
  .wit-kir{


  }
    .wit-kir img{
      width: 99px;
      height: 109px;
    }

    .rleit{
        font-size: 30px;
        color: #D2A62A;
        margin-top: 36px;
    }
   .ldert{
       margin-top: 40px;
        text-align: center;
       font-size: 24px;
       color: #181717;
   }
</style>
