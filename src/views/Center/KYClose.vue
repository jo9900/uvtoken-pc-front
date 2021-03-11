
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          languageNav[langType].language_text1
        }}</router-link>
        > {{ languageNav[langType].language_text26 }}
      </div>
      <div class="page_content">
        <div class="name">KYC</div>
        <img class="KYC_logo" src="@/assets/img/KYC_logo.png" alt="" />
        <div class="status">{{ languageNav[langType].language_text27 }}</div>
        <div class="describe">{{ userInfo.kyc_remark }}</div>
        <div class="again_btn" @click="againApply">
          {{ languageNav[langType].language_text28 }}
        </div>
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { userInfo } from "@/request/user.js";
import languageNav from "@/language/coander";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      userInfo: {},
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getUserInfo() {
      let params = {
        code: localStorage.getItem("code"),
      };
      userInfo(params).then((res) => {
        if (res.code == 0) {
          this.userInfo = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    // 重新申请
    againApply() {
      this.$router.push({ name: "KYCapply", query: { type: 1 } });
    },
  },
  created() {
    this.getUserInfo();
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  // height: 100%;
  box-sizing: border-box;
  .wrap {
    // height: 100%;
    .page_indicator {
      margin-top: 20px;
      height: 60px;
      line-height: 60px;
      color: #333333;
      font-size: 16px;
      padding: 0 30px;
      background: #ffffff;
    }
    .page_content {
      margin: 20px 0 100px;
      padding: 38px;
      height: 800px;
      background: #ffffff;
      text-align: center;
      .name {
        color: #d2a629;
        font-size: 36px;
      }
      .KYC_logo {
        width: 82px;
        height: 84px;
        margin: 20px auto 0;
      }
      .status {
        font-size: 28px;
        color: #0e0e0e;
        margin: 20px auto 0;
      }
      .describe {
        width: 800px;
        margin: 30px auto 0;
        color: #333333;
        font-size: 16px;
      }
      .again_btn {
        cursor: pointer;
        margin: 80px auto 0;
        width: 240px;
        height: 48px;
        color: #fffffe;
        font-size: 16px;
        line-height: 48px;
        border-radius: 6px;
        background: linear-gradient(to right, #efcf54, #bf8d08);
      }
    }
  }
}
</style>

