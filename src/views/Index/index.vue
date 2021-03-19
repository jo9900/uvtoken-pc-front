<!-- -->
<template>
  <div class="page">
    <div
      class="content-muner"
      style="position: relative"
      :style="{ 'min-height': '900px' }"
    >
      <div class="stars"></div>
      <div class="banner-wrap">
        <div class="flex1">
          <div>
            <div class="banner-title">
              <p>{{ $t('text10') }}</p>
            </div>
          </div>
          <div class="banner-subtitle">{{ $t( 'text11' ) }}</div>
          <div>
            <div class="banner-btns-wrap">
              <a
                class="banner-btn"
                target="_blank"
                :href="
                  NODE_ENV !== 'production'
                    ? 'http://apps.apple.com/us/app/UvToken/id1552556395'
                    : 'https://apps.apple.com/us/app/UvToken/id1552556395'
                "
                style="margin-right: 15px"
              >
                <div class="banner-btn-content">
                  <div class="banner-btns-icon">
                    <img src="../../assets/img/icon_apple@2x.png" />
                  </div>
                  <div class="banner-btns-text" role="button">App store</div>
                </div>
              </a>
              <a
                class="banner-btn"
                :href="
                  NODE_ENV !== 'production'
                    ? 'http://wallet.uvtoken.com/static/download/android/uvtoken.apk'
                    : 'https://wallet.uvtoken.com/static/download/android/uvtoken.apk'
                "
              >
                <div class="banner-btn-content">
                  <div class="banner-btns-icon">
                    <img src="../../assets/img/icon_android@2x.png" />
                  </div>
                  <div class="banner-btns-text" role="button">Android APK</div>
                </div>
              </a>
              <a href="javascript:;" class="banner-btn-qrcode">
                <el-dropdown placement="bottom" style="width: 74px;">
                  <div class="qrcode-small">
                    <img src="@/assets/img/robge.png" />
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <div class="qrcode-img">
                      <img src="@/assets/img/dowemoey.png" />
                    </div>
                  </el-dropdown-menu>
                </el-dropdown>
              </a>
            </div>
          </div>
        </div>
        <div class="flex1">
          <img src="@/assets/img/pic_phone.png" />
        </div>
      </div>
    </div>

    <section class="project" ref="wrap1">
      <div class="wrap">
        <div class="content">
          <div class="section-img-wrap">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__slideInLeft"
            >
                <img
                    v-show="scrollAnimateEL.wrap1"
                    class="content_img"
                    src="@/assets/img/pic_zlzc@2x.png"
                    alt="img"
                />
            </transition>
          </div>

          <div class="content_text ">
            <div class="bget">
              <div>{{ $t( 'text12' ) }}</div>
              <div>{{ $t( 'text13' ) }}</div>
            </div>
            <div class="caosjet" style="width:600px">
              {{ $t( 'text14' ) }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project project-2" ref="wrap2">
      <div class="wrap">
        <div class="content">
          <div class="content_text ">
            <div class="bget">
              <div>{{ $t( 'text15' ) }}</div>
              <div>{{ $t( 'text16' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text17' ) }}</div>
              <div>{{ $t( 'text18' ) }}</div>
            </div>
          </div>
          <div class="section-img-wrap">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__slideInRight"
            >
              <img
                  v-show="scrollAnimateEL.wrap2"
                  class="content_img"
                  src="@/assets/img/pic_lxyj@2x.png"
                  alt=""
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="project" ref="wrap3">
      <div class="wrap">
        <div class="content">
          <div class="section-img-wrap">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__slideInLeft"
            >
              <img
                  v-show="scrollAnimateEL.wrap3"
                  class="content_img"
                  src="@/assets/img/pic_lxyjg@2x.png"
                  alt=""
              />
            </transition>
          </div>

          <div class="content_text ">
            <div class="bget">
              <div>{{ $t( 'text19' ) }}</div>
              <div>{{ $t( 'text20' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text43' ) }}</div>
              <div>{{ $t( 'text44' ) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project project-2" ref="wrap4">
      <div class="wrap">
        <div class="content">
          <div class="content_text ">
            <div class="bget">
              <div>{{ $t( 'text21' ) }}</div>
              <div>{{ $t( 'text22' ) }}</div>
            </div>
            <div class="caosjet">
              <div>{{ $t( 'text23' ) }}</div>
              <div>{{ $t( 'text24' ) }}</div>
            </div>
          </div>
          <div class="section-img-wrap">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__slideInRight"
            >
              <img
                  v-show="scrollAnimateEL.wrap4"
                  class="content_img"
                  src="@/assets/img/pic_aqbz@2x.png"
                  alt=""
              />
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="project project-3" ref="wrap5">
      <div class="wrap">
        <div class="scoplert">
          <div>
            <div class="title-1">{{ $t( 'text25' ) }}</div>
            <div class="title-2">
              <div>{{ $t( 'text26' ) }}</div>
              <div>{{ $t( 'text27' ) }}</div>
            </div>
            <div>
              <transition
                  mode="out-in"
                  enter-active-class="animate__animated animate__slideInUp"
              >
                <img
                    v-show="scrollAnimateEL.wrap5"
                    class="content_img"
                    src="@/assets/img/pic_dapp.png"
                    alt=""
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project project-3 project-4" ref="wrap6">
      <div class="wrap">
        <div class="scoplert">
          <div>
            <div class="title-1">{{ $t( 'text28' ) }}</div>
            <div class="title-3">
              {{ $t( 'text29' ) }}
            </div>
            <div>
              <transition
                  mode="out-in"
                  enter-active-class="animate__animated animate__slideInUp"
              >
                <img
                    v-show="scrollAnimateEL.wrap6"
                    class="content_img"
                    src="@/assets/img/pic_yjqb.png"
                    alt=""
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import MixinScrollAnimate from "@/mixin/scroll.js"
export default {
  name: "",
  components: { countTo },
  mixins: [MixinScrollAnimate],
  data() {
    return {
      // TODO 产品：先取消动效
      scrollAnimateEL: {
        wrap1: true,
        wrap2: true,
        wrap3: true,
        wrap4: true,
        wrap5: true,
        wrap6: true
      },
      listenHandlerScroll: undefined,
      NODE_ENV: process.env.NODE_ENV,
      closeTrime: 14,
      timerNull: null,
      WindowHeight: 0,
      countToMrue: false,
      countToMrue1: false,
      BaseUrl: this.$BaseUrl,
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
    initBanner() {
      let stars=800;  /*星星的密集程度，数字越大越多*/
      let $stars= document.querySelector('.stars');
      let r=600;   /*星星的看起来的距离,值越大越远*/
      for ( let i = 0 ; i < stars; i++) {
        let s = 0.2 + ( Math.random()*0.8 );
        let curR = r + ( Math.random()*300 );
        let style1 =`transform-origin:0 0 ${curR}px;`
        let style2 =`transform: translate3d(0,0,-${curR}px) rotateY(${Math.random()*360}deg) rotateX(${Math.random()*-50}deg) scale(${s},${s})`

        let style = `<div class="star" style="${style1}${style2}"></div>`
        let container =  document.createElement("div");
        container.innerHTML = style
        $stars.appendChild(container.firstElementChild)
      }
    },

  },
  created() {},
  mounted() {
    this.initBanner()
  }
};
</script>

<style lang='less' scoped>
.wrap {
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
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        justify-content: space-between;
        align-items: center;
        .content_img {
          width: 480px;
        }

        .content_text {
          color: #7b7b7b;
          font-size: 16px;
          // width: 498px;
          text-align: right;
        }
        .bget {
          font-size: 34px;
          color: #272727ff;
          margin-bottom: 15px;
        }
        .caosjet {
          font-size: 18px;
          color: #7b839aff;
          line-height: 29px;
          font-weight: 100;
        }
      }
    }
  }

  .project-2 {
    .wrap {
      .content {
        .content_text {
          // width: 617px;
          text-align: left;
          padding-left: 36px;
        }
      }
    }
  }

  .project-3 {

  background: linear-gradient(180deg, #F6FAFF 0%, #E5EFFF 100%);

    padding-top: 133px;
    padding-bottom: 147px;
    .scoplert {
      text-align: center;
      display: flex;
      justify-content: center;
      .title-1 {
        color: #272727;
        font-size: 34px;
        margin-bottom: 23px;
      }
      .title-2 {
        margin: 0 auto;
        width: 465px;
        line-height: 26px;
        color: #7b839a;
        font-size: 18px;
        margin-bottom: 54px;
        font-weight: 100;
      }
    }
  }

  .project-4 {
    background: #fff;
    .title-3 {
      margin: 0 auto;
      line-height: 26px;
      color: #7b839a;
      font-size: 18px;
      margin-bottom: 87px;
      font-weight: 100;
    }
  }
}

.zspt {
  position: relative;
  overflow: hidden;
}
.bg-trime {
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  padding: 5px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 14px;
}
.jg_flex {
  display: flex;
  justify-content: center;
  margin-bottom: 51px;
}
.jg-mrt {
  margin-left: 40px;
}
.jg-logo {
  margin-bottom: 20px;
}
.jg-context {
  color: #605c5c;
  line-height: 23px;
  text-align: left;
  font-size: 14px;
  /*display: -webkit-box;*/
  /*-webkit-box-orient: vertical;*/
  /*-webkit-line-clamp: 12;*/
  /*overflow: hidden;*/
}
.asowt {
  width: 287px;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  margin-top: 47px;
  background-size: cover;
  background: url("../../assets/img/bg-bon.png") no-repeat;
}
.posuRoert {
  position: absolute;
  top: 163px;
  width: 100%;
}
.posuRoert img {
  margin: 0 auto;
  width: 83px;
}

.banereot {
  background: linear-gradient(180deg, #006ddd 0%, #02285b 100%);
}
.slRowet {
  margin-bottom: 49px;
}

.downBook a {
  padding: 15px 67px;
  background-color: #e6a640;
  font-size: 20px;
}

.downBook a:hover {
  background-color: #ffbb44;
}
.content-muner {
  background: url("../../assets/img/baground-mob.png") center center no-repeat;
  overflow: hidden;
}
.banner-wrap {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 57px;
}
.banner-title {
  font-size: 50px;
  color: #fff;
  line-height: 61px;
  margin-bottom: 38px;
}
.banner-subtitle {
  font-size: 20px;
  font-weight: 100;
  color: #fff;
  margin-bottom: 29px;
}

.flex1 {
  flex: 1;
}
.banner-btns-wrap {
  display: flex;
}
.banner-btn {
  display: block;
  width: 130px;
  height: 40px;
  background: #ffffff;
  border-radius: 3px;
}
.banner-btn-content {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  &:hover {
    transition: all ease .3s;
    box-shadow: 0px 7px 15px -5px rgba(0, 0, 0, 0.3);
  }
}
.banner-btns-text {
  font-size: 14px;
  margin-left: 6px;
  color: #5885fdff;
}
.banner-btns-icon {
  margin-top: -5px;
}
.banner-btns-icon img {
  width: 20px;
}
.particles {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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
  background: rgba(255, 255, 255, 0.15);
  bottom: -180px;
  -webkit-animation: square 30s infinite;
  animation: square 30s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-1500px) rotate(600deg);
    transform: translateY(-1500px) rotate(600deg);
  }
}

@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-1500px) rotate(600deg);
    transform: translateY(-1500px) rotate(600deg);
  }
}

.platform_advantage_bg li:nth-child(1) {
  left: 10%;
}

.platform_advantage_bg li:nth-child(2) {
  left: 20%;
  width: 50px;
  height: 50px;
  -webkit-animation-delay: 1000ms;
  animation-delay: 1000ms;
  -webkit-animation-duration: 25s;
  animation-duration: 25s;
}

.platform_advantage_bg li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 400ms;
  animation-delay: 400ms;
}

.platform_advantage_bg li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
  animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}

.platform_advantage_bg li:nth-child(5),
.platform_advantage_bg_z li:nth-child(5) {
  left: 70%;
}

.platform_advantage_bg li:nth-child(6) {
  left: 80%;
  width: 40px;
  height: 40px;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}

.platform_advantage_bg li:nth-child(7) {
  left: 32%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}

.platform_advantage_bg li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
}

.platform_advantage_bg li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}

.platform_advantage_bg li:nth-child(10) {
  left: 90%;
  width: 70px;
  height: 70px;
  -webkit-animation-delay: 11s;
  animation-delay: 11s;
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

.boxCoent {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  z-index: 99999;
}
.boxAlert {
  margin: 0 auto;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.lseot {
  width: 900px;
  height: 500px;
  margin: 0 auto;
  position: relative;
}

.gplor img {
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
.alertColse {
  margin-left: 8px;
  font-size: 22px;
  cursor: pointer;
}
.qrcode-small {
  margin-left: 15px;
}
.qrcode-small img {
  width: 40px;
  height: 40px;
}
.banner-btn-qrcode {
  position: relative;
}

.qrcode-img img {
  width: 172px;
  height: 174px;
  margin: 0 10px;
}
.pad20 {
  padding-top: 30px;
}
</style>
