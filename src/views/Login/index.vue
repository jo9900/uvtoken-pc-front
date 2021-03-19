<!--   -->
<template>
  <div class="page">
    <webNav />
    <div class="page_content">
      <div class="login_bg"></div>
      <div class="wrap">
        <!-- 登录 -->
        <div class="case login_case">
          <div class="case_title">
            {{ $t('login.text1') }}
          </div>
          <el-form
              class="case_form"
              :model="loginForm"
              :rules="rules"
              ref="loginForm"
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
                  :placeholder="$t('login.text2')"
                  v-model.trim="loginForm.mail"
                  auto-complete="new-password"
                  autocomplete="off"
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
                  type="password"
                  :placeholder="$t('login.text3')"
                  v-model.trim="loginForm.pwd"
                  auto-complete="new-password"
                  @keypress.enter="submitForm('loginForm')"
                  autocomplete="off"
              />
            </el-form-item>
            <div class="forget_link">
              <span @click="toReset" style="cursor: pointer">{{
                  $t('login.text4')
                }}</span>
            </div>
          </el-form>
          <el-button
              class="btn form_btn"
              :loading="loading"
              @click="submitForm('loginForm')"
          >{{ $t('login.text1') }}
          </el-button>
        </div>
        <!-- 登录 end -->
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
  </div>
</template>


<script>
import webNav from "@/Layout/nav";
import {
  pubKey,
  login,
  resetPassword
} from "@/request/login.js";
import {filName} from "@/filters"

const sha256 = require( "js-sha256" ).sha256;
import { JSEncrypt } from "jsencrypt";
import MixinSlideVerify from "@/mixin/slideVerify"
let that;
export default {
  name: "login",
  components: { webNav },
  mixins: [MixinSlideVerify],
  data() {
    var Elowert = ( rule, value, callback ) => {
      // let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if ( !reg.test( value ) ) {
        callback( new Error( this.$t( 'login.text13' ) ) );
      }
      else {
        callback();
      }
    };
    const validatePassword = ( rule, value, callback ) => {
      let codeReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,30}$/;
      if ( !codeReg.test( value ) ) {
        callback( new Error( this.$t( 'login.text12' ) ) );
      }
      else {
        callback();
      }
    };

    return {
      pk: '',
      dialogVisible: false,
      fromPath: "",
      loading: false,
      pagePath: "login",
      checked: false,
      disabled: false,
      time: 60,
      inviteCode: false,
      btntxt: this.$t( 'login.text14' ),
      loginForm: {
        mail: "",
        pwd: "",
        deviceType: 0
      },
      signUpForm: {
        email: "",
        password: "",
        againPassword: "",
        verify_code: "",
        inviteCode: "",
        deviceType: 0
      },
      //重置密码
      resetData: {
        email: "",
        password: "",
        againPassword: "",
        verify_code: ""
      },
      rules: {
        mail: [
          {
            required: true,
            message: this.$t( 'login.text2' ),
            trigger: "blur"
          },
          { validator: Elowert, required: true, trigger: "blur" }
        ],
        pwd: [
          {
            required: true,
            message: this.$t( 'login.text3' ),
            trigger: "blur"
          },
          { validator: validatePassword, required: true, trigger: "blur" }
        ],
        againPassword: [
          { validator: validatePassword, required: true, trigger: "blur" }
        ],
        verify_code: [
          {
            required: true,
            message: this.$t( 'login.text5' ),
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {},

  methods: {
    toReset() {
      this.$router.push( { path: "/forget" } );
    },

    rsaData( data ) {
      const PUBLIC_KEY = this.pk;
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey( PUBLIC_KEY );
      let result = jsencrypt.encrypt( data );
      return result;
    },

    timer() {
      if ( this.time > 0 ) {
        this.disabled = true;
        this.time--;
        this.btntxt = " " + this.time + " s";
        setTimeout( this.timer, 1000 );
      }
      else {
        this.time = 60;
        this.btntxt = this.$t( 'login.text14' );
        this.disabled = false;
      }
    },
    userText() {
      this.$router.push( { path: "/userAgreement" } );

      this.$store.state.signUpForm = this.signUpForm;
    },
    closeVerifyDialog() {
      this.loading = false
      this.handleClick()
    },
    async onSuccess(times) {
      this.dialogVisible = false
      let params = {};
      Object.assign( params, this.loginForm );
      let resData = await pubKey();
      if (resData.code == 0) {
          this.pk = resData.data.PubKey;
      }
      params.pwd = this.rsaData( sha256( this.loginForm.pwd ) );
      login( params ).then( ( res ) => {
        this.loading = false;
        if (res.code != 0) {
          this.$message.error(this.$t( 'login.text25' ) );
          return
        }
        this.$message( {
          message: this.$t( 'login.text24' ),
          type: "success",
          duration: 1000
        } );
        let code = res.data.Code;
        let email = res.data.Email;
        let token = res.data.Token;
        localStorage.setItem( "code", code );
        localStorage.setItem( "filName", filName(code) );
        localStorage.setItem( "email", email );
        localStorage.setItem( "token", token );
        this.$store.commit( "SETTOKEN", token );
        this.$store.commit( "SETCODE", code );
        if ( this.fromPath == "/presale" )
          this.$router.back( -1 );
        else
          this.$router.push( "/center" );
      } );
    },
    submitForm( formName ) {
      this.$refs[ formName ].validate( ( valid ) => {
        if (!valid) return false
        // 拼图验证
        this.dialogVisible = true
        this.loading = true;
      } )
    },
    resetDataForm() {
      this.$refs[ "resetForm" ].validate( async ( valid ) => {
        if ( valid ) {
          if ( this.resetData.password != this.resetData.againPassword ) {
            return this.$message.error(
                this.$t( 'login.text26' )
            );
          }
          let params = {
            email: this.resetData.email,
            email_verify_code: this.resetData.verify_code,
            new_password: this.resetData.againPassword
          };
          this.loading = true;
          let resData = await pubKey();
          if (resData.code == 0) {
              this.pk = resData.data.PubKey;
          }
          params.new_password = this.rsaData( sha256( this.resetData.password ) );
          resetPassword( params ).then( ( res ) => {
            this.loading = false;
            if ( res.code == 0 ) {
              this.$message( {
                message: this.$t( 'login.text27' ),
                type: "success"
              } );
              this.$router.push( "login" );
            }
            else {
              if ( res.code == "101504" ) {
                return this.$message.error(
                    this.$t( 'login.text31' )
                );
              }
              if ( res.code == "101503" ) {
                return this.$message.error(
                    this.$t( 'login.text33' )
                );
              }
              else {
                this.$message.error( res.msg );
              }
            }
          } );
        }
      } );
    },

    resetForm( formName ) {
      this.$refs[ formName ].resetFields();
    },
    getQueryVariable( name, url ) {
      return (
          decodeURIComponent(
              ( new RegExp( "[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)" ).exec(
                  url
              ) || [ , "" ] )[ 1 ].replace( /\+/g, "%20" )
          ) || null
      );
    }
  },
  created() {
  },

  mounted() {
    if ( this.getQueryVariable( "ref", window.location.href ) ) {
      this.inviteCode = true;
      this.signUpForm.inviteCode = this.getQueryVariable(
          "ref",
          window.location.href
      );
    }
  }
};
</script>

<style lang='less' scoped>
.page {
  min-width: 1200px;

  .page_content {
    position: relative;
    min-height: calc(100vh);
    background-size: cover;

    .login_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../../assets/img/login_bg.png") 100% 100% no-repeat;
    }

    .wrap {
      position: relative;
      z-index: 10;
      height: 100%;
      min-height: calc(100vh);
      display: flex;
      align-items: center;
      justify-content: center;

      .case {
        width: 475px;

        background: #ffffff;
        padding: 68px 40px 0px 25px;
        box-sizing: border-box;

        &.login_case {
          height: 490px;
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

            &:last-child {
              margin-bottom: 0;
            }

            .input_img {
              position: absolute;
              left: 26px;
              top: 18px;
              width: 22px;
            }

            .row_input {
              padding-left: 58px;
              font-size: 16px;
              width: 479px;
              height: 58px;
              line-height: 58px;

              border-radius: 31px;
            }

            .get_code {
              cursor: pointer;
              position: absolute;
              right: 10px;
              /*width: 60px;*/
              text-align: center;
              padding: 0 4px;
              line-height: 36px;
              font-size: 16px;
              color: #909090;
              top: 14px;
              border-left: 1px solid #c7c7c7;
            }

            .get_code:hover {
              color: #5885fdff;
            }
          }

          .forget_link {
            margin-right: 20px;
            text-align: right;
            font-size: 15px;
            color: #5885fdff;

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
            font-size: 16px;

            span {
              color: #d1a529;
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
          line-height: 29px;
          text-align: center;
          width: 300px;
          background-color: #5885fd;
          margin: 0 auto;
          display: block;
          color: #ffffff;
          margin-top: 37px;
          margin-left: 70px;
          font-size: 18px;
        }
      }
    }
  }
}

.usertext:hover {
  cursor: pointer;
  text-decoration: underline;
}

/deep/ .el-input__inner {
  font-size: 14px;
  width: 79%;
}

/deep/ .el-form-item__error {
  left: 54px;
}

/deep/ .simple-verify .verify-bar {
  background-color: #2db9f6;
  top: 0px;
}

/deep/ .simple-verify .verify-bar .icon {
  width: 21px;
  height: 12px;
  box-shadow: inherit;
  border-radius: 0;
}

/deep/ .simple-verify .verify-tips {
  color: #5885FD;
}

.tstPoset {
  text-align: center;
  font-size: 18px;
  color: #5885FD;
  margin-bottom: 9px;
}

.tacoker {
  font-size: 14px;
  text-align: center;
  color: #828282;
}

.verify-title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 22px;
  margin-bottom: 10px;
}

.verify-dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
