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
    >
      <dl style="padding-top: 20px">
        <dt class="IE6PNG">
          <div class="laodett" style="height: 100%">
            <a
              target="_blank"
              href=""
            >
              <div style="margin-top: 5px">
                <img
                  style="width: 34px"
                  src="../../assets/img/icon_kefu_1.png"
                />
              </div>
              <div style="font-size: 15px">
                {{ $t( 'text187' ) }}
              </div>
            </a>
          </div>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loginDialogVisible: false,
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
