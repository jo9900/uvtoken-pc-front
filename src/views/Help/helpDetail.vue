<!-- -->
<template>
  <div class="page">
    <div class="page-content">
      <div class="page-warp">
        <div class="page-moasat">
          <div class="article">
            <div v-html="articleText"></div>

          </div>
<!--          <div>-->
<!--            <iframe :src="src" frameborder="0"></iframe>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { helpDetail } from "@/request/news";
import ArticleMap from './articles/index'
export default {
  name: "",
  data() {
    return {
      dataInfo: "",
      id: '',
      langType: this.$langType,
      articleText: [],
      src: ''
    };
  },
  created() {
    // this.getData();
  },
  watch: {
    '$route': {
      handler(cur) {
        this.id = cur.query.id
      },
      deep: true,
      immediate: true
    }

  },
  mounted() {
    let id = this.id
    this.articleText = ArticleMap.get(id)
  },
  computed: {},
  methods: {
    getData() {
      helpDetail( { issueId: this.id } )
          .then( res => {
            this.src = res.data[ 0 ].fileURL;
          } )
    }
  }
};
</script>

<style lang='less'>

.page {
  .page-content {
    min-height: calc(100vh);
    background: #f6f7f9;
    position: relative;

    .page-warp {
      width: 100%;
      height: 100%;
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
    }
  }
}

.article {

  margin-bottom: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4C546A;
  line-height: 28px;

  .title {
    text-align: center;
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #272727;
    line-height: 48px;
    margin-bottom: 60px;
  }
  .subtitle {
    font-weight: bold;
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
    line-height: 1.5;
    margin-bottom: 14px;
  }
  img{
    margin-bottom: 15px;
  }
  .list {
    padding-left: 20px;
  }
}
</style>
