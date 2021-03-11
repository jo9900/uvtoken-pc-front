<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="contetnt">
          <div class="contetnt_text wow fadeInRight">
            <div class="bget">
              <div>加密资产安全保障</div>
            </div>
            <div class="caosjet">
              <div>
                通向财富自由之路的最佳守护神，无论身处何地 始终受到极致保护
              </div>
            </div>
            <div class="">
              <div class="bowerkonet">
                <div class="cllot">冷热分离</div>
                <div class="cllot" style="margin: 0 15px">多样化产品</div>
                <div class="cllot">军工级品质</div>
              </div>
              <div class="bowerkonet">
                <div class="cllot">支持主流公链</div>
                <div class="cllot" style="margin: 0 15px">EAL6+芯片</div>
                <div class="cllot">多种加密算法</div>
              </div>
            </div>
          </div>
          <div class="bloart wow fadeInLeft">
            <img
              class="contetnt_img contetnt_img_top"
              src="@/assets/img/pic_yjqb@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="contetnt">
          <div class="bloart wow fadeInLeft">
            <img
              class="contetnt_img"
              src="@/assets/img/pic_zlzc@2x (1).png"
              alt=""
            />
          </div>

          <div class="contetnt_text wow fadeInRight">
            <div class="bget">
              <div>坚盾PRO MAX</div>
            </div>
            <div class="caosjet">
              <div>超大屏触摸使用，精致好用防误操作</div>
              <div>二维码通讯，永不触网，避免数据传输风险</div>
              <div>拆机自毁，防暴力破解机制杜绝被盗隐患</div>
              <div>指纹授权交易，无惧多人场景</div>
            </div>
            <div class="dwkoer-but cursor-pointer" role="button">即将发售</div>
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4">
      <div class="wrap">
        <div class="contetnt">
          <div class="contetnt_text wow fadeInRight">
            <div class="bget">
              <div>坚盾PRO</div>
            </div>
            <div class="caosjet">
              <div>离线存储私钥，永不触网，避免私钥被盗</div>
              <div>支持蓝牙5.0传输</div>
              <div>金属机身，军攻击做工有效抵防摔</div>
              <div>与钱包配合更加高效使</div>
            </div>
            <div class="dwkoer-but cursor-pointer" role="button">即将发售</div>
          </div>

          <div class="bloart wow fadeInLeft">
            <img
              class="contetnt_img"
              src="@/assets/img/pic_lxyjjt@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="contetnt">
          <div class="bloart wow fadeInLeft">
            <img
              class="contetnt_img"
              src="@/assets/img/pic_lxyjxad@2x.png"
              alt=""
            />
          </div>

          <div class="contetnt_text wow fadeInRight">
            <div class="bget">
              <div>U-Watch</div>
            </div>
            <div class="caosjet">
              <div>精心打造小巧轻便，手腕完美契合，兼顾日常</div>
              <div>IP68 防水防尘防摔“3防”设计，无惧风雨</div>
              <div>超长待机，免去反复充电烦恼</div>
              <div>纳米级亲肤材料，舒适美观上档次</div>
            </div>
            <div class="dwkoer-but cursor-pointer" role="button">即将发售</div>
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4" style="margin-bottom: 114px">
      <div class="wrap">
        <div class="contetnt">
          <div class="contetnt_text wow fadeInRight">
            <div class="bget">
              <div>U-Touch</div>
            </div>
            <div class="caosjet">
              <div>卡片式设计，轻松放入钱包</div>
              <div>支持IOS、Android双系统</div>
              <div>PIN码保护私钥不泄露</div>
              <div>数字资产线下支付，NFC一触即发</div>
            </div>
            <div class="dwkoer-but cursor-pointer" role="button" >即将发售</div>
          </div>

          <div class="bloart wow fadeInLeft">
            <img
              class="contetnt_img"
              src="@/assets/img/pic_aqbzxz@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <webFoot />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import webFoot from "@/components/footer";
import { digest } from "@/request/news";
import languageNav from "@/language/index";
import countTo from "vue-count-to";

export default {
  name: "",
  components: { webFoot, countTo },
  data() {
    return {
      NODE_ENV: process.env.NODE_ENV,
      closeTrime: 14,
      timerNull: null,
      WindowHeight: 0,
      countToMrue: false,
      countToMrue1: false,
      BaseUrl: this.$BaseUrl,
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      option6: false,
      option7: false,
      option8: false,
      class0: false,
      class1: false,
      class2: false,
      jgShow1: false,
      jgShow2: false,
      jgShow3: false,
      isAlertTrue: false,
      isFhows: false,
      list: [
        {
          code: "",
          title: "TAF Chain和以太坊2.0谁将开启新一轮牛市",
          publish_date: "2020-11-12",
          digest:
            "截至11月11日，已有超5万枚ETH打入以太坊2.0存款合约地址，以太坊2.0进入创世启动阶段，启动进度完成10%。同时区块链3.0的代表TAFT完成了第一阶段的私募发售。仅用时26天第一阶段预售就已售罄。由此可见投资者对区块链3.0的期待和认可。2021年TAF Chain公链和以太坊2.0公链都将问世，届时将会是顶尖区块链技术的对垒，也是一场科技的盛宴。",
        },
        {
          code: "",
          title: "区块链技术如何变革供应链金融",
          publish_date: "2020-10-02",
          digest:
            "尽管长期以来区块链的应用重点一直被放在支付和证券领域，但一个重要，且仍被低估的用例是供应链金融。目前，情况已在发生改变。现有供应链财务解决方案的复杂性和规模，在确保充足的资金和高效的运营方面提出了重大挑战。区块链技术有可能改变供应链金融的游戏规则。",
        },
        {
          code: "",
          title: "企业链改三原则：简化，连接，交易",
          publish_date: "2020-10-02",
          digest:
            "按照大多数技术的标准，区块链仍应处于起步阶段。例如，现代计算机已经存在了80多年，云计算尽管自1996年以来就已存在，但它在许多行业领域仍属于努力获得市场份额阶段。",
        },
      ],
      listQuery: {
        lang_type: this.$langType,
        page_no: 1,
        page_size: 3,
      },
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    get_list() {
      digest(this.listQuery).then((res) => {
        this.list = res.data.news;
      });
    },
    slkowet() {
      this.$router.push({
        path: "/newsDetail",
        query: { code: this.list[0].code },
      });
    },
    getsolltop() {
      console.log(document.body.scrollTop);
    },
    colsepl() {
      this.isAlertTrue = false;
      this.$store.commit("TRIM", true);
    },
    timer() {
      if (this.closeTrime > 0) {
        this.closeTrime--;
        this.timerNull = setTimeout(this.timer, 1000);
      } else {
        clearTimeout(this.timerNull);
        this.closeTrime = 0;
        this.isAlertTrue = false;
        this.$store.commit("TRIM", true);
      }
    },
    mosuseenterFun() {
      this.isFhows = true;
    },
    mouseleaveFun() {
      this.isFhows = false;
    },
  },
  created() {
    if (!this.$store.state.timerCoander) {
      this.isAlertTrue = true;
      this.timer();
    }

    // this.get_list()
  },

  mounted() {
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
  },
};
</script>

<style lang='less' scoped>
.wrap {
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
        padding: 182px 0 163px 0;
        .contetnt_img {
          width: 480px;
          height: 480px;
        }

        .contetnt_img_top {
          width: 476px;
          height: 266px;
        }
        .contetnt_text {
          color: #7b7b7b;
          font-size: 16px;

          text-align: right;
        }
        .bget {
          font-size: 50px;
          color: #272727ff;
          margin-bottom: 20px;
        }
        .caosjet {
          font-size: 20px;
          color: #7b839aff;
          line-height: 29px;
          margin-bottom: 20px;
          font-weight: 100;
        }
      }
    }
  }

  .project-2 {
    background: #f8fbff;
    .wrap {
      .contetnt {
        .contetnt_text {
          text-align: left;
          padding-left: 63px;
          margin-right: 130px;
        }
        .bowerkonet {
          display: flex;
          margin-bottom: 14px;
          .cllot {
            letter-spacing: 2px;
            font-size: 16px;
            padding: 0 25px;
            line-height: 35px;
            height: 35px;
            border-radius: 18px;
            border: 1px solid #272727;
            font-weight: 100;
            color: #272727;
          }
        }
      }
    }
  }
  .project-3 {
    .wrap {
      .contetnt {
        padding: 53px 0px 24px;
        .contetnt_text {
          width: 586px;
          text-align: right;
          padding-left: 83px;
        }
        .bget {
          font-size: 34px;
        }
        .caosjet {
          font-size: 18px;
        }
      }
    }
  }

  .project-4 {
    .wrap {
      .contetnt {
        padding: 12px 0px 20px;
        .contetnt_text {
          flex: 1;
          text-align: left;
          padding-left: 141px;
          margin-right: 158px;
        }

        .bget {
          font-size: 34px;
        }
        .caosjet {
          font-size: 18px;
        }
      }
    }
  }
}
.dwkoer-but:hover {
  transition: all ease .3s;
  box-shadow: 0px 7px 15px -5px #5885fd;
}
</style>
