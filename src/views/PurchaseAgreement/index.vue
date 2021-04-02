
<!-- -->
<template>
  <div class="page">
    <div class="wrap">
      <div class="page_content">
        <div class="name">{{ $t( 'purchase.text1' ) }}</div>
        <div class="text-coaneret">
          <div style="margin-bottom: 17px">
            {{ $t( 'purchase.text2' ) }}
          </div>
          <div style="margin-bottom: 17px">
            {{ $t( 'purchase.text3' ) }}
          </div>
          <div style="margin-bottom: 17px">
            {{ $t( 'purchase.text4' ) }}
          </div>
          <div>{{ $t( 'purchase.text5' ) }}</div>
          <div style="margin-bottom: 20px"></div>
          <div
            style="
              font-size: 18px;
              color: #000;
              font-weight: 600;
              margin-bottom: 20px;
            "
          >
            {{ $t( 'purchase.text6' ) }}
          </div>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text7' )
            }}<span style="color: #426cff"><a href="https://www.uvtoken.com">https://www.uvtoken.com</a></span>
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text8' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text9' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text10' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text11' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text12' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text13' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text14' ) }}
          </p>

          <div
            style="
              font-size: 18px;
              color: #000;
              font-weight: 600;
              margin-bottom: 20px;
            "
          >
            {{ $t( 'purchase.text15' ) }}
          </div>
          <div>
            {{
              $t( 'purchase.text16' )
            }}
          </div>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text17' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text18' ) }}
          </p>
          <div>
            {{
              $t( 'purchase.text19' )
            }}
          </div>

          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text20' ) }}
          </p>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text21' ) }}
          </p>

          <div>
            {{
              $t( 'purchase.text22' )
            }}
          </div>
          <p style="margin-bottom: 40px">
            {{ $t( 'purchase.text23' ) }}
          </p>
          <div>
            {{
              $t( 'purchase.text24' )
            }}
          </div>
          <p>
            {{ $t( 'purchase.text25' ) }}
          </p>
          <p style="padding-left: 40px">
            {{ $t( 'purchase.text26' ) }}
          </p>
          <div>
            {{
              $t( 'purchase.text29' )
            }}
          </div>
          <div style="margin-bottom: 40px">
            {{ $t( 'purchase.text30' ) }}
          </div>
          <div>
           &nbsp;{{
              $t( 'purchase.text31' )
            }}
          </div>
          <div style="margin-bottom: 40px">
            {{ $t( 'purchase.text32' ) }}
          </div>
          <div>
            {{
              $t( 'purchase.text33' )
            }}
          </div>
          <div style="margin-bottom: 40px">
            {{ $t( 'purchase.text34' ) }}
          </div>
          <div>
            {{
              $t( 'purchase.text35' )
            }}
          </div>
          <div style="margin-bottom: 150px">
            {{ $t( 'purchase.text36' ) }}
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
  computed: {},
  watch: {},
  methods: {
    againApply() {
      this.$router.push({ name: "KYCapply", query: { type: 1 } });
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
      .name {
        color: #5885FD;
        font-size: 36px;
        text-align: center;
        margin-bottom: 38px;
      }
      .KYC_logo {
        width: 82px;
        height: 84px;
        margin: 20px auto 0;
      }
      .status {
        font-size: 28px;
        color: #0e0e0e;
        margin: 20px auto 0;
      }
      .describe {
        width: 800px;
        margin: 30px auto 0;
        color: #333333;
        font-size: 16px;
      }
      .again_btn {
        cursor: pointer;
        margin: 80px auto 0;
        width: 240px;
        height: 48px;
        color: #fffffe;
        font-size: 16px;
        line-height: 48px;
        border-radius: 6px;
        background: linear-gradient(to right, #5885FD, #2db9f6);
      }
    }
  }
}
.text-coaneret {
  line-height: 30px;
  color: #545151;
}
</style>

