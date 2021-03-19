<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="content">
          <div class="content_text fadeInRight">
            <div class="bget">
              <div>{{ $t( 'text103' ) }}</div>
              <div>{{ $t( 'text104' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text105' ) }}</div>
              <div>{{ $t( 'text106' ) }}</div>
            </div>
          </div>
          <div class="bloart fadeInLeft">
            <img
              class="content_img"
              src="@/assets/img/pic_dapp@2x.png"
              alt="bg-img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="content">
          <div>
            <div class="title-1">DApps</div>
            <div class="fc-img">
              <img src="../../assets/img/pic_dapp.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4">
      <div class="wrap">
        <div class="content">
          <div>
            <div class="title-1">{{ $t( 'text107' ) }}</div>
            <div class="coak">
              <div class="boet">
                <div class="wloet">
                  <img src="../../assets/img/icon_sxdapp@2x.png" />
                </div>
                <div class="title-2">{{ $t( 'text108' ) }}</div>
                <div :class="['dwkoer cursor-pointer slideUpBtn', $lang]">
                  <span>{{ $t( 'text109' ) }}</span>
                </div>
              </div>
              <div class="boet">
                <div class="wloet">
                  <img src="../../assets/img/icon_sxdapp@2x.png" />
                </div>
                <div class="title-2">{{ $t( 'text110' ) }}</div>
                <div class="title-3">{{ $t( 'text111' ) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {
      closeTrime: 14,
      timerNull: null,
      WindowHeight: 0,
      countToMrue: false,
      countToMrue1: false,
      BaseUrl: this.$BaseUrl,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},

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
        display: flex;
        justify-content: center;
        align-items: center;
        .content_img {
          width: 480px;
        }

        .content_text {
          color: #7b7b7b;
          font-size: 16px;
          width: 498px;
          text-align: right;
        }
        .bget {
          font-size: 50px;
          color: #272727;
          margin-bottom: 21px;
          letter-spacing: 4px;
        }
        .caosjet {
          width: 488px;
          font-size: 20px;
          color: #7b839a;
          line-height: 29px;
          margin-bottom: 19px;
          font-weight: 100;
        }
      }
    }
  }

  .project-2 {

background: linear-gradient(180deg, #F6FAFF 0%, #E5EFFF 100%);
    .wrap {
      .content {
        padding: 127px 0 153px 0;
        .content_text {
          width: 673px;
          text-align: left;
          padding-left: 57px;
          margin-right: 44px;
        }
      }
    }
  }

  .project-3 {
    padding-top: 142px;
    padding-bottom: 78px;
    .paddgint {
      margin-bottom: 131px;
    }
    .title-1 {
      text-align: center;
      color: #272727;
      font-size: 34px;
      margin-bottom: 79px;
    }
    .fc-img img {
      width: 955px;
    }
  }

  .project-4 {
    padding-top: 80px;
    padding-bottom: 196px;
    .paddgint {
      margin-bottom: 131px;
    }
    .title-1 {
      text-align: center;
      color: #272727;
      font-size: 34px;
      margin-bottom: 82px;
    }
    .title-2 {
      font-size: 30px;
      margin: 10px 0 18px 0;
    }
    .title-3 {
      font-size: 16px;
      color: #7b839aff;
    }
    .coak {
      display: flex;
    }
    .wloet img {
      width: 60px;
      height: 60px;
    }
    .boet {
      width: 590px;
      height: 240px;
      padding: 36px 0 34px 0;
      border: 1px solid #bacdff;
      text-align: center;
      transition: all 0.3s;
      &:nth-of-type(1) {
        margin-right: 20px;
      }
      &:hover {
        box-shadow: 4px 4px 12px 0px rgba(88, 133, 253, 0.18);
      }
    }
  }
}
/* TODO 其他语言 */
.slideUpBtn.zh::after  {
  content: "等待开通申请>>"
}
</style>
