<template>
  <div class="page">
    <webNav />
    <div class="page_content">
      <div class="login_bg"></div>
      <div class="wrap">
        <div class="case signUp_case">
          <template v-if="!signUpCode">
            <div class="case_title">
              {{ $t( 'login.text8' ) }}
            </div>
            <el-form
              class="case_form"
              :model="signUpForm"
              :rules="rules"
              ref="signUpForm"
            >
              <el-form-item class="form_row" prop="mail">
                <img
                  class="input_img"
                  src="@/assets/img/login_person.png"
                  alt=""
                />
                <el-input
                  class="row_input"
                  type="text"
                  readonly
                  onfocus="this.removeAttribute('readonly');"
                  onblur="this.setAttribute('readonly',true);"
                  :placeholder="$t( 'login.text2' )"
                  v-model.trim="signUpForm.mail"
                />
              </el-form-item>
              <el-form-item class="form_row" prop="pwd">
                <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                />
                <el-input
                  class="row_input"
                  :type="passwordType1"
                  autocomplete="off"
                  :placeholder="$t( 'login.text3' )"
                  v-model.trim="signUpForm.pwd"
                />
                <img v-show="!showEye1" @click="triggerEye(1)"
                     class="eye eye-close" src="../../assets/img/eye.svg" alt="eye">
                <img v-show="showEye1" class="eye" @click="triggerEye(1)"
                     src="../../assets/img/eye-open.svg" alt="eye">
              </el-form-item>
              <el-form-item class="form_row" prop="againPassword">
                <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                />
                <el-input
                  class="row_input"
                  :type="passwordType2"
                  autocomplete="off"
                  :placeholder="$t( 'login.text6' )"
                  v-model.trim="signUpForm.againPassword"
                />
                <img v-show="!showEye2" @click="triggerEye(2)"
                     class="eye eye-close" src="../../assets/img/eye.svg" alt="eye">
                <img v-show="showEye2" class="eye" @click="triggerEye(2)"
                     src="../../assets/img/eye-open.svg" alt="eye">
              </el-form-item>
              <div class="form_row codeText" style="margin-bottom: 15px">
                <img
                  style="top: 15px"
                  class="input_img"
                  src="@/assets/img/rewer.png"
                  alt=""
                />
                <template v-if="inviteCode">
                  <el-input
                    class="row_input"
                    disabled
                    v-model="signUpForm.inviteCode"
                  />
                </template>
                <template v-else>
                  <el-input
                    class="row_input"
                    :placeholder="
                      $t( 'login.text28' ) +
                      '（' +
                      $t( 'login.text29' ) +
                      '）'
                    "
                    v-model="signUpForm.inviteCode"
                /></template>
              </div>
              <div
                class="protocol_row nochenched"
                style="
                  text-align: left;
                  padding-left: 53px;
                  margin-bottom: 19px;
                "
              >
                <el-checkbox v-model="checked" @change="handleCheckAllChange">
                  <span style="color: #000000d9">{{
                      $t( 'login.text15' )
                  }}</span>
                </el-checkbox>
                <span
                  >《<span class="usertext" @click="userText">{{
                    $t( 'login.text16' )
                  }}</span
                  >》</span
                >
              </div>
            </el-form>
            <el-button
              class="btn form_btn singBon"
              @click="submitForm('signUpForm')"
              >{{ $t( 'login.text8' ) }}
            </el-button>
          </template>
          <template v-if="signUpCode">
            <div class="case_title" style="margin-bottom: 34px">{{ $t( 'login.text37' ) }}</div>
            <div class="tstPoset">
              {{ $t( 'login.text38' ) }} {{ signUpForm.email }}
            </div>
            <div class="tacoker">
              {{ $t( 'login.text39' ) }}
            </div>
            <el-form
              style="margin: 25px 0"
              class="case_form"
              :model="signUpForm"
              :rules="rules"
              ref="signUpForm"
            >
              <el-form-item class="form_row" prop="verifyCode">
                <img
                  class="input_img"
                  src="@/assets/img/login_password.png"
                  alt=""
                />
                <el-input
                  class="row_input"
                  type="text"
                  maxlength="8"
                  :placeholder="$t( 'login.text5' )"
                  v-model.trim="signUpForm.verifyCode"
                />
                <div v-if="disabled" class="get_code">{{ btntxt }}</div>
                <div v-else class="get_code" @click="sendcode('signUp')">
                  {{ btntxt }}
                </div>
              </el-form-item>
            </el-form>
            <el-button
              class="btn form_btn singBon"
              :loading="loading"
              @click="submitFormSign('signUpForm')"
              >{{ $t( 'login.text36' ) }}</el-button
            >
          </template>
        </div>
      </div>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        @close="closeVerifyDialog"
        :show-close="false"
        top="30vh"
        width="368px">
      <div class="verify-dialog-content">
        <div class="verify-title">{{ $t( 'login.text34' ) }}</div>
        <slide-verify :l="42"
                      :r="10"
                      :w="310"
                      :h="155"
                      :slider-text="$t( 'login.text35')"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      ref="slideblock"
        ></slide-verify>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import webNav from "@/Layout/nav";
import {
  pubKey,
  login,
  signUp,
  mailVcode,
} from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";
import MixinSlideVerify from "@/mixin/slideVerify"

let that;
export default {
  name: "signUp",
  components: { webNav },
  mixins: [MixinSlideVerify],
  data() {
    var Elowert = (rule, value, callback) => {
      // let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!reg.test(value)) {
        callback(new Error(this.$t( 'login.text13' )));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      let codeReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,30}$/;
      if (!codeReg.test(value)) {
        callback(new Error(this.$t( 'login.text12' )));
      } else {
        callback();
      }
    };
    const validatePasswordAagin = (rule, value, callback) => {
      if (value != this.signUpForm.pwd) {
        callback(new Error(this.$t( 'login.text26' )));
      } else {
        callback();
      }
    };

    return {
      pk: '',
      showEye1: false,
      showEye2: false,
      passwordType1: 'password',
      passwordType2: 'password',
      dialogVisible: false,
      fromPath: "",
      loading: false,
      pagePath: "login",
      checked: false,
      disabled: false,
      signUpCode: false,
      resetCode: false,
      inviteCode: false,
      time: 60,
      btntxt: this.$t( 'login.text14' ),
      signUpForm: {
        mail: "",
        pwd: "",
        againPassword: "",
        verifyCode: "",
        inviteCode: "",
        deviceType: 0
      },
      //重置密码
      resetData: {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
      },
      code: "",
      token: "",
      rules: {
        mail: [
          {
            required: true,
            message: this.$t( 'login.text2' ),
            trigger: "blur",
          },
          { validator: Elowert, required: true, trigger: "blur" },
        ],
        pwd: [
          {
            required: true,
            message: this.$t( 'login.text3' ),
            trigger: "blur",
          },
          { validator: validatePassword, required: true, trigger: "blur" },
        ],
        againPassword: [
          { validator: validatePassword, required: true, trigger: "blur" },
          { validator: validatePasswordAagin, required: true, trigger: "blur" },
        ],
        verifyCode: [
          {
            required: true,
            message: this.$t( 'login.text5' ),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},

  methods: {
    triggerEye(id) {
      this['showEye' + id] = !this['showEye' + 'id']
      if (this['passwordType' + id] == 'password') {
        this['passwordType' + id] = 'text'
      }
      else this['passwordType' + id] = 'password'
    },
    toReset() {
      this.$router.push("forget");
    },
    rsaData(data) {
      const PUBLIC_KEY = this.pk;
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey(PUBLIC_KEY);
      let result = jsencrypt.encrypt(data);
      return result;
    },
    handleCheckAllChange(value) {
      if (value) {
        document.getElementsByClassName("el-checkbox__inner")[0].style.border =
          "";
        document.getElementsByClassName(
          "el-checkbox__inner"
        )[0].style.lineHeight = "0";
      }
    },

    sendcode(e) {
      let data = {
        lang_type: this.$langType,
        mail: this.signUpForm.mail,
        flag: "1",
      };
      mailVcode(data).then((res) => {
        if (res.code == 0) {
          this.$message({
            message: this.$t( 'login.text17' ),
            type: "success",
          });
          this.signUpCode = true;
          this.timer();
        } else {
          if (res.code == "101702") {
            return this.$message.error(
                this.$t( 'login.text18' )
            );
          } else if (res.code == "101703") {
            return this.$message.error(
                this.$t( 'login.text19' )
            );
          } else if (res.code == "101704") {
            return this.$message.error(
                this.$t( 'login.text23' )
            );
          } else {
            this.$message.error(res.msg);
          }
        }
      });
    },

    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = " " + this.time + " s";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 60;
        this.btntxt = this.$t( 'login.text14' );
        this.disabled = false;
      }
    },
    userText() {
      this.$router.push({ path: "/userAgreement" });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        if (!this.checked) {
          document.getElementsByClassName(
            "el-checkbox__inner"
          )[0].style.border = "1px solid red";
          document.getElementsByClassName(
            "el-checkbox__inner"
          )[0].style.lineHeight = "0";
        }
        this.dialogVisible = true
        this.loading = true;
      });
    },

    submitFormSign(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let params = JSON.parse(JSON.stringify(this.signUpForm));
          delete params.againPassword;
          let resData = await pubKey();
          if (resData.code == 0) {
              this.pk = resData.data.PubKey;
          }
          params.pwd = this.rsaData(sha256(params.pwd));
          signUp(params).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t( 'login.text20' ),
                type: "success",
              });
              this.$router.push("login");
            } else {
              if (res.code == "100111") {
                this.$message.error(
                    this.$t( 'login.text21' )
                );
              } else if (res.code == "100113") {
                this.$message.error(
                    this.$t( 'login.text22' )
                );
              } else if (res.code == "100116") {
                this.$message.error(
                    this.$t( 'login.text23' )
                );
              } else if (res.code == "100115") {
                this.$message.error(
                    this.$t( 'login.text30' )
                );
              } else {
                this.$message.error(
                    this.$t( 'text204' )
                );
              }
            }
          });
        }
      });
    },

    getQueryVariable(name, url) {
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            url
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },
    closeVerifyDialog() {
      this.loading = false
      this.dialogVisible = false
      this.handleClick()
    },
    onSuccess(val) {

      this.closeVerifyDialog()
      setTimeout(() => {
        this.sendcode("signUp");
      }, 500);
    },
  },
  created() {
  },

  mounted() {
    if (this.getQueryVariable("ref", window.location.href)) {
      this.inviteCode = true;
      this.signUpForm.inviteCode = this.getQueryVariable(
        "ref",
        window.location.href
      );
    }
  },
};
</script>

<style lang='less' scoped>
.page {
  min-width: 1200px;
  .page_content {
    position: relative;
    /*min-height: calc(100vh);*/
    /*background-size: cover;*/
    /*background:linear-gradient(#07173C, #073863) ;*/
    .login_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../../assets/img/login_bg.png") 100% 100% no-repeat;
      background-size: cover;
    }
    .wrap {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      min-height: calc(100vh);
      display: flex;
      align-items: center;
      justify-content: center;
      .case {
        width: 471px;
        text-align: center;
        background: #ffffff;
        padding: 40px 58px 40px 29px;
        box-sizing: border-box;
        &.login_case {
          height: 450px;
        }
        .case_title {
          font-size: 30px;
          color: #262626;
          text-align: center;
        }
        .case_form {
          padding: 20px 0;
          .form_row {
            position: relative;
            margin-bottom: 34px;
            &:last-child {
              margin-bottom: 0;
            }
            .input_img {
              position: absolute;
              left: 26px;
              top: 11px;
              width: 25px;
            }
            .row_input {
              padding-left: 55px;
              font-size: 14px;
              width: 380px;
              height: 44px;
              line-height: 44px;
            }
            .get_code {
              cursor: pointer;
              position: absolute;
              right: 10px;
              width: 60px;
              text-align: center;
              padding: 0 4px;
              line-height: 36px;
              font-size: 16px;
              color: #909090;
              top: 7px;
              border-left: 1px solid #c7c7c7;
            }
            .get_code:hover {
              color: #5885fd;
            }
          }
          .forget_link {
            margin: 30px 0;
            text-align: right;
            font-size: 16px;
            color: #d1a529;
            span:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        &.signUp_case {
          margin: 30px 0;
          /*height: 690px;*/
          .form_row {
            margin-bottom: 26px;
          }
          .protocol_row {
            font-size: 14px;
            span {
              color: rgba(88, 133, 253, 1);
            }
          }
        }

        &.forget_case {
          margin: 30px 0;
          /*height: 590px;*/
        }
        .btn {
          cursor: pointer;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin: 0 auto;
          width: 329px;
          background: #5885fd;
          border-radius: 3px;
          color: #ffffff;
          font-size: 20px;
          margin-left: 52px;
        }
      }
    }
  }
}
.usertext:hover {
  cursor: pointer;
  text-decoration: underline;
}
.codeText /deep/ .el-input__inner {
  color: #303133;
}

/deep/ .simple-verify .verify-bar {
  background-color: #5885fdff;
  top: 0px;
}
/deep/ .simple-verify .verify-bar .icon {
  width: 21px;
  height: 12px;
  box-shadow: inherit;
  border-radius: 0;
}
/deep/ .simple-verify .verify-tips {
  color: #5885fdff;
}
/deep/ .el-form-item__error {
  left: 54px;
}
.tstPoset {
  text-align: center;
  font-size: 18px;
  color: #5885fdff;
  margin-bottom: 9px;
}
.tacoker {
  font-size: 14px;
  text-align: center;
  color: #828282;
}
.eye {
  top: 12px;
  right: 13px;
}
.eye-close {
  top: 20px
}
</style>
