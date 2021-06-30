<template>
  <div class="page">
    <div class="page-content">
      <div class="wrap">
        <div class="logo">
          <img class="pic_txt" src="../../assets/img/pic_txt@2x.png" alt="UvToken">
          <div :class="['pic_fbt_bg', $lang]">
            <span>{{ $t("presale.text71") }}</span>
            <img src="../../assets/img/pic_fbt_bg.png" alt="pic_fbt_bg">
          </div>
        </div>
        <div class="block">
          <div>
            <div class="time-line"></div>
            <img class="time-point" src="../../assets/img/pic_yd_h@2x.png" alt="point">
            <img class="time-point" src="../../assets/img/pic_yd_h@2x.png" alt="point">
            <img class="time-point" src="../../assets/img/pic_yd_h@2x.png" alt="point">
          </div>
          <div class="block-title-wrap">
            <div><img src="@/assets/img/pic_txt_bg@2x.png" /></div>
            <div class="block-title-text">{{ $t( 'presale.text15' ) }}</div>
          </div>
          <div class="block-description">
            {{ $t( 'presale.text1' ) }}
          </div>
<!--          第一阶段-->
          <div class="stage-wrap">
            <div class="stage-main-wrap">
                <div class="middle-wrap">
                  <div class="stage-title">
                    {{ $t( 'presale.text66' ) }}
                    <span class="sold-out" v-if="preInfo1.status == 2">
                      {{ $t('presale.text17') }}
                    </span>
                  </div>
                  <div class="stage-info-wrap">
                    <div class="stage-info-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    <div class="stage-info-right">
                      <div>{{ preInfo1.from_date }} -
                        <span v-if="preInfo1.to_date !== '9999-12-30'">
                          {{ preInfo1.to_date }}</span>
                        <span v-else>{{ $t( 'presale.text65' ) }}</span>
                      </div>
                      <div>{{ preInfo1.price }} USDT</div>
                      <div>{{ calcTotal1 }} USDT</div>
                    </div>
                  </div>
                </div>
                <div class="stage-progress-wrap" v-if="preInfo1.status == 2">
                  <div class="stage-progress">
                    <img src="@/assets/img/pic_yq@2x.png" />
                    <div class="stage-progress-center-text">
                      <span>100</span>
                      <span style="font-size: 13px">%</span>
                    </div>
                  </div>
                  <div class="progress-text"> {{ $t( 'presale.text27' ) }}</div>
                </div>
                <div :class="['presale-btn', {'access': round == 1 && roundstatus == 1 }]"
                     role="button"
                     @click="clickBefore(1)"
                     v-else
                >
                  <span v-if="!(round == 1 && roundstatus == 1)"> {{ $t( 'presale.text69' ) }}</span>
                  <span v-else>{{ $t( 'presale.text61' ) }}</span>
                </div>
            </div>
          </div>
<!--          第二阶段-->
          <div class="stage-wrap">
            <div class="stage-main-wrap">
                <div class="middle-wrap">
                  <div class="stage-title">
                    {{ $t( 'presale.text67' ) }}
                    <span class="sold-out" v-if="preInfo2.status == 2">
                      {{ $t('presale.text17') }}
                    </span>
                  </div>
                  <div class="stage-info-wrap">
                    <div class="stage-info-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    <div class="stage-info-right">
                      <div v-if="preInfo2.from_date == '1970-01-01'">
                        {{ $t('presale.text7') }}
                      </div>
                      <div v-else>{{ preInfo2.from_date }} -
                        <span v-if="preInfo2.to_date !== '9999-12-30'">{{ preInfo2.to_date }}</span>
                        <span v-else>{{ $t( 'presale.text65' ) }}</span>
                      </div>
                      <div>{{ preInfo2.price }} USDT</div>
                      <div>{{ calcTotal2 }} USDT</div>
                    </div>
                  </div>
                </div>
                <div class="stage-progress-wrap" v-if="preInfo2.status == 2">
                  <div class="stage-progress">
                    <img src="@/assets/img/pic_yq@2x.png" />
                    <div class="stage-progress-center-text">
                      <span>100</span>
                      <span style="font-size: 13px">%</span>
                    </div>
                  </div>
                  <div class="progress-text"> {{ $t( 'presale.text27' ) }}</div>
                </div>
                <div :class="['presale-btn', {'access': round == 2 && roundstatus == 1 }]"
                     role="button"
                     @click="clickBefore(2)"
                     v-else
                >
                  <span v-if="!(round == 2 && roundstatus == 1)"> {{ $t( 'presale.text69' ) }}</span>
                  <span v-else>{{ $t( 'presale.text61' ) }}</span>
                </div>
            </div>
          </div>
<!--          第三阶段-->
          <div class="stage-wrap">
            <div class="stage-main-wrap">
                <div class="middle-wrap">
                  <div class="stage-title">
                    {{ $t( 'presale.text68' ) }}
                    <span class="sold-out" v-if="preInfo3.status == 2">
                      {{ $t('presale.text17') }}
                    </span>
                  </div>
                  <div class="stage-info-wrap">
                    <div class="stage-info-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    <div class="stage-info-right">
                      <div v-if="preInfo3.from_date == '1970-01-01'">
                        {{ $t('presale.text7') }}
                      </div>
                      <div v-else>{{ preInfo3.from_date }} -
                        <span v-if="preInfo3.to_date !== '9999-12-30'">
                          {{ preInfo3.to_date }}</span>
                        <span v-else>{{ $t( 'presale.text65' ) }}</span>
                      </div>
                      <div>{{ preInfo3.price }} USDT</div>
                      <div>{{ calcTotal3 }} USDT</div>
                    </div>
                  </div>
                </div>
                <div class="stage-progress-wrap" v-if="preInfo3.status == 2">
                  <div class="stage-progress">
                    <img src="@/assets/img/pic_yq@2x.png" />
                    <div class="stage-progress-center-text">
                      <span>100</span>
                      <span style="font-size: 13px">%</span>
                    </div>
                  </div>
                  <div class="progress-text"> {{ $t( 'presale.text27' ) }}</div>
                </div>
                <div :class="['presale-btn', {'access': round == 3 && roundstatus == 1 }]"
                     role="button"
                     @click="clickBefore(3)"
                     v-else
                >
                  <span v-if="!(round == 3 && roundstatus == 1)"> {{ $t( 'presale.text69' ) }}</span>
                  <span v-else>{{ $t( 'presale.text61' ) }}</span>
                </div>
            </div>
          </div>
        </div>

        <div class="block" style="margin-bottom: auto">
          <div>
            <div class="time-line last-round"></div>
            <img class="time-point" src="../../assets/img/pic_yd_h@2x.png" alt="point">
          </div>
          <div class="block-title-wrap">
            <div><img src="@/assets/img/pic_txt_bg@2x.png" /></div>
            <div class="block-title-text"> {{ $t( 'presale.text5' ) }}</div>
          </div>
          <div class="block-description">
            {{ $t( 'presale.text6' ) }}
          </div>
          <div class="stage-wrap">
            <div class="stage-main-wrap">
                <div class="middle-wrap">
                  <div class="stage-title">
                    {{ $t( 'presale.text5' ) }}
                    <span class="sold-out" v-if="preInfo4.status == 2">
                      {{ $t('presale.text17') }}
                    </span>
                  </div>
                  <div class="stage-info-wrap">
                    <div class="stage-info-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    <div class="stage-info-right">
                      <div v-if="preInfo4.from_date == '1970-01-01'">
                        {{ $t('presale.text7') }}
                      </div>
                      <div v-else>{{ preInfo4.from_date }}</div>
                      <div>{{ $t( 'presale.text7' ) }}</div>
<!--                      <div>{{ preInfo1.price }} USDT</div>-->
                      <div>{{ $t( 'presale.text7' ) }}</div>
                    </div>
                  </div>
                </div>

              <div class="stage-progress-wrap" v-if="preInfo4.status == 2">
                <div class="stage-progress">
                  <img src="@/assets/img/pic_yq@2x.png" />
                  <div class="stage-progress-center-text">
                    <span>100</span>
                    <span style="font-size: 13px">%</span>
                  </div>
                </div>
                <div class="progress-text"> {{ $t( 'presale.text27' ) }}</div>
              </div>
            </div>
          </div>
          <div :class="['presale-btn last-btn', {'access': round == lastRound && roundstatus == 1 }]"
               role="button"
               @click="clickBefore(4)"
               v-if="preInfo4.status !=2 "
          >
            <span v-if="!(round == lastRound && roundstatus == 1)">{{ $t( 'presale.text69' ) }}</span>
            <span v-else>{{ $t( 'presale.text61' ) }}</span>
          </div>
        </div>

        <!-- 首轮抢购 弹窗-->
        <el-dialog :title="$t('presale.text15')"
                   :visible.sync="firstDialogVisible"
                   custom-class="firstDialogVisible"
                   width="580px"
                   center
                   :before-close="firstHandleClose"
                   :lock-scroll="false"
        >
          <div class="dialog_body">
            <el-form
                label-position="top"
                label-width="80px"
                :rules="rules"
                :model="presaleForm"
                ref="presaleForm"
            >
              <el-row>
                <el-col :span="24">
                  <el-progress
                      class="progress"
                      :stroke-width="18"
                      :percentage="percentage"
                  ></el-progress>
                  <div class="progress_info">
                    <div dir="auto">
                      <template v-if="round != lastRound">
                        <template v-if="$lang=='en'">{{ preInfo.progress }}
                          {{ $t( 'presale.text30' ) }}
                        </template>
                        <template v-else>{{ $t( 'presale.text30' ) }} {{ preInfo.progress }}
                          {{ $t( 'presale.text26' ) }}
                        </template>
                      </template>
                      <template v-else>{{ $t( 'presale.text27' ) }} {{ preInfo.progress }}%
                      </template>
                    </div>
                    <div dir="auto">
                      {{ $t( 'presale.text28' ) }}
                      <template v-if="round != lastRound"> {{ preInfo.total }} {{ $t( 'presale.text26' ) }}
                      </template>
                      <template v-else>{{ preInfo.total ? preInfo.total.replace( /\B(?=(?:\d{3})+\b)/g, ',' ) : "0" }}
                        USDT
                      </template>
                    </div>
                    <!--{{preInfo.total?preInfo.total.replace(/\B(?=(?:\d{3})+\b)/g, ','):"0"}} USDT-->
                  </div>
                </el-col>
                <el-col :span="24">
                  <el-form-item :label="$t( 'presale.text29' )">
                    <el-input :placeholder="preInfo.price+ ' USDT'" disabled size="medium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item
                      :label="round != lastRound
                      ? $t( 'presale.text31' ) +'（1'+$t( 'presale.text26' ) +'='+ preInfo.pre_amount+' UVT）'
                      :$t( 'presale.text32' )"
                      prop="book_amount" style="position: relative">
                    <el-input type="text"
                              v-model.trim="presaleForm.book_amount"
                              :placeholder="round!=lastRound
                                ? $t( 'presale.text33' )
                                : $t( 'presale.text34' )"
                              size="medium"
                    ></el-input>
                    <div class="skert" v-if="round != lastRound">
                      {{ $t( 'presale.text26' ) }}
                    </div>
                    <div class="skert" style="width: 42px;" v-else>UVT</div>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item :label="$t( 'presale.text35' )">
                    <div class="priceValue">
                      {{ totalAmount }}
                    </div>
                    <div class="skert" style="top: 1px;">
                      USDT
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item id="elcheckbox">
                    <el-checkbox v-model="presaleChecked" ></el-checkbox>
                    <span>  {{ $t( 'presale.text36' ) }} <span class="sgStyle" @click="koserxy">【{{ $t( 'presale.text37' ) }}】</span></span>
                  </el-form-item>
                </el-col>

              </el-row>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button
                  type="primary" :loading="loading" class="restBottn"
                   @click="nextPay">{{ $t( 'presale.text41' ) }}
              </el-button>
          </span>
        </el-dialog>
        <!-- 首轮抢购 弹窗 end-->

        <!--&lt;!&ndash; 首轮付款 弹窗 &ndash;&gt;firstPayDialogVisible=-->
        <el-dialog :title="
            round!=lastRound ? $t( 'presale.text59' )
            :$t( 'presale.text40' )"
                   :visible.sync="firstPayDialogVisible"
                   custom-class="firstPayDialogVisible"
                   width="580px"
                   center
                   :before-close="firstPayHandleClose"
                   :lock-scroll="false"
        >
          <div class="dialog_body">
            <div style="width: 100%;
                background-color: rgb(255, 237, 237);
                padding: 10px 14px;
                font-size: 12px;
                color: red;
                line-height: 14px;">{{ $t( 'presale.text58' ) }}
            </div>
            <div class="pay_name">{{ $t( 'presale.text42' ) }}</div>
            <div class="pay_num">{{ totalAmount }} USDT</div>
            <div class="pay_omni_name">{{ $t( 'presale.text43' ) }}</div>
            <div class="pay_omni_row">
              <div class="omni" id="omni">{{ charge_address }}</div>
              <div class="copy" @click="copyArticle">{{ $t( 'presale.text45' ) }}</div>
            </div>
            <div style="text-align: center" v-if="charge_address">
              <div id="qrcode">
                <!--                <img src="@/assets/logo.png"/>-->
              </div>
              <div class="">{{ $t( 'presale.text64' ) }}</div>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button
                  type="primary"
                  class="restBottn"
                  @click="firstPayDialogVisible = false"
              >
                {{ $t( 'presale.text46' )}}
              </el-button>
          </span>
        </el-dialog>
        <!-- 首轮付款 弹窗 end-->


        <!-- 登录提示窗 弹窗 -->
        <el-dialog :title="$t( 'presale.text18' )" :visible.sync="loginDialogVisible" width="400px"
                   center :lock-scroll="false" :before-close="loginHandleClose">
          <div class="contt-text">
            {{ $t( 'presale.text19' ) }}
          </div>
          <span slot="footer" class="dialog-btn-wrap">
                <div role="button"
                     class="dialog-btn confirm-button"
                     @click="toLogin">{{ $t('presale.text20') }}
                </div>
                <div role="button"
                     class="dialog-btn cancel-button"
                     @click="loginDialogVisible = false">{{ $t('presale.text21') }}
                </div>
          </span>
        </el-dialog>
        <!-- 登录提示窗 弹窗 end-->

        <!-- KYC提示窗 弹窗 -->
        <el-dialog
            :visible.sync="KYC_DialogVisible"
            :lock-scroll="false"
            width="400px"
            center
            :before-close="KYCHandleClose">
          <div class="contt-text">
            {{ $t( 'presale.text12' ) }}
          </div>
          <span slot="footer" class="dialog-btn-wrap">
                <div role="button"
                     class="dialog-btn confirm-button"
                     @click="toKYC">{{ $t('presale.text22') }}
                </div>
                <div role="button"
                     class="dialog-btn cancel-button"
                     @click="KYC_DialogVisible = false">{{ $t('presale.text21') }}
                </div>
          </span>
        </el-dialog>
        <!-- KYC提示窗 弹窗 end-->

        <!-- KYC审核中 弹窗 -->
        <el-dialog :visible.sync="KYC_loading_DialogVisible" :lock-scroll="false" width="400px">
          <div class="contt-text">
            {{ $t( 'presale.text12' ) }}
          </div>
          <span slot="footer" class="dialog-btn-wrap">
              <div role="button"
                   class="dialog-btn confirm-button"
                   @click="KYC_loading_DialogVisible = false">
                {{ $t('presale.text47') }}
              </div>
          </span>
        </el-dialog>
        <!-- KYC审核中 弹窗 end-->
        <!-- KYC审核中 弹窗 -->
        <el-dialog :visible.sync="KYC_error_DialogVisible" :lock-scroll="false" width="400px">
          <div class="contt-text">
            <div>{{ $t( 'presale.text12' ) }}</div>
          </div>
          <span slot="footer" class="dialog-btn-wrap">
              <div role="button"
                   class="dialog-btn confirm-button"
                   @click="KYC_error_DialogVisible = false">
                {{ $t('presale.text47') }}
              </div>
          </span>
        </el-dialog>
        <!-- KYC审核中 弹窗 end-->
      </div>
    </div>
  </div>
</template>


<script>
import { preSale, round } from '@/request/presale.js'
import { userInfo, subBook } from '@/request/user.js'
import QRCode from 'qrcodejs2'
export default {
  name: '',
  data() {
    var roundtext = ( rule, value, callback ) => {
      if ( value != '' )
        return callback()
      if ( this.round != this.lastRound )
        callback( new Error( this.$t( 'presale.text38' ) ) )
      else
        callback( new Error( this.$t( 'presale.text49' ) ) )
    }

    var validateSurnmae = ( rule, value, callback ) => {
      if ( this.round != this.lastRound ) {
        if ( value < 1 ) {
          callback( new Error( this.$t( 'presale.text54' ) ) )
        }
        else if ( !( /(^[1-9]\d*$)/.test( value ) ) ) {
          callback( new Error( this.$t( 'presale.text49' ) ) )
        }
        else if (value > this.preInfo.total - this.preInfo.progress) {
          callback(
              new Error((this.$t( 'presale.text70' ) +
                  (this.preInfo.total - this.preInfo.progress))
              )
          )
        }
        else {
          this.totalAmount = parseInt( value * this.preInfo.pre_amount * this.preInfo.price )
          callback()
        }
      }
      else {
        let reg = /^[1-9][0-9]*0{2}$/
        if ( !( reg.test( value ) ) ) {
          callback( new Error( this.$t( 'presale.text50' ) ) )

        }
        else {
          this.totalAmount = value * this.preInfo.price
          callback()
        }
      }

    };
    return {
      lastRound: 4,
      percentage: '',
      userInfo: {},
      roundtext: "",
      isLogin: false,
      roundstatus: 0,
      firstDialogVisible: false,
      firstPayDialogVisible: false,
      loginDialogVisible: false,
      KYC_DialogVisible: false,
      KYC_loading_DialogVisible: false,
      KYC_error_DialogVisible: false,

      presaleForm: {
        book_amount: ""
      },
      presaleChecked: false,
      totalAmount: 0,
      round: -1,
      loading: false,
      preInfo: {},
      preInfo1: {},
      preInfo2: {},
      preInfo3: {},
      preInfo4: {},
      charge_address: "",//收货地址
      rules: {
        book_amount: [
          { required: true, validator: roundtext, trigger: 'blur' },
          { required: true, validator: validateSurnmae, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    calcTotal1() {
      const { pre_amount = 0, total = 0,  price = 0 } = this.preInfo1
      return (pre_amount * total * price)
          .toString()
          .replace( /\B(?=(?:\d{3})+\b)/g, ',' )
    },
    calcTotal2() {
      const { pre_amount = 0, total = 0,  price = 0 } = this.preInfo2
      return (pre_amount * total * price)
          .toString()
          .replace( /\B(?=(?:\d{3})+\b)/g, ',' )
    },
    calcTotal3() {
      const { pre_amount = 0, total = 0,  price = 0 } = this.preInfo3
      return (pre_amount * total * price)
          .toString()
          .replace( /\B(?=(?:\d{3})+\b)/g, ',' )
    },
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from && from.name === 'purchaseAgreement') {

          vm.presaleForm.book_amount = vm.$store.state.book_amount
          vm.totalAmount = vm.$store.state.totalAmount
          vm.presaleChecked = vm.$store.state.presaleChecked
          vm.firstDialogVisible = vm.$store.state.firstDialogVisible
      }
      vm.isLogin = !!localStorage.getItem( 'token' );
    })
  },
  methods: {
    calc_precentage() {
      let pre = 0
      if (this.round == this.lastRound) {
        pre = parseInt(this.preInfo.progress)
      }else if (this.preInfo.progress == 0) {
        pre = 0
      } else {
        pre = parseInt(this.preInfo.progress)>=parseInt(this.preInfo.total)?100:parseFloat((this.preInfo.progress/this.preInfo.total)*100).toFixed(2)
      }
      this.percentage = pre
    },
    clickBefore(currentRound) {
      if ( !this.round || this.roundstatus != 1 || this.round != currentRound ) {
        return;
      }
      if ( !this.isLogin ) {
        this.loginDialogVisible = true
        return
      }
      this.presaleForm.book_amount = "";
      this.totalAmount = 0;
      this.presaleChecked = false;
      let params = {
        code: localStorage.getItem( 'code' )
      }

      // user/pre-sale/book
      userInfo( params ).then( res => {
        if ( res.code != 0 ) return this.$message.error( res.msg )
        this.userInfo = res.data
        this.KYC_DialogVisible = this.userInfo.kyc_status == 0
        if ( this.userInfo.kyc_status == 1 ) {
          this.preInfo = JSON.parse( JSON.stringify( this['preInfo' + this.round] ) )
          this.calc_precentage()
          this.firstDialogVisible = true;
        }
        this.KYC_loading_DialogVisible = this.userInfo.kyc_status == 2;
        this.KYC_error_DialogVisible = this.userInfo.kyc_status == 3;
      } )
    },
    presellCoander() {
      round().then( res => {
        try {
          this.round = res.data.round;
          this.roundstatus = res.data.status;
        } catch {
          // this.$message.error(this.$t( 'text204' ))
        }
      } )
    },

    firstHandleClose() {
      this.firstDialogVisible = false
    },

    firstPayHandleClose() {
      this.firstPayDialogVisible = false
    },
    koserxy() {
      let data = {
        book_amount: this.presaleForm.book_amount,
        totalAmount: this.totalAmount,
        presaleChecked: this.presaleChecked,
        firstDialogVisible: this.firstDialogVisible,
      }
      this.$store.commit('SAVE_PRESALE_FORM', data)
      let routeData = this.$router.resolve({
        path:'/purchaseAgreement'
      });
      window.open(routeData.href, '_blank');
    },

    loginHandleClose() {
      this.loginDialogVisible = false
    },
    KYCHandleClose() {
      this.KYC_DialogVisible = false
    },

    copyArticle( event ) {
      const range = document.createRange();
      range.selectNode( document.getElementById( 'omni' ) );
      const selection = window.getSelection();
      if ( selection.rangeCount > 0 ) selection.removeAllRanges();
      selection.addRange( range );
      document.execCommand( 'copy' );
      this.$message( this.$t( 'presale.text51' ) );
    },

    toLogin() {
      this.loginDialogVisible = false
      this.$router.push( '/login' )
    },
    toKYC() {
      this.KYC_DialogVisible = false
      this.$router.push( { name: "KYCapply", query: { type: 0 } } )
    },

    async getPreSale() {
      await preSale( { round: 1, amount_type: 1 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo1 = res.data
        }
      } )
    },

    async getPreSale2() {
      await preSale( { round: 2, amount_type: 1 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo2 = res.data
        }
      } )
    },
    async getPreSale3() {
      await preSale( { round: 3, amount_type: 1 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo3 = res.data
        }
      } )
    },
    async getPreSale4() {
      await preSale( { round: 4, amount_type: 0 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo4 = res.data
        }
      } )
    },
    nextPay() {
      this.charge_address = "";
      this.$refs[ "presaleForm" ].validate( ( valid ) => {
        if ( valid ) {
          if ( this.round != this.lastRound ) {
            if ( parseInt( this.presaleForm.book_amount ) > this.preInfo.total ) {
              let message = "";
              if ( this.$lang == 'en' ) {
                message = "The number of copies exceeds the maximum" + " " + this.preInfo.total + " " + "copies";
              }
              if ( this.$lang == 'zh' ) {
                message = "份数超出最大限度" + this.preInfo.total + '份'
              }
              if ( this.$lang == 'ru' ) {
                message = "Количество копий превышает максимально" + " " + this.preInfo.total + " " + "копию"
              }
              if ( this.$lang == 'ko' ) {
                message = "복사 매수가 최대" + this.preInfo.total + "매를 초과합니다."
              }
              if ( this.$lang == 'ja' ) {
                message = "部数が最大" + this.preInfo.total + "部を超えている"
              }
              return this.$message.error( message );
            }
          }
          else {
            if ( this.totalAmount > this.preInfo.total ) {
              return this.$message.error( this.$t( 'presale.text53' ) + this.preInfo.total + " USDT" );
            }
            if ( this.preInfo.progress >= 100 ) {
              return this.$message.error( this.$t( 'presale.text55' ) );
            }
          }
          if ( !this.presaleChecked ) {
            return document.getElementById( "elcheckbox" ).style[ 'color' ] = "red"
          }
          this.loading = true;
          subBook( {
            user_code: localStorage.getItem( 'code' ),
            amount_type: this.round != this.lastRound ? '1' : '0',
            book_amount: this.presaleForm.book_amount
          } ).then( res => {
            this.loading = false
            if ( res.code == 0 ) {
              this.charge_address = res.data.charge_address
              this.firstDialogVisible = false;
              this.firstPayDialogVisible = true
              this.presellCoander();
              this.getPreSale()
              this.getPreSale2();
              this.getPreSale3();
              this.getPreSale4();
              setTimeout( () => {
                let qrcode = new QRCode( 'qrcode', {
                  width: 150,
                  height: 150,
                  text: this.charge_address
                } )
              }, 0 )
              return;
            }
            if ( res.code == "102002" ) {
              this.$message.error( this.$t( 'presale.text53' ) );
              return;
            }
            if ( res.code == "102003" ) {
              this.$message.error( this.$t( 'presale.text56' ) );

            }
            else {
              this.$message.error( this.$t( 'presale.text57' ) );
            }
          } )
        }
      } )
    }

  },
  created() {
    this.isLogin = !!localStorage.getItem( 'token' );
    this.presellCoander();

  },
  async mounted() {
    try{
      await this.getPreSale()
      await this.getPreSale2();
      await this.getPreSale3();
      await this.getPreSale4();
      this.preInfo = JSON.parse( JSON.stringify( this['preInfo' + this.round] ) )
      this.calc_precentage()
    }catch ( e ) {
      new Error(e)
    }
  },

  filters: {
    transform( value ) {
      const newValue = [ '', '', '' ]
      let fr = 1000
      let num = 3
      let text1 = ''
      let fm = 1
      while ( value / fr >= 1 ) {
        fr *= 10
        num += 1
        // console.log('数字', value / fr, 'num:', num)
      }
      if ( num <= 4 ) { // 千
        newValue[ 0 ] = parseInt( value / 1000 ) + ''
        newValue[ 1 ] = '千'
      }
      else if ( num <= 8 ) { // 万
        text1 = parseInt( num - 4 ) / 3 > 1 ? '千万' : '万'
        // tslint:disable-next-line:no-shadowed-variable
        fm = text1 === '万' ? 10000 : 10000000
        if ( value % fm === 0 ) {
          newValue[ 0 ] = parseInt( value / fm ) + ''
        }
        else {
          newValue[ 0 ] = parseFloat( value / fm ).toFixed( 2 ) + ''
        }
        newValue[ 1 ] = text1
      }
      else if ( num <= 16 ) { // 亿
        text1 = ( num - 8 ) / 3 > 1 ? '千亿' : '亿'
        text1 = ( num - 8 ) / 4 > 1 ? '万亿' : text1
        text1 = ( num - 8 ) / 7 > 1 ? '千万亿' : text1
        // tslint:disable-next-line:no-shadowed-variable
        fm = 1
        if ( text1 === '亿' ) {
          fm = 100000000
        }
        else if ( text1 === '千亿' ) {
          fm = 100000000000
        }
        else if ( text1 === '万亿' ) {
          fm = 1000000000000
        }
        else if ( text1 === '千万亿' ) {
          fm = 1000000000000000
        }
        if ( value % fm === 0 ) {
          newValue[ 0 ] = parseInt( value / fm ) + ''
        }
        else {
          newValue[ 0 ] = parseFloat( value / fm ).toFixed( 2 ) + ''
        }
        newValue[ 1 ] = text1
      }
      if ( value < 1000 ) {
        newValue[ 0 ] = value + ''
        newValue[ 1 ] = ''
      }
      return newValue.join( '' );
    }
  }
}
</script>

<style lang='less' scoped>
.page {
  overflow: hidden;
  .page-content {
    background-size: cover;
    background: url("../../assets/img/pic_bg.png") center center no-repeat;
    background-size: 100% 100%;
  }

  .wrap {
    width: 1300px;
    padding-bottom: 84px;

    .logo {
      text-align: center;

      .pic_txt {
        width: 407px;
        height: 88px;
        margin: 83px 0 28px 0;
      }

      .pic_fbt_bg {
        width: 915px;
        height: 156px;
        margin: 0 auto;
        margin-bottom: 45px;
        position: relative;
        z-index: 10;
        color: #fff;
        font-size: 30px;
        &.ru {
          font-size: 20px;
        }
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        span {
          display: block;
          width: 100%;
          height: 100%;
          z-index: 10;
          position: absolute;
          line-height: 156px;
        }
      }

      p {
        margin: 0 32px;
        font-size: 44px;
        color: #FFFFFF;
        letter-spacing: 4px;
      }
    }

    .smwlert {
      /*width: 100%;*/
      /*position:absolute;*/
      /*top: -43px;*/
      position: relative;
      margin-top: -304px;
      z-index: 0;
    }

    .werp_hr {
      width: 100px;
      height: 2px;
      background: rgba(255, 255, 255, 0.6);
    }


    .block {
      width: 1100px;
      min-height: 480px;
      background-color: #06149D;
      margin-bottom: 90px;
      padding: 49px 0 128px 0;
      border: 4px solid;
      border-image: linear-gradient(180deg, rgba(97, 201, 241, 1), rgba(220, 134, 249, 1)) 4 4;
      left: 50%;
      transform: translateX(-50%);
      position: relative;
      .time-line {
        height: 520px;
        width: 3px;
        position: absolute;
        left: 259px;
        top: 182px;
        background: linear-gradient(180deg, #36B8FF 0%, rgba(54, 184, 255, 0) 100%);
        z-index: 2;
        &.last-round {
          height: 220px;
        }
      }
      .time-point {
        width: 31px;
        height: 31px;
        position: absolute;
        z-index: 20;
        left: 245px;
        &:nth-of-type(1) {
          top: 179px;
        }
        &:nth-of-type(2) {
          top: 359px;
        }
        &:nth-of-type(3) {
          top: 539px;
        }
      }
    }

    .block-title-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 27px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .block-title-text {
      color: #ffffff;
      font-size: 30px;
      margin-left: -12px;
      letter-spacing: 4px;
      font-weight: 600;
    }

    .block-description {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
      max-width: 70%;
      margin: 0 auto;
      margin-bottom: 35px;
    }

    .splce-text {
      letter-spacing: 3px;
    }

    .stage-wrap {
      position: relative;
      min-height: 180px;
      padding-left: 296px;
    }

    .skome {
      margin-right: 123px;
    }

    .stage-info-wrap {
      display: flex;
      justify-content: flex-start;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      letter-spacing: 1px;
      white-space: nowrap;
      >div>div {
        margin-bottom: 6px;
      }
      .stage-info-left {
        min-width: 120px;
      }
    }

    .middle-wrap {
      min-width: 260px;
    }

    .stage-title {
      display: flex;
      margin-bottom: 18px;
      margin-right: 20px;
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 28px;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      .sold-out {
        border-radius: 10px;
        border: 1px solid #37E2EF;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #37E2EF;
        text-align: center;
        height: 20px;
        line-height:20px;
        margin-left: 6px;
        padding: 0px 12px;
      }
    }

    .stage-main-wrap {
      color: rgba(225, 225, 225, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .roakl-lert {
      height: 28px;
      text-align: center;
      color: #225C9F;
      font-size: 14px;
      padding: 0 10px;
      line-height: 27px;
      border-radius: 18px;
      border: 1px solid #225C9F;
    }

    .stage-progress {
      width: 87px;
      height: 87px;
      text-align: center;
      position: relative;
      margin: 0 auto;
      margin-bottom: 10px;
      img {
        width: 87px;
        height: 87px;
      }
    }
    .stage-progress-wrap {
      text-align: center;
      padding-top: 12px;
      color: #FFFFFF;
      margin-right: 200px;
      .progress-text {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1px;
      }
    }

    .stage-progress-center-text {
      position: absolute;
      font-size: 20px;
      width: 87px;
      height: 87px;
      top: 0;
      right: 0;
      line-height: 87px;
      text-align: center;
    }
    .flow {
      display: flex;
      position: relative;
      justify-content: space-between;
      margin-top: 40px;

      .course {
        text-align: left;
        color: #ffffff;

        .name {
          width: 360px;
          font-size: 16px;
          margin-bottom: 30px;
        }
      }
    }

    .apply {
      margin: 0 auto;
      text-align: center;

      .apply_btn {
        padding: 0 31px;
        height: 60px;
        display: inline-block;
        line-height: 60px;
        border-radius: 8px;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        background: linear-gradient(to right, #d4d3d1, #757470);
        cursor: pointer;
      }

      .apply_rule {
        width: 198px;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
        text-align: center;
      }

      .apply_rule:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .firstDialogVisible {
      .progress_info {
        display: flex;
        color: #333333;
        font-size: 14px;
        line-height: 28px;
        margin-bottom: 10px;
        justify-content: space-between;
      }
    }

    .firstPayDialogVisible {
      .dialog_body {
        color: #333333;
        line-height: 30px;

        .pay_name {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .pay_num {
          color: #5885FD;
          font-size: 20px;
          margin-bottom: 20px;
        }

        .pay_omni_name {
          font-size: 14px;
        }

        .pay_omni_row {
          position: relative;
          width: 520px;
          height: 42px;
          line-height: 42px;
          padding: 0 10px;
          box-sizing: border-box;
          background: #FFFFFF;
          border: 1px solid #E7E7E7;

          .copy {
            position: absolute;
            right: 10px;
            top: 0;
            cursor: pointer;
          }
        }
      }

    }
  }
}

@keyframes localShine {
  from {
    box-shadow: 0 0 0 0 #5885FD;
  }
  to {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}

.tet-lk {
  width: 100%;
  /*width: 607px;*/
  height: 3px;
  background: #FFFFFF;
}

.amwt {
  display: flex;
  align-items: center;
  position: absolute;
  top: 119px;
  left: 175px;
}

.qalot img {
  width: 23px;
}

.contt-text {
  font-size: 19px;
  text-align: center;
  line-height: 36px;
  color: #2C2C2C;
}

.restBottn {
  width: 240px;
  height: 48px;
  background: linear-gradient(90deg, #2278FF 0%, #3D58FF 100%);
  border-radius: 6px;
  border: none;
}

.icaOma {
  color: red;
  font-size: 53px;
  margin-bottom: 21px;
}

.priceValue {
  width: 532px;
  height: 36px;
  padding-left: 10px;
  line-height: 36px;
  border-radius: 3px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
}

.skert {
  position: absolute;
  top: 6px;
  right: 5px;
  min-width: 31px;
  text-align: center;
  height: 36px;
  line-height: 36px;
}

.sgStyle {
  color: #5885FD;
}

.sgStyle:hover {
  cursor: pointer;
  text-decoration: underline;
}

/deep/ .el-form--label-top .el-form-item__label {
  padding: 0 0 1px;
}

/deep/ .el-dialog__title {
  font-size: 18px;
  color: #141413;
}

/deep/ .el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*height:600px;*/
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}

/deep/ .el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}

#qrcode {

  width: 150px;
  height: 150px;
  position: relative;
  margin: 0 auto;
  margin-top: 50px
  /*position: relative;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

#qrcode img {
  width: 50px;
  height: 50px;
  display: flex;
  left: 51px;
  top: 49px;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.presale-btn {
  cursor: not-allowed;
  min-width: 210px;
  height: 54px;
  border-radius: 27px;
  color: #06149D;
  text-align: center;
  line-height: 54px;
  opacity: 0.5;
  background: #37E2EF;
  user-select: none;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #06149D;
  margin-right: 120px;
  &.last-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &.access {
    opacity: 1;
    cursor: pointer;
  }
}
.progress {
  display: flex;
  align-items: center;
  /deep/ .el-progress-bar {
    width: 468px;
    padding-right: 0;
    margin-right: 0;
  }
  /deep/ .el-progress__text {
    width: 50px;
    font-size: 14px !important;
    text-align: right;
  }
}
</style>
