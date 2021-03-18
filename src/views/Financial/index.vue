<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="content">
          <div class="content_text">
            <div class="bget">
              <div>{{ $t( 'text19' ) }}</div>
              <div>{{ $t( 'text20' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text43' ) }}</div>
              <div>
                {{ $t( 'text46' ) }}
              </div>
            </div>
          </div>
          <div class="bloart">
            <img class="content_img" src="@/assets/img/pic_lc@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-3">
      <div class="wrap">
        <div class="content">
          <div>
            <div class="qkeoert paddgint">
              <div class="billet">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_dqlc.png" /></div>
                  <div class="title-1">{{ $t( 'text47' ) }}</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text48' ) }}</div>
                    <div class="title-2">{{ $t( 'text49' ) }}</div>
                  </div>

                  <div :class="['rmot-button slideUpBtn', $lang]">
                    <span>{{ $t( 'text50' ) }}</span>
                  </div>
                </div>
              </div>
              <div class="billet" style="margin: 0 28px">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_hqlc.png" /></div>
                  <div class="title-1">{{ $t( 'text51' ) }}</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text52' ) }}</div>
                  </div>

                  <div :class="['rmot-button slideUpBtn', $lang]"><span>{{ $t( 'text50' ) }}</span></div>
                </div>
              </div>
              <div class="billet">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_staking.png" /></div>
                  <div class="title-1">Staking</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text53' ) }}</div>
                    <div class="title-2">{{ $t( 'text54' ) }}</div>
                  </div>
                  <div :class="['rmot-button slideUpBtn', $lang]"><span>{{ $t( 'text50' ) }}</span></div>
                </div>
              </div>
            </div>

            <div class="qkeoert">
              <div class="billet">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_ywk.png" /></div>
                  <div class="title-1">{{ $t( 'text55' ) }}</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text56' ) }}</div>
                    <div class="title-2">{{ $t( 'text57' ) }}</div>
                  </div>

                  <div :class="['rmot-button slideUpBtn', $lang]"><span>{{ $t( 'text50' ) }}</span></div>
                </div>
              </div>
              <div class="billet" style="margin: 0 28px">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_ytz.png" /></div>
                  <div class="title-1">{{ $t( 'text58' ) }}</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text59' ) }}</div>
                    <div class="title-2">{{ $t( 'text60' ) }}</div>
                  </div>

                  <div :class="['rmot-button slideUpBtn', $lang]"><span>{{ $t( 'text50' ) }}</span></div>
                </div>
              </div>
              <div class="billet">
                <div class="fitop">
                  <div><img src="../../assets/img/icon_ztg.png" /></div>
                  <div class="title-1">Staking</div>
                  <div class="wiiot">
                    <div class="title-2 title-pi">{{ $t( 'text61' ) }}</div>
                    <div class="title-2">{{ $t( 'text62' ) }}</div>
                  </div>
                  <div :class="['rmot-button slideUpBtn', $lang]" role="button"><span>{{ $t( 'text50' ) }}</span></div>
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
      },
      langType: this.$langType,
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
          margin-bottom: 21px;
          letter-spacing: 4px;
        }
        .caosjet {
          font-size: 20px;
          color: #272727;
          line-height: 34px;
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
        padding: 127px 0 157px 0;
        .content_text {
          width: 673px;
          text-align: left;
          margin-right: 44px;
        }
      }
    }
  }

  .project-3 {
    padding-top: 133px;
    padding-bottom: 147px;
    .paddgint {
      margin-bottom: 131px;
    }
    .qkeoert {
      display: flex;
      align-items: center;
      .billet {
        width: 371px;
        padding-bottom: 38px;
        text-align: center;
        border: 1px solid #bacdff;
        transition: all 0.3s;
        &:hover {
          box-shadow: 4px 4px 12px 0px rgba(88, 133, 253, 0.18);
        }
      }
      .rmot-button {
        line-height: 40px;
        min-width: 200px;
        font-size: 14px;
        font-weight: 300;
        height: 40px;
        color: #5885FD;
        text-align: center;
        // background-color: #5885fd;
        display: inline-block;
        padding: 0 61px;
        user-select: none;
        cursor: pointer;
      }
      .wiiot {
        min-height: 75px;
        margin-bottom: 10px;
        font-weight: 100;
      }
      .fitop {
        margin-top: -50px;
      }
      .title-1 {
        color: #272727ff;
        font-size: 30px;
        margin: 33px 0 9px 0;
      }
      .title-pi {
        margin-bottom: 6px;
      }
      .title-2 {
        color: #7b839aff;
        font-size: 14px;
      }
    }
  }
}
/* TODO 多语言*/
.slideUpBtn {
  &.zh::after {
    content: "等待上线"
  }
}
</style>
