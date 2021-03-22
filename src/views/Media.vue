<!-- -->
<template>
  <div class="page">
    <div class="page-content">
      <div class="page-warp">
        <div class="page-moasat">
          <div class="article">
            <h1 class="title">{{ $t('text34') }}</h1>
            <p>{{ $t('text111') }}business@uvtoken.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {},
  methods: {
  }
};
</script>

<style lang='less'>
.wrap {
  width: 1200px;
  margin: 0 auto;
}

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
