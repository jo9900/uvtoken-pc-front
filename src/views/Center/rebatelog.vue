
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_indicator">
        <router-link class="gobaket" dir="ltr" to="/center">{{
          languageNav[langType].language_text1
        }}</router-link>
        > {{ languageNav[langType].language_text8 }}
      </div>
      <div class="page_content">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column
            prop="rebate_time"
            :label="languageNav[langType].language_text3"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.rebate_time">{{
                scope.row.rebate_time | trimet(that)
              }}</span>
              <span v-else></span>
            </template>
          </el-table-column>
          <el-table-column
            prop="username"
            :label="languageNav[langType].language_text9"
          ></el-table-column>

          <el-table-column
            prop="round "
            :label="languageNav[langType].language_text70"
          >
            <template slot-scope="scope">
              <span>{{
                scope.row.rebate_level == 1
                  ? languageNav[langType].language_text71
                  : languageNav[langType].language_text72
              }}</span>
            </template>
          </el-table-column>

          <el-table-column
            prop="round "
            :label="languageNav[langType].language_text4"
          >
            <template slot-scope="scope">
              <span>
                {{
                  scope.row.round == 1
                    ? languageNav[langType].language_text73
                    : scope.row.round == 2
                    ? languageNav[langType].language_text74
                    : languageNav[langType].language_text89
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="apply_amount"
            :label="languageNav[langType].language_text7 + '    (USDT)'"
          ></el-table-column>
          <el-table-column
            prop="rebate_amount"
            :label="languageNav[langType].language_text10 + '    (USDT)'"
          ></el-table-column>

          <template slot="empty">
            <div class="noData">
              {{ languageNav[langType].language_text11 }}
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
    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/Layout/footer";
import { rebateLog } from "@/request/user.js";
import languageNav from "@/language/coander";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      that: this,
      form: {
        user_code: "",
        page_no: 1,
        page_size: 50,
      },
      tableData: [],
      total: 0,
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleCurrentChange(val) {
      this.form.page_no = val;
      this.getList();
    },

    getList() {
      let params = this.form;
      rebateLog(params).then((res) => {
        if (res.code == 0) {
          this.tableData = res.data.records;
          this.total = res.data.total;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  },
  created() {
    this.form.user_code = localStorage.getItem("code");
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
</style>


