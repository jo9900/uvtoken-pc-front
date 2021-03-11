
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          languageNav[langType].language_text1
        }}</router-link>
        > {{ languageNav[langType].language_text13 }}
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
            :label="languageNav[langType].language_text14"
            class="zcoder"
            prop="verify_code"
          >
            <el-input
              maxlength="8"
              v-model.trim="dataForm.verify_code"
            ></el-input>
            <div class="roket_code">
              <div v-if="disabled" class="get_code">{{ btntxt }}</div>
              <div v-else class="get_code text-code" @click="sendcode">
                {{ btntxt }}
              </div>
            </div>
          </el-form-item>
          <el-form-item
            :label="languageNav[langType].language_text16"
            prop="password"
            style="position: relative"
          >
            <div class="" style="height: 51px">
              <el-input
                type="password"
                v-if="inputViset"
                v-model.trim="dataForm.password"
                autocomplete="off"
              ></el-input>
              <el-input
                type="text"
                @input="fouseClick"
                :style="{ opacity: inputViset ? '0' : '1' }"
                autocomplete="off"
                v-model.trim="dataForm.password"
                style="position: absolute; top: 0px; left: 0"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item
            :label="languageNav[langType].language_text17"
            prop="againPassword"
            style="position: relative"
          >
            <div class="" style="height: 51px">
              <el-input
                type="password"
                v-if="inputViset"
                v-model.trim="dataForm.againPassword"
              ></el-input>
              <el-input
                type="text"
                @input="fouseClick"
                :style="{ opacity: inputViset ? '0' : '1' }"
                autocomplete="off"
                v-model.trim="dataForm.againPassword"
                style="position: absolute; top: 0px; left: 0"
              ></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-button
          class="submit_btn"
          :loading="loading"
          @click="passwordUpdata"
          >{{ languageNav[langType].language_text18 }}</el-button
        >
      </div>
    </div>
    <webFoot />
  </div>
</template>
<script>
import webFoot from "@/Layout/footer";
import { passwordVcode, resetPassword, pubKey } from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";
import languageNav from "@/language/coander";
import languageNav2 from "@/language/login";
export default {
  name: "",
  components: { webFoot },
  data() {
    var passwordValidator = (rule, value, callback) => {
      if (this.dataForm.password != this.dataForm.againPassword) {
        callback(new Error(this.languageNav[this.$langType].language_text19));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      let codeReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,30}$/;
      if (!codeReg.test(value)) {
        callback(new Error(this.languageNav[this.$langType].language_text20));
      } else {
        callback();
      }
    };
    return {
      disabled: false,
      time: 60,
      timerNull: null,
      btntxt: languageNav[this.$langType].language_text15,
      loading: false,
      inputViset: false,
      dataForm: {
        password: "", // 密码
        againPassword: "", // 确认密码
        verify_code: "", // 验证码
      },
      languageNav: languageNav,
      langType: this.$langType,
      rules: {
        password: [
          {
            required: true,
            message: languageNav[this.$langType].language_text21,
            trigger: "blur",
          },
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        againPassword: [
          {
            required: true,
            message: languageNav[this.$langType].language_text22,
            trigger: "blur",
          },
          { required: true, trigger: "blur", validator: passwordValidator },
        ],
        verify_code: [
          {
            required: true,
            message: languageNav[this.$langType].language_text23,
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
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          let params = {
            email: localStorage.getItem("code"),
            email_verify_code: this.dataForm.verify_code,
            new_password: this.dataForm.againPassword,
          };
          this.loading = true;
          this.getPubKey();
          // 密码加密 sha256 => rsaData
          params.new_password = this.rsaData(sha256(this.dataForm.password));
          resetPassword(params).then((res) => {
            this.loading = false;
            if (res.code == 0) {
              this.$message({
                message: this.languageNav[this.langType].language_text24,
                type: "success",
              });
              this.$router.push("center");
            } else {
              if (res.code == "101504") {
                this.$message.error(
                  languageNav2[this.langType].language_text31
                );
              }
              if (res.code == "101503") {
                this.$message.error(
                  languageNav2[this.langType].language_text32
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
      passwordVcode(data).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.$message({
            message: this.languageNav[this.langType].language_text25,
            type: "success",
          });
        } else {
          if (res.code == "101702") {
            return this.$message.error(
              languageNav2[this.$langType].language_text18
            );
          }
          if (res.code == "101703") {
            return this.$message.error(
              languageNav2[this.$langType].language_text19
            );
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
        this.btntxt = this.languageNav[this.langType].language_text15;
        this.disabled = false;
      }
    },
    getPubKey() {
      pubKey().then((res) => {
        if (res.code == 0) {
          localStorage.setItem("pk", res.data.pub_key);
        }
      });
    },
    rsaData(data) {
      const PUBLIC_KEY = localStorage.getItem("pk");
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey(PUBLIC_KEY);
      let result = jsencrypt.encrypt(data);
      return result;
    },
    fouseClick() {
      this.inputViset = true;
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
        background: linear-gradient(to right, #efcf54, #bf8d08);
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
  color: #efcf54;
  text-decoration: underline;
}
</style>


