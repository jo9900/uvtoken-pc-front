
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          $t( 'text114' )
        }}</router-link>
        > {{ $t( 'text115' ) }}
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
                :label="$t( 'text116' )"
                prop="country_code"
              >
                <el-select
                  filterable
                  v-model="formLabelAlign.country_code"
                  :placeholder="$t( 'text117' )"
                  style="width: 100%"
                >
                  <el-option
                    :label="$lang == 'zh' ? item.name_cn : item.name_en"
                    :value="item.code"
                    v-for="item in areaList"
                    :key="item.code"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item
                :label="$t( 'text118' )"
                prop="first_name"
              >
                <el-input v-model.trim="formLabelAlign.first_name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <!--label="First  Name"-->
              <el-form-item
                :label="$t( 'text119' )"
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
                :label="$t( 'text120' )"
                prop="id_type"
              >
                <el-select
                  v-model="formLabelAlign.id_type"
                  :placeholder="$t( 'text121' )"
                  style="width: 100%"
                >
                  <el-option
                    :label="$t( 'text122' )"
                    value="1"
                  ></el-option>
                  <el-option
                    :label="$t( 'text123' )"
                    value="2"
                  ></el-option>
                  <el-option
                    :label="$t( 'text124' )"
                    value="3"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="$t( 'text125' )"
                prop="id_number"
              >
                <el-input v-model.trim="formLabelAlign.id_number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="$t( 'text129' )"
                prop="isImg"
              >
                <div class="IDcard_box_div">
                  <div class="IDcard_box">
                    <div class="card-uploader" >
                      <img v-if="id_front" :src="id_front" class="card" />
                      <i v-else class="el-icon-circle-plus-outline
 card-uploader-icon"
                      > &nbsp; {{$t('text130')}}</i>
                      <input type="file" class="uplodinput" @change="fileChange" />
                    </div>
                  </div>
                  <div class="IDcard_box">
                    <div  class="card-uploader card-uploader-back">
                      <img v-if="id_back" :src="id_back" class="card" />
                      <i v-else class="el-icon-circle-plus-outline card-uploader-icon"
                      > &nbsp;{{ $t('text131')}}</i>
                      <input type="file" class="uplodinput" @change="fileChange1" />
                    </div>
                  </div>
                </div>
              </el-form-item>
              <div style="font-size: 14px; color: #b1acac; margin-bottom: 20px">
                {{ $t( 'text142' ) }}
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="$t( 'text132' )"
                prop="birth_date"
              >
                <el-date-picker
                  type="date"
                  value-format="yyyy-MM-dd"
                  :placeholder="$t( 'text133' )"
                  v-model="formLabelAlign.birth_date"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                :label="$t( 'text134' )"
                prop="mobile_no"
              >
                <el-input v-model.trim="formLabelAlign.mobile_no"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button class="bBottn" :loading="loading" @click="subFromData">
            <span>{{ $t( 'text135' ) }}</span>
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
import { compress, dataURLtoFile } from "@/utils/uploadImage";
import { EXIF } from "@/utils/exif";
export default {
  name: "",
  components: { webFoot },
  data() {
    var imgValidator = (rule, value, callback) => {
      if (this.id_front == "" || this.id_back == "") {
        callback(new Error(this.$t("text137")));
      } else {
        callback();
      }
    };
    var IDValidator = (rule, value, callback) => {
      if (this.formLabelAlign.id_type == 1 && this.formLabelAlign.country_code == 'CHN') { // 身份证号码
        var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (idcardReg.test(this.formLabelAlign.id_number)) callback();
        else callback(new Error(this.$t("usercenter.text31")));
      } else {
        callback();
      }
    };
    return {
      BaseUrl: this.$BaseUrl,
      areaList: [],
      id_front: "",
      id_back: "",
      loading: false,
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
            message: this.$t( 'text136' ),
            trigger: "change",
          },
        ],
        first_name: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "blur",
          },
        ],
        id_type: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "change",
          },
        ],
        id_number: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "blur"
          },
          { required: true, trigger: "blur", validator: IDValidator },
        ],
        isImg: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "blur",
            validator: imgValidator
          },

        ],
        birth_date: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "change",
          },
        ],
        mobile_no: [
          {
            required: true,
            message: this.$t( 'text137' ),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {
    'formLabelAlign.id_type' : {
      handler(cur) {
        if (this.formLabelAlign.country_code == 'CHN') {
          if (cur != 1)
            this.$refs["formLabelAlign"].clearValidate('id_number')
          else
            this.$refs["formLabelAlign"].validateField('id_number')
        }
      }
    }
  },
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
                    message: this.$t( 'text138' ),
                    type: "success",
                    duration: 4000,
                  });
                this.$router.push({ path: "/center" });
              } else {
                this.$message.error(
                  this.$t( 'text139' )
                );
              }
            },
            () => {
              this.loading = false;
              this.$message.error(
                this.$t( 'text139' )
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
    isImg(str) {
      return str.search( "(jpg|jpeg|swf|gif|png|JPG|JPEG|SWF|GIF|PNG)$" ) != -1;

    },
    fileChange(e) {
      console.log(this.isImg(e.target.files[0].type));
      var that = this;
      var fr = new FileReader();
      let Orientation;
      let file = e.target.files[0];
      let size = file.size;
      let size1 = size / (1024 * 1024);
      if (size == 0) {
        this.$message.error(this.$t("text142"));
      }
      if (size1 > 4) {
        this.$message.error(this.$t( 'text144' ));
        return;
      }
      let imgType = e.target.files[0].type;
      if (!this.isImg(imgType)) {
        this.$message.error(this.$t("text143"));
        return;
      }

      EXIF.getData(e.target.files[0], function () {
        Orientation = EXIF.getTag(this, "Orientation");
      });
      fr.readAsDataURL(e.target.files[0]);
      fr.onloadend = function (e) {
        let result = this.result;
        let img = new Image();
        img.src = result;
        if (this.result.length <= 500 * 1024) {
          that.id_front = this.result;
          that.formLabelAlign.id_front = file;
        } else {
          img.onload = function () {
            let data = compress(img, Orientation);
            that.id_front = data;
            that.formLabelAlign.id_front = dataURLtoFile(that.id_front, file);
          };
        }
      };

      if (this.id_front != "" && this.id_back != "") {
        this.formLabelAlign.isImg = "#";
      }
    },
    fileChange1(e) {
      var that = this;
      var fr = new FileReader();
      let Orientation;
      let file = e.target.files[0];
      let size = file.size;
      let size1 = size / (1024 * 1024);
      if (size == 0) {
        this.$message.error(this.$t("text142"));
      }
      if (size1 > 4) {
        this.$message.error(this.$t( 'text144' ));
        return;
      }
      let imgType = e.target.files[0].type;
      if (!this.isImg(imgType)) {
        this.$message.error(this.$t("text143"));
        return;
      }
      EXIF.getData(e.target.files[0], function () {
        Orientation = EXIF.getTag(this, "Orientation");
      });
      fr.readAsDataURL(e.target.files[0]);
      fr.onloadend = function (e) {
        let result = this.result;
        let img = new Image();
        img.src = result;
        if (this.result.length <= 500 * 1024) {
          that.id_back = this.result;
          that.formLabelAlign.id_back = file;
        } else {
          img.onload = function () {
            let data = compress(img, Orientation);
            that.id_back = data;
            that.formLabelAlign.id_back = dataURLtoFile(that.id_back, file);
          };
        }
      };
      if (this.id_front != "" && this.id_back != "") {
        this.formLabelAlign.isImg = "#";
      }
    },
    get_areaList() {
      areaList().then((res) => {
        if (res.code == 0) {
          this.areaList = res.data;
        }
      });
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
.IDcard_box_div {
  display: flex;
  padding-left: 40px;
  margin-bottom: 30px;
  .IDcard_box {
    margin-right: 46px;
    .uplodinput {
      width: 100%;
      height: 100%;
      appearance: none;
      -webkit-appearance: none;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
    .card-uploader {
      text-align: center;
      line-height: 120px;
      height: 120px;
      width: 192px;
      font-size: 21px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>

