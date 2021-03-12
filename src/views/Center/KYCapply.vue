
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
        <el-form
          label-position="top"
          ref="formLabelAlign"
          :rules="rules"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-row>
            <el-col :span="24">
              <!--label="Country / Region"-->
              <el-form-item
                :label="languageNav[langType].language_text29"
                prop="country_code"
              >
                <el-select
                  v-model="formLabelAlign.country_code"
                  :placeholder="languageNav[langType].language_text30"
                  style="width: 100%"
                >
                  <el-option
                    :label="langType == 'Chinese' ? item.name_cn : item.name_en"
                    :value="item.code"
                    v-for="item in areaList"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item
                :label="languageNav[langType].language_text31"
                prop="first_name"
              >
                <el-input v-model.trim="formLabelAlign.first_name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <!--label="First  Name"-->
              <el-form-item
                :label="languageNav[langType].language_text32"
                prop="last_name"
              >
                <el-input v-model.trim="formLabelAlign.last_name"></el-input>
              </el-form-item>
            </el-col>
            <!--label="Last  Name"-->
          </el-row>
          <el-row>
            <el-col>
              <!--label="ID Type"-->
              <el-form-item
                :label="languageNav[langType].language_text33"
                prop="id_type"
              >
                <el-select
                  v-model="formLabelAlign.id_type"
                  :placeholder="languageNav[langType].language_text34"
                  style="width: 100%"
                >
                  <el-option
                    :label="languageNav[langType].language_text35"
                    value="1"
                  ></el-option>
                  <el-option
                    :label="languageNav[langType].language_text36"
                    value="2"
                  ></el-option>
                  <el-option
                    :label="languageNav[langType].language_text37"
                    value="3"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="
                  formLabelAlign.id_type == ''
                    ? languageNav[langType].language_text38
                    : formLabelAlign.id_type == 1
                    ? languageNav[langType].language_text39
                    : formLabelAlign.id_type == 2
                    ? languageNav[langType].language_text40
                    : languageNav[langType].language_text41
                "
                prop="id_number"
              >
                <el-input v-model.trim="formLabelAlign.id_number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="languageNav[langType].language_text42"
                prop="isImg"
              >
                <div class="IDcard_box">
                  <el-upload
                    class="card-uploader"
                    action="#"
                    :show-file-list="false"
                    :before-upload="fileChange"
                    accept=".JPG, .PNG, .JPEG,.jpg, .png, .jpeg"
                  >
                    <img v-if="id_front" :src="id_front" class="card" />
                    <i v-else class="el-icon-plus card-uploader-icon"
                      >{{ languageNav[langType].language_text43 }}
                    </i>
                  </el-upload>

                  <el-upload
                    class="card-uploader"
                    action="#"
                    :show-file-list="false"
                    :before-upload="fileChange1"
                    accept=".JPG, .PNG, .JPEG,.jpg, .png, .jpeg"
                  >
                    <img v-if="id_back" :src="id_back" class="card" />
                    <i v-else class="el-icon-plus card-uploader-icon"
                      >{{ languageNav[langType].language_text44 }}
                    </i>
                  </el-upload>
                </div>
              </el-form-item>
              <div style="font-size: 14px; color: #b1acac; margin-bottom: 20px">
                {{ languageNav[langType].language_text87 }}
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="languageNav[langType].language_text45"
                prop="birth_date"
              >
                <el-date-picker
                  type="date"
                  value-format="yyyy-MM-dd"
                  :placeholder="languageNav[langType].language_text46"
                  v-model="formLabelAlign.birth_date"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="languageNav[langType].language_text47"
                prop="mobile_no"
              >
                <el-input v-model.trim="formLabelAlign.mobile_no"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button class="bBottn" :loading="loading" @click="subFromData">
            <span>{{ languageNav[langType].language_text48 }}</span>
          </el-button>
        </el-form>
      </div>
    </div>
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { areaList, addkyc, kycInfo } from "@/request/user";
import languageNav from "@/language/coander";
import * as imageConversion from "image-conversion";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      BaseUrl: this.$BaseUrl,
      areaList: [],
      id_front: "",
      id_back: "",
      loading: false,
      languageNav: languageNav,
      langType: this.$langType,
      formLabelAlign: {
        user_code: localStorage.getItem("code"),
        country_code: "",
        first_name: "",
        last_name: "",
        id_type: "",
        id_number: "",
        id_front: "",
        id_back: "",
        birth_date: "",
        mobile_no: "",
        isImg: "",
      },

      rules: {
        country_code: [
          {
            required: true,
            message: languageNav[this.$langType].language_text49,
            trigger: "change",
          },
        ],
        first_name: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "blur",
          },
        ],
        id_type: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "change",
          },
        ],
        id_number: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "blur",
          },
        ],
        isImg: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "change",
          },
        ],
        birth_date: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "change",
          },
        ],
        mobile_no: [
          {
            required: true,
            message: languageNav[this.$langType].language_text50,
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    subFromData() {
      this.$refs["formLabelAlign"].validate((valid) => {
        if (valid) {
          this.loading = true;
          let formData = new FormData();
          formData.append("modify", this.$route.query.type);
          formData.append("user_code", localStorage.getItem("code"));
          formData.append("country_code", this.formLabelAlign.country_code);
          formData.append("first_name", this.formLabelAlign.first_name);
          formData.append("last_name", this.formLabelAlign.last_name);
          formData.append("id_type", this.formLabelAlign.id_type);
          formData.append("id_number", this.formLabelAlign.id_number);
          formData.append("id_front", this.formLabelAlign.id_front);
          formData.append("id_back", this.formLabelAlign.id_back);
          formData.append("birth_date", this.formLabelAlign.birth_date);
          formData.append("mobile_no", this.formLabelAlign.mobile_no);
          addkyc(formData).then(
            (res) => {
              this.loading = false;
              if (res.code == 0) {
                (this.id_front = ""),
                  (this.id_back = ""),
                  (this.formLabelAlign = {
                    user_code: localStorage.getItem("code"),
                    country_code: "",
                    first_name: "",
                    last_name: "",
                    id_type: "",
                    id_number: "",
                    id_front: "",
                    id_back: "",
                    birth_date: "",
                    mobile_no: "",
                    isImg: "",
                  }),
                  this.$message.success({
                    message: this.languageNav[this.$langType].language_text51,
                    type: "success",
                    duration: 4000,
                  });
                this.$router.push({ path: "/center" });
              } else {
                this.$message.error(
                  this.languageNav[this.$langType].language_text52
                );
              }
            },
            () => {
              this.loading = false;
              this.$message.error(
                this.languageNav[this.$langType].language_text88
              );
            }
          );
        }
      });
    },
    get_kycInfo() {
      kycInfo({ user_code: localStorage.getItem("code") })
      .then((res) => {
        if (res.code == 0) {
          this.formLabelAlign = res.data;
          this.formLabelAlign.isImg = "#";
          this.id_front = this.BaseUrl + res.data.id_front_url;
          this.id_back = this.BaseUrl + res.data.id_back_url;
          this.formLabelAlign.id_front = "";
          this.formLabelAlign.id_back = "";
          this.formLabelAlign.id_type = this.formLabelAlign.id_type.toString();
        }
      });
    },

    get_areaList() {
      areaList().then((res) => {
        if (res.code == 0) {
          this.areaList = res.data.list;
        }
      });
    },

    fileChange(file) {
      console.log(file);
      var testmsg = /^image\/(jpeg|png|jpg)$/.test(file.type);
      if (!testmsg) {
        this.$message.error(this.languageNav[this.$langType].language_text79);
        return false;
      }
      if (file.size / 1024 / 1024 > 4) {
        this.$message.error(this.languageNav[this.$langType].language_text86);
        return;
      }
      imageConversion.compress(file, 0.7).then(
        (res) => {
          this.formLabelAlign.id_front = res;
          this.id_front = URL.createObjectURL(file);
          // this.formLabelAlign.id_front = file.raw;
          if (this.id_front != "" && this.id_back != "") {
            this.formLabelAlign.isImg = "#";
          }
        },
        () => {
          this.$message.error(this.languageNav[this.$langType].language_text79);
          return;
        }
      );
    },
    fileChange1(file) {
      var testmsg = /^image\/(jpeg|png|jpg)$/.test(file.type);
      if (!testmsg) {
        this.$message.error(this.languageNav[this.$langType].language_text79);
        return false;
      }
      if (file.size / 1024 / 1024 > 4) {
        this.$message.error(this.languageNav[this.$langType].language_text86);
        return;
      }
      imageConversion.compress(file, 0.7).then(
        (res) => {
          this.formLabelAlign.id_back = res;
          this.id_back = URL.createObjectURL(file);
          // this.formLabelAlign.id_back = file.raw;
          if (this.id_front != "" && this.id_back != "") {
            this.formLabelAlign.isImg = "#";
          }
        },
        () => {
          this.$message.error(this.languageNav[this.$langType].language_text79);
          return;
        }
      );
    },
    handleAvatarSuccess1(res, file) {},
  },
  created() {
    this.get_areaList();
    if (this.$route.query.type == 1) {
      this.get_kycInfo();
    }
  },
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
      padding: 38px;
      background: #ffffff;
      margin: 20px auto 100px;
      .name {
        text-align: center;
        color: #5885FD;
        font-size: 36px;
      }
      .IDcard_box {
        display: flex;
        .card-uploader {
          width: 280px;
          height: 150px;
          line-height: 145px;
          text-align: center;
          background: #d8f7fa1f;
          border: 1px solid #d8d8d8;
          border-radius: 6px;
          margin-right: 20px;
        }
      }
    }
  }
}

.bBottn {
  margin: 0 auto;
  margin-top: 33px;
  display: block;
  margin-bottom: 45px;
  width: 240px;
  height: 48px;
  line-height: 28px;
  font-size: 16px;
  color: white;
  background: linear-gradient(to right, #5885FD, #2db9f6);
}
.bBottn span:hover {
  text-decoration: underline;
}
.gobaket:hover {
  color: #5885FD;
}
.card {
  max-width: 132px;
  max-height: 150px;
}
</style>

