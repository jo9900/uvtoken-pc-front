
<!-- -->
<template>
  <div class="page">
    <div class="card">
      <div class="page_hint color5885FD">
       <i class="el-icon-warning"></i>
        {{ $t('usercenter.text0') }}
      </div>
      <div class="user_info_box">
        <div class="user_info">
          <div class="user_photo">
            <img src="@/assets/img/center_photo.png" alt="" />
          </div>
          <div class="user_about">
            <div class="about_row">
              <p class="title">{{ $t('usercenter.text1') }}</p>
              <p
                class="color5885FD name"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="$lang == 'en'">
                  {{
                    userInfo.kyc_status == 1
                      ? userInfo.last_name + " · " + userInfo.first_name
                      : $t( 'usercenter.text4' )
                  }}
                </template>
                <template v-else>
                  {{
                    userInfo.kyc_status == 1
                      ? userInfo.first_name + userInfo.last_name
                      : $t( 'usercenter.text4' )
                  }}
                </template>
              </p>
            </div>

            <div class="about_row">
              <p class="title">{{ $t( 'usercenter.text2' ) }}</p>

              <span
                class="color5885FD"
                :class="{ taost: userInfo.kyc_status == 1 }"
              >
                <template v-if="userInfo.kyc_status == 1">
                  {{
                    $lang == "zh"
                      ? userInfo.country_name
                      : userInfo.country_name_en
                  }}
                </template>
                <template v-else>{{
                  $t( 'usercenter.text4' )
                }}</template>
              </span>
            </div>
          </div>
        </div>

        <div class="attest">
          <template v-if="userInfo.kyc_status == 0">
            <div class="title color5885FD">
              {{ $t( 'usercenter.text3' ) }}
              <div class="center_targe status0">
                {{ $t( 'usercenter.text4' ) }}
              </div>
            </div>
            <div class="info">{{ $t( 'usercenter.text24' ) }}</div>
            <div class="info">
              {{ $t( 'usercenter.text25' ) }}
              <span class="color5885FD" @click="toApply"
                >{{ $t( 'usercenter.text5' ) }} >
              </span>
            </div>
          </template>
          <template v-if="userInfo.kyc_status == 1">
            <div class="title color5885FD">
              {{ $t( 'usercenter.text3' ) }}
              <div class="center_targe status1">
                {{ $t( 'usercenter.text6' )}}
              </div>
            </div>
            <div class="info">{{ $t( 'usercenter.text26' ) }}</div>
          </template>
          <template v-if="userInfo.kyc_status == 2">
            <div class="title color5885FD">
              {{ $t( 'usercenter.text3' ) }}
              <div class="center_targe status2">
                {{ $t( 'usercenter.text7' ) }}
              </div>
            </div>
            <div class="info">{{ $t( 'usercenter.text27' ) }}</div>
          </template>
          <template v-if="userInfo.kyc_status == 3">
            <div class="title color5885FD">
              {{ $t( 'usercenter.text3' ) }}
              <div class="center_targe status3">
                {{ $t( 'usercenter.text8' ) }}
              </div>
            </div>
            <div class="info">{{ $t( 'usercenter.text28' ) }}</div>
            <div class="info">
              <span
                class="color5885FD rkot"
                @click="lookUp"
                style="margin: 0"
                >{{ $t( 'usercenter.text9' ) }}</span
              >
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card_title">{{ $t( 'usercenter.text10' ) }}</div>
      <div class="cart_box">
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ $t( 'usercenter.text14' ) }}</span>
            <span
              class="color5885FD"
              @click="toApplyBuylog"
              style="cursor: pointer"
              >{{ $t( 'usercenter.text11' ) }}</span
            >
          </div>
          <div class="margintop40 color5885FD">
            {{ myPreSale.apply_usdt_amount ? myPreSale.apply_usdt_amount : 0 }}
            USDT
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ $t( 'usercenter.text15' ) }}</span>
            <span class="color5885FD" style="cursor: pointer" @click="sofert">{{
              $t( 'text165' )
            }}</span>
          </div>
          <div class="margintop40 color5885FD">
            {{ myPreSale.apply_taft_amount ? myPreSale.apply_taft_amount : 0 }}
            UVT
          </div>
        </div>
      </div>
    </div>
<!--    <div class="card">
      <div class="card_title">{{ $t( 'usercenter.text13' ) }}</div>
      <div class="cart_box">
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ $t( 'usercenter.text16' ) }}</span>
            <span
              class="color5885FD"
              @click="toRebatelog"
              style="cursor: pointer"
              >{{ $t( 'usercenter.text11' ) }}</span
            >
          </div>
          <div class="margintop60 color5885FD">
            {{ marketing.rebate_amount ? marketing.rebate_amount : 0 }} USDT
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ $t( 'usercenter.text17' ) }}</span>
            <span
              class="color5885FD"
              @click="toExtendLog"
              style="cursor: pointer"
              >{{ $t( 'usercenter.text11' ) }}</span
            >
          </div>
          <div class="margintop60 color5885FD">
            {{ marketing.invite_count }}
            {{ $t( 'usercenter.text12' ) }}
          </div>
        </div>
        <div class="cart_box_item">
          <div class="item_title">
            <span>{{ $t( 'usercenter.text18' ) }}</span>
          </div>
          <div class="">
            <template v-if="marketing.invite_url">
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
                  readonly
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
                {{ $t( 'usercenter.text146' ) }} !
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>-->
    <div class="card">
      <div class="card_title">{{ $t( 'usercenter.text19' ) }}</div>
      <div class="card_row">
        <span class="row_name">{{
          $t( 'usercenter.text20' )
        }}</span>
        <span>{{ userFilName }}</span>
      </div>
      <div class="card_row">
        <span class="row_name">{{
          $t( 'usercenter.text21' )
        }}</span>
        <span class="color5885FD" style="cursor: pointer" @click="toEditPas">{{
          $t( 'usercenter.text22' )
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo, myPreSale, myMarketing } from "@/request/user.js";
export default {
  name: "center",
  data() {
    return {
      NODE_ENV:process.env.NODE_ENV,
      userFilName: '',
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
      }
    };
  },
  computed: {},
  watch: {},
  activated() {
   this.init()
  },
  methods: {
    init() {
      this.userFilName = localStorage.getItem("filName")
      this.getUserInfo();
      this.getMyPreSale();
      this.getMyMarketing();
    },
    copy(copyTxt) {
      var createInput = document.createElement("input");
      createInput.value = copyTxt;
      document.body.appendChild(createInput);
      createInput.select();
      document.execCommand("Copy");
      createInput.className = "createInput";
      createInput.style.display = "none";
      this.$message(this.$t( 'usercenter.text23' ));
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
    this.init()
  },
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  height: 100%;
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
      background: lighten(#5885FD, 30%);
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
          width: 171px;
          height: 120px;
          padding: 0 40px 0 20px;
          border-right: 1px solid #ebebeb;
          flex-shrink: 0;
          img {
            width: 110px;
            height: 110px;
          }
        }
      }
      .user_about {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 400px;
        .about_row {
          display: flex;
          color: #999999;
          align-items: center;
          font-size: 16px;
          .title {
            margin-right: 23px;
            white-space: nowrap;
          }
          .name {
            width: 355px;
            word-wrap: break-word;
          }
        }
      }
    }

    .attest {
      background: lighten(#5885FD, 32%);
      padding: 25px;
      width: 500px;
      flex-shrink: 0;
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
            background-color: #5885FD;
            background-size: cover;
          }
          &.status1 {
            background-color: #17d241;
            background-size: cover;
          }
          &.status2 {
            background-color: #00e2e0;
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
          display: flex;
          align-items: center;
          width: 340px;
          height: 32px;
          padding-left: 8px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #d8d8d8;
          margin-top: 20px;
          .tag {
            width: 32px;
            height: 30px;
            background: #5885FD;
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
  height: 30px;
  line-height: 30px;
  border-radius: 0;
  color: #0e0e0e;
  font-weight: 600;
  outline: none;
}
</style>
