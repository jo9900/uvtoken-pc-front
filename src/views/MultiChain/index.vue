<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="content">
          <div class="content_text">
            <div class="bget">
              <div>Uvswap</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text63' ) }}</div>
              <div>{{ $t( 'text64' ) }}</div>
            </div>
            <div :class="['dwkoer cursor-pointer slideUpBtn', $lang]" role="button">
              <span>{{ $t( 'text65' ) }}</span>
            </div>
          </div>
          <div class="bloart">
            <img
              class="content_img"
              src="@/assets/img/pic_lxyj@2x.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="content">
          <div class="scoplert">
            <div class="title-1">{{ $t( 'text66' ) }}</div>
            <div class="title-2">
              {{ $t( 'text67' ) }}
            </div>
            <div>
              <div class="zarll">
                <div class="zllp">
                  <div class="zllp-img">
                    <img src="../../assets/img/pic_jsgx@2x.png" />
                  </div>
                  <div>
                    <div class="title-3">{{ $t( 'text68' ) }}</div>
                    <div class="title-4">
                      {{ $t( 'text69' ) }}
                    </div>
                    <div class="title-4">
                      {{ $t( 'text199' ) }}
                    </div>
                  </div>
                </div>
                <div class="zllp">
                  <div class="zllp-img">
                    <img src="../../assets/img/pic_wgas@2x.png" />
                  </div>
                  <div>
                    <div class="title-3">{{ $t( 'text70' ) }}</div>
                    <div class="title-4">
                      {{ $t( 'text71' ) }}
                    </div>
                    <div class="title-4">
                      {{ $t( 'text200' ) }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="zarll">
                <div class="zllp">
                  <div class="zllp-img">
                    <img src="../../assets/img/pic_gxldx@2x.png" />
                  </div>
                  <div>
                    <div class="title-3">{{ $t( 'text72' ) }}</div>
                    <div class="title-4">
                      {{ $t( 'text73' ) }}
                    </div>
                  </div>
                </div>
                <div class="zllp">
                  <div class="zllp-img">
                    <img src="../../assets/img/pic_wqls@2x.png" />
                  </div>
                  <div>
                    <div class="title-3">{{ $t( 'text74' ) }}</div>
                    <div class="title-4">
                      {{ $t( 'text75' ) }}
                    </div>
                    <div class="title-4">
                      {{ $t( 'text202' ) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/components/footer";
export default {
  name: "",
  components: { webFoot },
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
      }
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
          color: #272727ff;
          margin-bottom: 15px;
        }
        .caosjet {
          font-size: 20px;
          color: #7b839aff;
          line-height: 29px;
          margin-bottom: 19px;
          font-weight: 100
        }
      }
    }
  }

  .project-2 {
    
  background: linear-gradient(180deg, #F6FAFF 0%, #E5EFFF 100%);
    .wrap {
      .content {
        .content_text {
          width: 673px;
          text-align: left;
          padding-left: 57px;
        }
      }
    }
  }

  .project-3 {
    padding-top: 133px;
    padding-bottom: 147px;
    .scoplert {
      width: 90%;
      text-align: center;
      .title-1 {
        color: #272727;
        font-size: 34px;
        margin-bottom: 9px;
      }
      .title-2 {
        margin: 0 auto;
        color: #7b839a;
        font-size: 20px;
        margin-bottom: 82px;
        font-weight: 100;
      }
    }
    .zarll {
      display: flex;
      margin-bottom: 74px;
    }
    .zllp {
      width: 50%;
      text-align: center;
    }
    .zllp-img img {
      width: 200px;
    }
    .title-3 {
      color: #4C546A;
      font-size: 20px;
      margin: 12px 0 10px 0;
    }
    .title-4 {
      color: #7b839a;
      font-size: 14px;
      font-weight: 100;
    }
  }
}
.slideUpBtn.zh::after {
  content: "即将上线"
}
</style>
