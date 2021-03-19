<!-- -->
<template>
  <div class="footer">
    <div class="wrap">
      <div class="zaltet">
        <div class="wrap-flr">
          <div class="spower">
            <router-link to="/purchaseAgreement">{{ $t( 'text30' ) }}</router-link>
            <router-link to="/whitePaper" class="maert">{{ $t( 'text31' ) }}</router-link>
            <router-link to="/business">{{ $t( 'text32' ) }}</router-link>
          </div>
          <div class="spower">
            <router-link to="/help">{{ $t( 'text33' ) }}</router-link>
            <router-link to="/wallet" class="maert">{{ $t( 'text3' ) }}</router-link>
            <router-link to="/media">{{ $t( 'text34' ) }}</router-link>
          </div>
          <div class="spower">
            <a style="height: 20px;"> &emsp;&emsp;</a>
            <router-link to="/Dapp" class="maert">Dapp</router-link>
            <router-link to="/">{{ $t( 'text35' ) }}</router-link>
          </div>
        </div>
        <div>
          <div class="wll-rt">
            <div class="lro"><img src="@/assets/img/icon_twiter@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_facebook@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_w09@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_youtube@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_feiji@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_weibo@2x.png" /></div>
            <div class="lro"><img src="@/assets/img/icon_weicat@2x.png" /></div>
          </div>
          <div class="qksot">
            <div style="width: 300px;">
              <el-form class="case_form" :model="validateForm" :rules="rules" ref="validateForm">
                <el-form-item class="form_row" prop="email">
                  <el-input class="row_input"
                            type="text"
                            :placeholder="$t('text36')"
                            v-model.trim="validateForm.email"
                  />
                </el-form-item>
              </el-form>
            </div>
            <div>
              <div class="btn form_btn"
                   role="button"
                   @click="subscribeValidate">
                {{ $t( 'text37' ) }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="footet">
      <div class="lrt"></div>
      <div class="bkoet"><img src="@/assets/img/logo_taft@2x.png" /></div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    var Elowert = ( rule, value, callback ) => {
      // let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
      let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if ( !reg.test( value ) ) {
        callback( new Error( this.$t( 'login.text13' ) ) );
      }
      else {
        callback();
      }
    };
    return {
      validateForm: {
        email: "",
      },
      rules: {
        email: [
          { required: true, message: this.$t( 'text36' ), trigger: 'blur' },
          { validator: Elowert, required: true, trigger: "blur" }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    subscribeValidate() {
      this.$refs['validateForm'].validate(valid=> {
        if (valid) {
          // TODO 订阅接口
          this.$message.success('订阅成功')
          this.subscribe()
        }
      })
    },
    subscribe() {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang='less' scoped>
.footer {
  background: #fff;
  padding-top: 59px;

  .wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .foot_logo {
      margin: 0 auto;
      width: 200px;
    }

    .foot_link {
      width: 230px;
      display: flex;
      justify-content: space-between;

      .lin_img {
        width: 35px;
        height: 35px;
      }
    }

    .wrap-flr {
      display: flex;
      align-items: center;
      width: 596px;
    }

    .spower {
      margin-right: 70px;
    }

    .spower a {
      color: #7B839A;
      font-size: 14px;
      display: block;
    }

    .maert {
      margin: 16px 0;
    }

    .spower a:hover {
      color: #5885FDFF;
      text-decoration: underline !important;
    }

    .zaltet {
      display: flex;
      padding-bottom: 19px;
    }

    .wll-rt {
      display: flex;
      margin-bottom: 30px;
    }

    .wll-rt .lro {
      margin-right: 22px;
    }

    .wll-rt img {
      width: 24px;
      height: 24px;
    }

    .qksot {
      display: flex;
    }
  }
}

.lrt {
  width: 1200px;
  height: 1px;
  background: #EBEBEB;
  margin: 0 auto;
}

.logo-stl {

  font-size: 24px;
  font-family: AlibabaPuHuiTi;
  font-weight: bold;
  color: #ffffff;

}

.taf-kot {
  font-size: 24px;
  font-family: zcoolwenyiti;
  font-weight: 400;
  color: #ffffff;
  line-height: 48px;
}

.flext-all1 {

}

.flext-all2 {
  width: 200px;
  font-size: 24px;
  margin-top: 18px;
}

/deep/ .el-input__inner {
  border-radius: 0px;
}

.form_btn {
  width: 100px;
  margin-top: 1px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 12px;
  background-color: #5885FDFF;
  user-select: none;
}

.form_btn:hover {
  cursor: pointer;
  background-color: #4067fd;
}

.bkoet {
  padding: 10px 0;
}

.bkoet img {
  width: 111px;
  margin: 0 auto;
}

.footet {
  width: 1200px;
  margin: 0 auto;
  text-align: center;

}

</style>

