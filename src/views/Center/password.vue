
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          $t( 'text114' )
        }}</router-link>
        > {{ $t( 'text192' ) }}
      </div>
      <div class="page_content">
        <el-form
          class="data_form"
          label-position="top"
          :rules="rules"
          label-width="80px"
          ref="dataForm"
          :model="dataForm"
        >
          <el-form-item
            :label="$t( 'text193' )"
            class="zcoder"
            prop="verify_code"
          >
            <el-input
              maxlength="8"
              v-model.trim="dataForm.verify_code"
              readonly
              onfocus="this.removeAttribute('readonly');"
              onblur="this.setAttribute('readonly',true);"
            ></el-input>
            <div class="roket_code">
              <div v-if="disabled" class="get_code">{{ btntxt }}</div>
              <div v-else class="get_code text-code" @click="sendcode">
                {{ btntxt }}
              </div>
            </div>
          </el-form-item>
          <el-form-item
            :label="$t( 'text194' )"
            prop="password"
            style="position: relative"
          >
            <div class="" style="height: 51px">
              <el-input
                type="password"
                v-model.trim="dataForm.password"
                autocomplete="off"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item
            :label="$t( 'text195' )"
            prop="againPassword"
            style="position: relative"
          >
            <div class="" style="height: 51px">
              <el-input
                type="password"
                v-model.trim="dataForm.againPassword"
              ></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-button
          class="submit_btn"
          :loading="loading"
          @click="passwordUpdata"
          >{{ $t( 'text196' ) }}
          </el-button>
      </div>
    </div>
    <webFoot />
  </div>
</template>
<script>
import webFoot from "@/Layout/footer";
import { passwordVcode, resetPassword, pubKey, mailVcode } from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";

export default {
  name: "",
  components: { webFoot },
  data() {
    var passwordValidator = (rule, value, callback) => {
      if (this.dataForm.password != this.dataForm.againPassword) {
        callback(new Error(this.$t( 'text197' )));
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
    return {
      pk: '',
      disabled: false,
      time: 60,
      timerNull: null,
      btntxt: this.$t( 'login.text14' ),
      loading: false,
      dataForm: {
        password: "", // 密码
        againPassword: "", // 确认密码
        verify_code: "", // 验证码
      },
      rules: {
        password: [
          {
            required: true,
            message: this.$t( 'login.text3' ),
            trigger: "blur",
          },
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        againPassword: [
          {
            required: true,
            message: this.$t( 'login.text6' ),
            trigger: "blur",
          },
          { required: true, trigger: "blur", validator: passwordValidator },
        ],
        verify_code: [
          {
            required: true,
            message: this.$t( 'text198' ),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    passwordUpdata() {
      this.$refs["dataForm"].validate(async (valid) => {
        if (valid) {
          let params = {
            mail: localStorage.getItem("code"),
            verifyCode: this.dataForm.verify_code,
            pwd: this.dataForm.againPassword,
          };
          this.loading = true;
          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.PubKey;
          }
          // 密码加密 sha256 => rsaData
          params.pwd = this.rsaData(sha256(this.dataForm.password));
          resetPassword(params).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.$message({
                message: this.$t( 'login.text27' ),
                type: "success",
              });
              this.$router.push("center");
            } else {
              if (res.code == "101504") {
                this.$message.error(
                  this.$t( 'text188' )
                );
              }
              if (res.code == "101503") {
                this.$message.error(
                  this.$t( 'text189' )
                );
              } else {
                this.$message.error(res.msg);
              }
            }
          });
        }
      });
    },
    sendcode(e) {
      this.timer();
      let data = {
        lang_type: this.$langType,
        email: localStorage.getItem("code"),
      };
      mailVcode(data).then((res) => {
        if (res.code == 0) {
          this.$message({
            message: this.$t( 'login.text17' ),
            type: "success",
          });
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
        this.timerNull = setTimeout(this.timer, 1000);
      } else {
        clearTimeout(this.timerNull);
        this.time = 60;
        this.btntxt = this.$t( 'login.text14' );
        this.disabled = false;
      }
    },
    rsaData(data) {
      const PUBLIC_KEY = this.pk;
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey(PUBLIC_KEY);
      let result = jsencrypt.encrypt(data);
      return result;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.page {
  background: #f0f2f5;
  overflow: hidden;
  box-sizing: border-box;
  .wrap {
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
      display: flex;
      flex-direction: column;
      align-items: center;
      .data_form {
        width: 600px;
      }
      .submit_btn {
        width: 240px;
        height: 48px;
        line-height: 30px;
        border-radius: 8px;
        font-size: 16px;
        color: #fffffe;
        background: linear-gradient(to right, #5885FD, #2db9f6);
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
.zcoder {
  position: relative;
}
/deep/ .zcoder .el-input__inner {
  padding-right: 73px;
}
.roket_code {
  position: absolute;
  top: -10px;
  right: 0;
}
.get_code {
  position: absolute;
  right: 10px;
  min-width: 55px;
  text-align: center;
  padding: 0 4px;
  line-height: 36px;
  font-size: 16px;
  color: #909090;
  top: 14px;
  border-left: 1px solid #c7c7c7;
}
.text-code:hover {
  cursor: pointer;
  color: #5885FD;
  text-decoration: underline;
}
</style>


