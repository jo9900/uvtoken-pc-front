
<template>
  <div class="page">
    <div class="wrap">
      <input type="password" style="display: none" />
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          $t( 'text114' )
        }}</router-link>
        > {{ $t( 'text164' ) }}
      </div>
      <div class="page_content">
        <div class="ltoet">
          <div class="qs_rt">{{ $t( 'text165' ) }}</div>
          <div class="wolaet">
            <el-form
              class="data_form"
              label-position="right"
              :rules="rules"
              label-width="150px"
              ref="dataForm"
              :model="dataForm"
            >
              <el-form-item :label="$t( 'text166' )">
                <el-input
                  type="text"
                  disabled
                  v-model="apply_taft_amount"
                ></el-input>
              </el-form-item>
              <el-form-item
                :label="$t( 'text167' )"
                prop="to_account"
              >
                <el-input
                  type="text"
                  :placeholder="$t( 'text169' )"
                  v-model.trim="dataForm.to_account"
                ></el-input>
              </el-form-item>
              <el-form-item
                :label="$t( 'text168' )"
                prop="taft_amount"
              >
                <el-input
                  type="number"
                  v-model.trim="dataForm.taft_amount"
                  :placeholder="$t( 'text170' )"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button class="submit_btn" @click="subFrom">{{
              $t( 'text41' )
            }}</el-button>
          </div>
        </div>

        <div>
          <div class="qs_rtet">{{ this.$t( 'text186' ) }}</div>
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column
              prop="apply_time"
              :label="$t( 'text146' )"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.time | trimet(that) }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="round"
              :label="$t( 'text171' )"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="apply_amount"
              :label="$t( 'text172' ) + '  (UVT)'"
            >
              <template slot-scope="scope">
                <span style="color: red" v-if="scope.row.transfer_type == 0">{{
                  scope.row.taft_amount
                }}</span>
                <span style="color: #17d241" v-if="scope.row.transfer_type == 1"
                  >+{{ scope.row.taft_amount }}</span
                >
              </template>
            </el-table-column>
            <template slot="empty">
              <div class="noData">
                {{ $t( 'text154' ) }}
              </div>
            </template>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="form.page_size"
            layout="prev, pager, next"
            :total="total"
            background
          ></el-pagination>
        </div>
      </div>
    </div>

    <el-dialog
      :title="$t( 'text173' )"
      :lock-scroll="false"
      :visible.sync="ruleDialogVisible"
      width="480px"
      center
      :before-close="ruleHandleClose"
    >
      <el-form
        class="data_form"
        label-position="right"
        :rules="rules1"
        ref="dataForm1"
        :model="dataForm1"
      >
        <div style="margin-bottom: 20px">
          <span style="padding-left: 8px">
            {{ $t( 'text174' ) }}：<span
              style="color: #5885FD"
              >{{ dataForm.taft_amount }} UVT</span
            ></span
          >
        </div>
        <el-form-item
          :label="$t( 'text175' )"
          prop="password"
          style="position: relative"
        >
          <div class="" style="height: 80px">
            <el-input
              type="password"
              name="wsl"
              v-if="inputViset"
              v-model="dataForm1.password"
              autocomplete="off"
            ></el-input>
            <el-input
              type="text"
              name="wslt"
              @input="fouseClick"
              :style="{ opacity: inputViset ? '0' : '1' }"
              autocomplete="off"
              v-model="dataForm1.password"
              style="position: absolute; top: 40px; left: 0"
            ></el-input>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-btn-wrap">
            <div role="button"
                 class="dialog-btn confirm-button"
                 @click="Payment">
              {{ $t('text41') }}
            </div>
            <div role="button"
                 class="dialog-btn cancel-button"
                 @click="ruleDialogVisible = false">
              {{ $t('text42') }}
            </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  myPreSale,
  recordsList,
  taftBoert,
  passwordVerify,
} from "@/request/user.js";
import { pubKey } from "@/request/login.js";
const sha256 = require("js-sha256").sha256;
import { JSEncrypt } from "jsencrypt";
export default {
  name: "",
  data() {
    var validateSurnmae = (rule, value, callback) => {
      if (parseInt(value) < 1) {
        callback(new Error(this.$t( 'text176' )));
      } else if (!/(^[1-9]\d*$)/.test(value)) {
        callback(new Error(this.$t( 'text177' )));

      } else {
        callback();
      }
    };
    var validatePrice = (rule, value, callback) => {
      if (parseInt(value) > parseInt(this.apply_taft_amount)) {
        callback(new Error(this.$t( 'text178' )));
      } else {
        callback();
      }
    };

    var Elowert = (rule, value, callback) => {
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!reg.test(value)) {
        callback(new Error(this.$t( 'text13' )));
      } else {
        callback();
      }
    };

    return {
      pk: '',
      that: this,
      apply_taft_amount: "0",
      ruleDialogVisible: false,
      inputViset: false,
      loadingBtn: false,
      dataForm: {
        user_code: localStorage.getItem("code"),
        to_account: "",
        taft_amount: "",
        auth_code: "",
      },
      dataForm1: {
        user_code: localStorage.getItem("code"),
        password: "",
      },
      form: {
        user_code: localStorage.getItem("code"),
        page_no: 1,
        page_size: 50,
      },
      tableData: [],
      total: 0,
      langType: this.$langType,
      rules: {
        to_account: [
          {
            required: true,
            message: this.$t( 'text169' ),
            trigger: "blur",
          },
          { required: true, validator: Elowert, trigger: "blur" },
        ],
        taft_amount: [
          {
            required: true,
            message: this.$t( 'text170' ),
            trigger: "blur",
          },
          { required: true, validator: validateSurnmae, trigger: "blur" },
          { required: true, validator: validatePrice, trigger: "blur" },
        ],
      },

      rules1: {
        password: [
          {
            required: true,
            message: this.$t( 'text179' ),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},

  methods: {
    handleCurrentChange(val) {
      this.form.page_no = val;
      this.getList();
    },

    getList() {
      let params = this.form;
      recordsList(params).then((res) => {
        if (res.code == 0) {
          this.tableData = res.data;
          this.total = res.data.count;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    Payment() {
      this.$refs["dataForm1"].validate(async (valid) => {
        if (valid) {
          this.loadingBtn = true;

          let resData = await pubKey();
          if (resData.code == 0) {
            this.pk = resData.data.PubKey;
          }
          passwordVerify({
              user_code: this.dataForm1.user_code,
              password: this.rsaData(sha256(this.dataForm1.password)),
            }
          ).then((res) => {
            if (res.code == 0) {
              this.ruleDialogVisible = false;
              this.dataForm.auth_code = res.data.auth_code;
              taftBoert(this.dataForm).then((res) => {
                if (res.code == 0) {
                  this.loadingBtn = false;
                  this.$message.success(
                    this.$t( 'text180' )
                  );
                  this.apply_taft_amount = res.data.taft_balance_amount
                    ? res.data.taft_balance_amount + " UVT"
                    : "0 UVT";
                  this.dataForm = {
                    user_code: localStorage.getItem("code"),
                    to_account: "",
                    taft_amount: "",
                  };
                  this.form.page_no = 1;
                  this.getList();
                } else {
                  this.loadingBtn = false;
                  if (res.code == "102603") {
                    this.$message.error(
                      this.$t( 'text181' )
                    );
                  }
                  if (res.code == "102606") {
                    this.$message.error(
                      this.$t( 'text182' )
                    );
                  }
                  if (res.code == "102607") {
                    this.$message.error(
                     this.$t( 'text183' )
                    );
                  }
                  if (res.code == "103001") {
                    this.dataForm1.password = "";
                    this.$message.error(
                      this.$t( 'text184' )
                    );
                  }
                }
              });

            } else {
              this.$message.error(this.$t( 'text185' ));
              this.loadingBtn = false;
            }
          });
        }
      });
    },
    subFrom() {
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          this.dataForm1.password = "";
          this.dataForm1.auth_code = "";
          this.ruleDialogVisible = true;
          this.$nextTick(() => {
            this.$refs.dataForm1.clearValidate();
          });
        }
      });
    },
    getMyPreSale() {
      let params = {
        code: localStorage.getItem("code"),
      };
      myPreSale(params).then((res) => {
        if (res.code == 0) {
          this.apply_taft_amount = res.data.apply_taft_amount
            ? res.data.apply_taft_amount + " UVT"
            : "0 UVT";
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    rsaData(data) {
      const PUBLIC_KEY = this.pk;
      let jsencrypt = new JSEncrypt();
      jsencrypt.setPublicKey(PUBLIC_KEY);
      let result = jsencrypt.encrypt(data);
      return result;
    },
    fouseClick() {
      this.inputViset = true;
    },
  },
  created() {
    this.form.user_code = localStorage.getItem("code");
    this.getMyPreSale();
  },
  mounted() {
    this.getList();
  },
  filters: {
    trimet(trime, that) {
      let parsTrme = that
        .$moment(Math.floor(trime * 1000))
        .format("YYYY-MM-DD HH:mm");
      return parsTrme;
    },
  },
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
      min-height: 800px;
      background: #ffffff;
      text-align: center;
    }
  }
}

.submit_btn {
  width: 329px;
  height: 48px;
  margin-left: 62px;
  line-height: 24px;
  border-radius: 8px;
  margin-top: 30px;
  font-size: 16px;
  color: #fffffe;
  background: linear-gradient(to right, #5885FD, #2db9f6);
  text-align: center;
  cursor: pointer;
}
.ltoet {
  margin-bottom: 63px;
}
.qs_rt {
  text-align: left;
  border-left: 5px solid #5885FD;
  padding-left: 9px;
  margin-bottom: 25px;
}
.qs_rtet {
  text-align: left;
  border-left: 5px solid #5885FD;
  padding-left: 9px;
  margin-bottom: 25px;
}
.wolaet {
  margin: 0 auto;
  width: 493px;
}
</style>


