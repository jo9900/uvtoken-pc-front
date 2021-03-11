<!-- -->
<template>
  <div class="page">
    <div class="page-content">
      <div class="page-warpp">
        <div class="page-moasat">
          <div class="wolet">
            <template>
              <div class="title-1">什么是助记词</div>
              <div class="article-body">
                <p>去中心化钱包有三个特征：</p>
                <p>&nbsp;</p>
                <p>
                  1、去中心化钱包仅作为钱包地址生成工具并提供相应的服务，钱包提供方并不保存用户的私钥或者助记词等信息；
                </p>
                <p>&nbsp;</p>
                <p>
                  2、钱包的每一笔数字资产存取、转账数据均可在区块链上查询得到；
                </p>
                <p>&nbsp;</p>
                <p>
                  3、用户的数字资产储存在区块链上，而不是由钱包服务商统一管理。
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/components/footer";
import languageNav from "@/language/index";
import { helpDetail } from "@/request/news";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      dataInfo: "",
      id: this.$route.query.id,
      languageNav: languageNav,
      langType: this.$langType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getData() {
      // helpDetail({issueId:this.$route.query.id}).then(res=>{
      //     this.dataInfo = res.data;
      // })
    },
  },
  created() {
    this.getData();
  },

  mounted() {},
};
</script>

<style lang='less' scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.page {
  .page-content {
    min-height: calc(100vh);
    background: #f6f7f9;
    position: relative;
    .page-warpp {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      padding: 50px 0;
      .page-moasat {
        width: 1200px;
        margin: 0 auto;
        padding: 80px 150px 100px 100px;
        display: flex;
        background-color: #fff;
        justify-content: center;
        height: 100%;
      }
      .title-1 {
        text-align: center;
        font-size: 34px;
        color: #272727ff;
        margin-bottom: 48px;
      }
      .title-2 {
        font-size: 14px;
        color: #4c546aff;
        line-height: 30px;
        letter-spacing: 2px;
      }
      .wolet {
        width: 100%;
      }
    }
  }
}

.article-body {
  font-size: 14px;
  color: #4c546aff;
  line-height: 34px;
}
</style>
