
<!-- -->
<template>
  <div class="page">
    <div class="card">
      <div class="page_hint colorD2A629">
        <img src="@/assets/img/center_hint.png" alt="" />
        {{ languageNav[langType].language_text0 }}
      </div>
      <div class="user_info_box">
        <div class="user_info">
          <div class="user_photo">
            <img src="@/assets/img/center_photo.png" alt="" />
          </div>
          <div class="user_about">
            <div class="about_row">
              <p class="title">{{ languageNav[langType].language_text1 }}</p>
              <p
                class="colorD2A629"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="langType == 'English'">
                  {{
                    userInfo.kyc_status == 1
                      ? userInfo.last_name + " · " + userInfo.first_name
                      : languageNav[langType].language_text4
                  }}
                </template>
                <template v-else>
                  {{
                    userInfo.kyc_status == 1
                      ? userInfo.first_name + userInfo.last_name
                      : languageNav[langType].language_text4
                  }}
                </template>
              </p>
            </div>

            <div class="about_row">
              <p class="title">{{ languageNav[langType].language_text2 }}</p>

              <p
                class="colorD2A629"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="userInfo.kyc_status == 1">
                  {{
                    langType == "Chinese"
                      ? userInfo.country_name
                      : userInfo.country_name_en
                  }}
                </template>
                <template v-else>{{
                  languageNav[langType].language_text4
                }}</template>
              </p>
            </div>
          </div>
        </div>

        <div class="attest">
          <template v-if="userInfo.kyc_status == 0">
            <div class="title colorD2A629">
              {{ languageNav[langType].language_text3 }}
              <div class="center_targe status0">
                {{ languageNav[langType].language_text4 }}
              </div>
            </div>
            <div class="info">{{ languageNav[langType].language_text24 }}</div>
            <div class="info">
              {{ languageNav[langType].language_text25 }}
              <span class="colorD2A629" @click="toApply"
                >{{ languageNav[langType].language_text5 }} >
              </span>
            </div>
          </template>
          <template v-if="userInfo.kyc_status == 1">
            <div class="title colorD2A629">
              {{ languageNav[langType].language_text3 }}
              <div class="center_targe status1">
                {{ languageNav[langType].language_text6 }}
              </div>
            </div>
            <div class="info">{{ languageNav[langType].language_text26 }}</div>
          </template>
          <template v-if="userInfo.kyc_status == 2">
            <div class="title colorD2A629">
              {{ languageNav[langType].language_text3 }}
              <div class="center_targe status2">
                {{ languageNav[langType].language_text7 }}
              </div>
            </div>
            <div class="info">{{ languageNav[langType].language_text27 }}</div>
          </template>
          <template v-if="userInfo.kyc_status == 3">
            <div class="title colorD2A629">
              {{ languageNav[langType].language_text3 }}
              <div class="center_targe status3">
                {{ languageNav[langType].language_text8 }}
              </div>
            </div>
            <div class="info">{{ languageNav[langType].language_text28 }}</div>
            <div class="info">
              <span
                class="colorD2A629 rkot"
                @click="lookUp"
                style="margin: 0"
                >{{ languageNav[langType].language_text9 }}</span
              >
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card_title">{{ languageNav[langType].language_text10 }}</div>
      <div class="cart_box">
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ languageNav[langType].language_text14 }}</span>
            <span
              class="colorD2A629"
              @click="toApplyBuylog"
              style="cursor: pointer"
              >{{ languageNav[langType].language_text11 }}</span
            >
          </div>
          <div class="margintop40 colorD2A629">
            {{ myPreSale.apply_usdt_amount ? myPreSale.apply_usdt_amount : 0 }}
            USDT
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ languageNav[langType].language_text15 }}</span>
            <span class="colorD2A629" style="cursor: pointer" @click="sofert">{{
              languageNav[langType].language_text133
            }}</span>
          </div>
          <div class="margintop40 colorD2A629">
            {{ myPreSale.apply_taft_amount ? myPreSale.apply_taft_amount : 0 }}
            TAFT
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card_title">{{ languageNav[langType].language_text13 }}</div>
      <div class="cart_box">
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ languageNav[langType].language_text16 }}</span>
            <span
              class="colorD2A629"
              @click="toRebatelog"
              style="cursor: pointer"
              >{{ languageNav[langType].language_text11 }}</span
            >
          </div>
          <div class="margintop60 colorD2A629">
            {{ marketing.rebate_amount ? marketing.rebate_amount : 0 }} USDT
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ languageNav[langType].language_text17 }}</span>
            <span
              class="colorD2A629"
              @click="toExtendLog"
              style="cursor: pointer"
              >{{ languageNav[langType].language_text11 }}</span
            >
          </div>
          <div class="margintop60 colorD2A629">
            {{ marketing.invite_count }}
            {{ languageNav[langType].language_text12 }}
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ languageNav[langType].language_text18 }}</span>
          </div>
          <div class="">
            <template v-if="myPreSale.apply_usdt_amount > 0">
              <div class="extend">
                <div class="text" id="invite_code">
                  {{ marketing.invite_code }}
                </div>
                <div class="tag" @click="copy(marketing.invite_code)">
                  <img src="@/assets/img/center_file.png" alt="" />
                </div>
              </div>
              <div class="extend" style="padding-left: 0px; border: none">
                <el-input
                  class="text"
                  v-model="marketing.invite_url"
                  id="invite_url"
                ></el-input>
                <div class="tag" @click="copy(marketing.invite_url)">
                  <img src="@/assets/img/center_file.png" alt="" />
                </div>
              </div>
            </template>

            <template v-else>
              <div
                style="margin-top: 27px; font-size: 14px; color: rgb(255, 7, 7)"
              >
                {{ languageNav[langType].language_text146 }} !
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card_title">{{ languageNav[langType].language_text19 }}</div>
      <div class="card_row">
        <span class="row_name">{{
          languageNav[langType].language_text20
        }}</span>
        <span>{{ userInfo.email }}</span>
      </div>
      <div class="card_row">
        <span class="row_name">{{
          languageNav[langType].language_text21
        }}</span>
        <span class="colorD2A629" style="cursor: pointer" @click="toEditPas">{{
          languageNav[langType].language_text22
        }}</span>
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import { userInfo, myPreSale, myMarketing } from "@/request/user.js";
import webFoot from "@/components/footer";
import languageNav from "@/language/user";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      userInfo: {
        area: "",
        code: "",
        email: "",
        first_name: "",
        kyc_status: 0, // 0-未认证,1-已认证,2-审核中,3-已拒绝
        last_name: "",
        name: "",
      },
      myPreSale: {
        apply_usdt_amount: "",
        apply_taft_amount: "",
      },
      marketing: {
        code: "",
        rebate_amount: 0,
        invite_count: 0,
        invite_code: "",
        invite_url: "",
      },
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    copy(copyTxt) {
      var createInput = document.createElement("input");
      createInput.value = copyTxt;
      document.body.appendChild(createInput);
      createInput.select();
      document.execCommand("Copy");
      createInput.className = "createInput";
      createInput.style.display = "none";
      this.$message(this.languageNav[this.$langType].language_text23);
    },

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

    getMyPreSale() {
      let params = {
        code: localStorage.getItem("code"),
      };
      myPreSale(params).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.myPreSale = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    getMyMarketing() {
      let params = {
        code: localStorage.getItem("code"),
      };
      myMarketing(params).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.marketing = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    toApply() {
      this.$router.push({ name: "KYCapply", query: { type: 0 } });
    },

    toApplyBuylog() {
      this.$router.push("/applyBuylog");
    },

    toRebatelog() {
      this.$router.push("/rebatelog");
    },

    toExtendLog() {
      this.$router.push("/extendLog");
    },

    toEditPas() {
      this.$router.push("/password");
    },
    lookUp() {
      this.$router.push({ path: "/KYClose" });
    },
    sofert() {
      this.$router.push({ path: "/transfer" });
    },
  },
  created() {},
  mounted() {
    this.getUserInfo();
    this.getMyPreSale();
    this.getMyMarketing();
  },
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  .card {
    width: 1200px;
    margin: 20px auto;
    background: #ffffff;
    box-sizing: border-box;
    padding: 30px;
    .page_hint {
      /*display: flex;*/
      /*align-items: center;*/
      background: #fff8e4;
      line-height: 30px;
      padding: 4px 10px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }
    .user_info_box {
      margin-top: 16px;
      border: 1px solid #ebebeb;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      .user_info {
        display: flex;
        .user_photo {
          padding: 0 40px 0 20px;
          border-right: 1px solid #ebebeb;
          img {
            width: 110px;
            height: 110px;
          }
        }
      }
      .user_about {
        padding-left: 20px;
        line-height: 60px;
        .about_row {
          display: flex;
          color: #999999;
          font-size: 16px;
          .title {
            margin-right: 23px;
          }
        }
      }
    }

    .attest {
      background: #fff8e4;
      padding: 25px;
      width: 500px;
      .title {
        position: relative;
        font-size: 18px;
        margin-bottom: 10px;
        .center_targe {
          padding: 0 10px;
          height: 24px;
          line-height: 24px;
          position: absolute;
          top: 0px;
          border-top-left-radius: 90px;
          border-bottom-left-radius: 90px;
          right: -25px;
          color: #ffffff;
          font-size: 14px;
          text-align: center;
          &.status0 {
            background-color: #d2a629;
            background-size: cover;
          }
          &.status1 {
            background-color: #17d241;
            background-size: cover;
          }
          &.status2 {
            background-color: rgb(228, 151, 9);
            background-size: cover;
          }
          &.status3 {
            background: #e45b5b;
            background-size: cover;
          }
        }
      }
      .info {
        font-size: 14px;
        line-height: 28px;
        span {
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }

    .card_title {
      color: #333333;
      font-size: 18px;
      .hint {
        color: #ff4343;
        margin-left: 30px;
        font-size: 18px;
      }
    }
    .cart_box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      border: 1px solid #d8d8d8;
      .cart_box_item {
        padding: 20px;
        flex: 1;
        border-right: 1px solid #d8d8d8;
        &:last-child {
          border-right: none;
        }
        .item_title {
          display: flex;
          justify-content: space-between;
        }
        .extend {
          width: 340px;
          height: 32px;
          line-height: 32px;
          padding-left: 8px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #d8d8d8;
          margin-top: 20px;
          .tag {
            width: 32px;
            height: 30px;
            background: #d2a629;
            text-align: center;
            cursor: pointer;
            img {
              width: 14px;
              height: 18px;
              margin-top: -4px;
            }
          }
        }
      }
    }
    .card_row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .row_name {
        color: #595959;
        font-size: 18px;
      }
    }
  }
}
.rkot:hover {
  cursor: pointer;
  text-decoration: underline;
}
.taost {
  color: #000 !important;
}
/deep/ .extend .el-input__inner {
  height: 32px;
  line-height: 32px;
  border-radius: 0;
  margin-top: -7px;
  color: #0e0e0e;
  font-weight: 600;
}
</style>
