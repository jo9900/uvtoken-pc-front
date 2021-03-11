<template>
  <div class="">
    <div
      class="suspend"
      style="
        overflow: hidden;
        width: 82px;
        height: 79px;
        display: block;
        text-align: center;
      "
      v-if="langType == 'English'"
    >
      <dl>
        <dt class="IE6PNG">
          <div class="laodett">
            <!--tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=774276297-->
            <a
              target="_blank"
              :href="
                langType == 'English'
                  ? 'https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/2'
                  : 'https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/1'
              "
            >
              <div>
                <img
                  style="width: 34px"
                  src="../../assets/img/icon_kefu_1.png"
                />
              </div>
              <div style="font-size: 15px">
                {{ languageNav[langType].language_text1 }}
              </div>
            </a>
          </div>
        </dt>
      </dl>
    </div>

    <div
      class="suspend"
      style="
        overflow: hidden;
        width: 82px;
        height: 79px;
        display: block;
        text-align: center;
      "
      v-else
    >
      <dl style="padding-top: 20px">
        <dt class="IE6PNG">
          <div class="laodett" style="height: 100%">
            <a
              target="_blank"
              :href="
                langType == 'English'
                  ? 'https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/2'
                  : 'https://tb.53kf.com/code/client/9b4e57f4454eda27a911267c0001f9c13/1'
              "
            >
              <div style="margin-top: 5px">
                <img
                  style="width: 34px"
                  src="../../assets/img/icon_kefu_1.png"
                />
              </div>
              <div style="font-size: 15px">
                {{ languageNav[langType].language_text1 }}
              </div>
            </a>
          </div>
        </dt>
      </dl>
    </div>

    <!--<el-dialog :title="languageNav[langType].language_text18" :visible.sync="loginDialogVisible" width="400px" center :before-close="loginHandleClose">-->
    <!--<div class="" style="text-align: center;margin-top: -20px;margin-bottom: 10px"><img src="../../assets/logo.png" style="width:60px;margin: 0 auto"/></div>-->
    <!--<div class="contt-text">-->
    <!--<div class="" style="text-align: center; text-align: center;-->
    <!--font-size: 26px;-->
    <!--color: #2d2b2b;">TAFChain {{languageNav[langType].language_text3}}</div>-->
    <!--<div class="">QQ：2461055419</div>-->
    <!--<div><img src="../../assets/img/wactImg.jpg"/></div>-->
    <!--<div>{{languageNav[langType].language_text4}}</div>-->
    <!--</div>-->
    <!--<span slot="footer" class="dialog-footer"></span>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
import languageNav from "@/language/nav";
export default {
  name: "index",
  data() {
    return {
      loginDialogVisible: false,
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  methods: {
    aClick() {
      this.loginDialogVisible = true;
    },
  },
};
</script>


<style scoped>
.suspend {
  width: 40px;
  position: fixed;
  bottom: 9px;
  right: 17px;
  overflow: hidden;
  z-index: 999;
  border-radius: 4px;
  background: linear-gradient(180deg, #c58c0d 0%, #e8cb55 100%);
  box-shadow: #909399 0px 0px 5px;
}
.suspend dl {
  height: 100%;

  border-radius: 25px 0 0 25px;
}
.suspend dl dt {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.suspend dl dd.suspendQQ {
  width: 120px;
  height: 85px;
  background: #ffffff;
}
.suspend dl dd.suspendQQ a {
  width: 120px;
  height: 85px;
  display: block;
  /*background:url(images/suspend.png) -40px 0;*/
  overflow: hidden;
}
.suspend dl dd.suspendTel {
  width: 120px;
  height: 112px;
  background: #ffffff;
  border-top: 1px solid #e4e8ec;
}
.suspend dl dd.suspendTel a {
  width: 120px;
  height: 112px;
  display: block;
  /*background:url(images/suspend.png)  -40px -86px;*/
  overflow: hidden;
}
.laodett a {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 19px;
  display: block;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.contt-text {
  text-align: center;
}
* html .suspend {
  position: absolute;
  left: expression(eval(document.documentElement.scrollRight));
  top: expression(eval(document.documentElement.scrollTop + 200));
}
</style>
