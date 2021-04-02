<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="content">
          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text76' ) }}</div>
            </div>
            <div class="subtitle">
              <div>{{ $t( 'text77' ) }}
              </div>
            </div>
            <div :class="['bowerkonet', $lang]">
                <div class="cllot">{{ $t( 'text78' ) }}</div>
                <div class="cllot">{{ $t( 'text79' ) }}</div>
                <div class="cllot">{{ $t( 'text80' ) }}</div>
                <div class="cllot">{{ $t( 'text81' ) }}</div>
                <div class="cllot">{{ $t( 'text82' ) }}</div>
                <div class="cllot">{{ $t( 'text83' ) }}</div>
            </div>
          </div>
          <div class="bloart top-img">
            <img
              class="content_img content_img_top"
              src="@/assets/img/pic_yjqb@2x.png"
              alt="production-img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="content">

          <div class="bloart">
            <img
                class="content_img mln50"
                src="@/assets/img/pic_w_zlzc@2x.png"
                alt="production-img"
            />
          </div>
          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text90' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text91' ) }}</div>
              <div>{{ $t( 'text92' ) }}</div>
              <div>{{ $t( 'text93' ) }}</div>
              <div>{{ $t( 'text94' ) }}</div>
            </div>
            <div :class="['dwkoer-but cursor-pointer slideUpBtn', $lang]" role="button"><span>{{ $t( 'text89' ) }}</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4">
      <div class="wrap">
        <div class="content">
          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text84' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text85' ) }}</div>
              <div>{{ $t( 'text86' ) }}</div>
              <div>{{ $t( 'text87' ) }}</div>
              <div>{{ $t( 'text88' ) }}</div>
            </div>
            <div :class="['dwkoer-but cursor-pointer slideUpBtn', $lang]" role="button"><span>{{ $t( 'text89' ) }}</span></div>
          </div>
          <div class="bloart">
            <img
                class="content_img"
                src="@/assets/img/pic_w_lxwe@2x.png"
                alt="production-img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="content">
          <div class="bloart">
            <img
              class="content_img mln50"
              src="@/assets/img/pic_w_lxyj@2x.png"
              alt="production-img"
            />
          </div>

          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text201' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text95' ) }}</div>
              <div>{{ $t( 'text96' ) }}</div>
              <div>{{ $t( 'text97' ) }}</div>
              <div>{{ $t( 'text98' ) }}</div>
            </div>
           <div :class="['dwkoer-but cursor-pointer slideUpBtn', $lang]" role="button"><span>{{ $t( 'text89' ) }}</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4" style="margin-bottom: 114px">
      <div class="wrap">
        <div class="content">
          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text203' ) }}</div>
            </div>
            <div class="caosjet">
             <div>{{ $t( 'text99' ) }}</div>
             <div>{{ $t( 'text100' ) }}</div>
             <div>{{ $t( 'text101' ) }}</div>
             <div>{{ $t( 'text102' ) }}</div>
            </div>
            <div :class="['dwkoer-but cursor-pointer slideUpBtn', $lang]" role="button"><span>{{ $t( 'text89' ) }}</span></div>
          </div>

          <div class="bloart">
            <img
              class="content_img"
              src="@/assets/img/pic_w_aqbz@2x.png"
              alt="production-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  name: "",
  components: { countTo },
  data() {
    return {
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
      listQuery: {
        lang_type: this.$langType,
        page_no: 1,
        page_size: 3,
      },
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
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
      .content {
        padding: 182px 0 163px 0;
        position: relative;
        justify-content: space-between;
        display: flex;
        align-items: center;
        .content_img {
          width: 480px;
          height: 480px;
        }

        .content_img_top {
          width: 620px;
          height: 363px;
        }
        .content_text {
          color: #7b7b7b;
          font-size: 16px;
          text-align: right;
          padding-right: 50px;
        }
        .bget {
          font-size: 50px;
          color: #272727ff;
          margin-bottom: 20px;
          max-width: 600px;
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

background: linear-gradient(180deg, #F6FAFF 0%, #E5EFFF 100%);
    .wrap {
      .content {
        .content_text {
          text-align: left;
          padding-left: 63px;
          margin-right: 130px;
        }
        .bowerkonet {
          display: flex;
          flex-wrap: wrap;
          width: 520px;

          &.en,&.ru,&.ko,&.ar,&.ja {
            .cllot {
              width: auto;
              padding: 0 10px;
            }
          }
          .cllot {
            width: 131px;
            letter-spacing: 2px;
            margin: 0 20px 15px 0;
            font-size: 16px;
            text-align: center;
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
      .content {
        padding: 53px 0px 24px;
        .content_text {
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
        .mln100 {
          margin-left: -100px;
        }
      }
    }
  }

  .project-4 {
    .wrap {
      .content {
        padding: 12px 0px 20px;
        .content_text {
          flex: 1;
          text-align: left;
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
.slideUpBtn {
  &.zh::after {
    content: "即将发售"
  }
  &.en::after {
    content: "Coming soon"
  }
  &.ja::after {
    content: "間もなく発売します"
  }
  &.ko::after {
    content: "발매 직전"
  }
  &.ru::after {
    content: "Скоро продать"
  }
  &.ar::after {
    content: "سيطلق قريبًا"
  }
}
.subtitle {
  font-size: 20px;
  font-family: PingFangSC-Thin, PingFang SC;
  font-weight: 100;
  color: #272727;
  line-height: 36px;
  max-width: 430px;
  margin-bottom: 20px;
}
.top-img {
  position: absolute;
  z-index: 2;
  right: 25px;
  top: 141px;
}
.mln50 {
  margin-left: -50px;
}
</style>
