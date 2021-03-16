<template>
  <div class="page">
    <div class="page-connert">
      <div class="wrap">
        <div class="logo">
          <img class="pic_txt" src="../../assets/img/pic_txt@2x.png" alt="">
          <div class="imgg"><img src="../../assets/img/pic_fbt_bg.png" alt=""></div>
        </div>
        <div class="wllboter foskower">
          <div class="mosrt_plelr">
            <div class="pe-llert"><img src="@/assets/img/pic_txt_bg@2x.png" /></div>
            <div class="boakder">{{ $t( 'presale.text15' ) }}</div>
          </div>
          <div class="sllr-ller">
            {{ $t( 'presale.text1' ) }}
          </div>
          <div class="gopker">
            <div class="gopker_blert"></div>
            <div class="rlo-t">
              <div class="sll-coert">
                <div class="bldmert">
                  <img src="@/assets/img/pic_yd_h@2x.png" />
                </div>
                <div class="middle-wrap">
                  <div class="bmsoert">
                    <div class="zlser">
                      {{ $t( 'presale.text66' ) }}
                    </div>
                  </div>
                  <div class="rulert">
                    <div class="rulert-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    <div class="rulert-right">
                      <div>2020-10-01 - 2020-11-01</div>
                      <div>0.18 USDT</div>
                      <div>5,400,000 USDT</div>
                    </div>
                  </div>
                </div>
                <div class="slset">
                  <div class="fodert-boer">
                    <div class="rbllt">
                      <img src="@/assets/img/pic_yq@2x.png" />
                      <div class="wblodert"><span>12</span>
                        <span style="font-size: 13px">%</span>
                      </div>
                    </div>
                  </div>
                  <div class="progress-text"> {{ $t( 'presale.text27' ) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div :class="['presale-btn', {'access': isAccess(1) }]"
               role="button"
               @click="clickBefore"
          >
            <span v-if="!isAccess(1)"> {{ $t( 'presale.text69' ) }}</span>
            <span v-else>{{ $t( 'presale.text61' ) }}</span>
          </div>
        </div>

        <div class="wllboter foskower" style="margin-bottom: auto">
          <div class="mosrt_plelr">
            <div class="pe-llert"><img src="@/assets/img/pic_txt_bg@2x.png" /></div>
            <div class="boakder"> {{ $t( 'presale.text5' ) }}</div>
          </div>
          <div class="sllr-ller">
            {{ $t( 'presale.text6' ) }}
          </div>
          <div class="gopker">
            <div class="gopker_blert"></div>
            <div class="rlo-t">
              <div class="sll-coert">
                <div class="bldmert">
                  <img src="@/assets/img/pic_yd_h@2x.png" />
                </div>
                <div class="skome">
                  <div class="bmsoert">
                    <div class="zlser"> {{ $t( 'presale.text5' ) }}</div>
                  </div>
                  <div class="rulert">
                    <div class="rulert-left">
                      <div> {{ $t( 'presale.text2' ) }}</div>
                      <div> {{ $t( 'presale.text3' ) }}</div>
                      <div> {{ $t( 'presale.text4' ) }}</div>
                    </div>
                    </div>
                    <div class="rulert-right">
                      <div>2021-7-19 - 2021-8-19</div>
                      <div>{{ $t( 'presale.text7' ) }}</div>
                      <div>{{ $t( 'presale.text7' ) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="['presale-btn', {'access': isAccess(2) }]"
               role="button"
               @click="clickBefore"
          >
            <span v-if="!isAccess(2)">敬请期待</span>
            <span v-else>去抢购</span>
          </div>
        </div>

        <!-- 首轮抢购 弹窗-->
        <el-dialog title="首轮预售"
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
                :model="presellForm"
                ref="presellForm"
            >
              <el-row>
                <el-col :span="24">
                  <el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="round==2
                                ?parseInt(preInfo.progress):preInfo.progress==0
                                ?0:parseInt(preInfo.progress)>=parseInt(preInfo.total)?100:(parseFloat( preInfo.progress/preInfo.total*100).toFixed(3)).substring(0,parseFloat( preInfo.progress/preInfo.total*100).toFixed(3).lastIndexOf('.')+3)"
                  ></el-progress>
                  <div class="progress_info">
                    <div dir="auto">
                      <template v-if="round==1">
                        <template v-if="languageName=='English'">{{ preInfo.progress }}
                          {{ languageNav[ languageName ].language_text30 }}
                        </template>
                        <template v-else>{{ languageNav[ languageName ].language_text30 }} {{ preInfo.progress }}
                          {{ languageNav[ languageName ].language_text26 }}
                        </template>
                      </template>
                      <template v-else>{{ languageNav[ languageName ].language_text27 }} {{ preInfo.progress }}%
                      </template>
                    </div>
                    <div dir="auto">
                      {{ languageNav[ languageName ].language_text28 }}
                      <template v-if="round == 1"> {{ preInfo.total }} {{ languageNav[ languageName ].language_text26 }}
                      </template>
                      <template v-else>{{ preInfo.total ? preInfo.total.replace( /\B(?=(?:\d{3})+\b)/g, ',' ) : "0" }}
                        USDT
                      </template>
                    </div>
                    <!--{{preInfo.total?preInfo.total.replace(/\B(?=(?:\d{3})+\b)/g, ','):"0"}} USDT-->
                  </div>
                </el-col>
                <el-col :span="24">
                  <el-form-item :label="languageNav[languageName].language_text29">
                    <el-input :placeholder="preInfo.price+ ' USDT'" disabled size="medium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item
                      :label="round==1?languageNav[languageName].language_text31+'（1'+languageNav[languageName].language_text26 +'='+ preInfo.pre_amount+' UVT）':languageNav[languageName].language_text32"
                      prop="book_amount" style="position: relative">
                    <el-input type="number" v-model.trim="presellForm.book_amount"
                              :placeholder="round==1?languageNav[languageName].language_text33:languageNav[languageName].language_text34"
                              size="medium">

                    </el-input>
                    <div class="skert" v-if="round==1">{{ languageNav[ languageName ].language_text26 }}</div>
                    <div class="skert" style="width: 42px;" v-if="round==2">UVT</div>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item :label="languageNav[languageName].language_text35">
                    <div class="priceValue">
                      {{ totalPrice }}
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item id="elcheckbox">
                    <el-checkbox v-model.trim="presellChecked"></el-checkbox>
                    <span>  {{ languageNav[ languageName ].language_text36 }} <span class="sgStyle"
                                                                                    @click="koserxy">【{{ languageNav[ languageName ].language_text37 }}】</span></span>
                  </el-form-item>
                </el-col>

              </el-row>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
                    <el-button type="primary" :loading="loading" class="restBottn"
                               @click="nextPay">{{ languageNav[ languageName ].language_text41 }}</el-button>
                </span>
        </el-dialog>
        <!-- 首轮抢购 弹窗 end-->

        <!--&lt;!&ndash; 首轮付款 弹窗 &ndash;&gt;firstPayDialogVisible=-->
        <el-dialog :title="
            round==1? languageNav[languageName].language_text59
            :languageNav[languageName].language_text40"
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
    line-height: 14px;">{{ languageNav[ languageName ].language_text58 }}
            </div>
            <div class="pay_name">{{ languageNav[ languageName ].language_text42 }}</div>
            <div class="pay_num">{{ totalPrice }} USDT</div>
            <div class="pay_omni_name">{{ languageNav[ languageName ].language_text43 }}</div>
            <div class="pay_omni_row">
              <div class="omni" id="omni">{{ charge_address }}</div>
              <div class="copy" @click="copyArticle">{{ languageNav[ languageName ].language_text45 }}</div>
            </div>
            <div style="text-align: center" v-if="charge_address">
              <div id="qrcode">
                <!--                <img src="@/assets/logo.png"/>-->
              </div>
              <div class="">{{ languageNav[ languageName ].language_text64 }}</div>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button type="primary" class="restBottn"
                         @click="firstPayDialogVisible = false"> {{ languageNav[ languageName ].language_text46 }} </el-button>
                </span>
        </el-dialog>
        <!-- 首轮付款 弹窗 end-->

        <!-- 申购规则 弹窗 -->
        <el-dialog title="申购规则" :visible.sync="ruleDialogVisible" width="580px" center :before-close="ruleHandleClose">
                <span>
                    ICO第一阶段募集资金的75%将用于UVT平台的开发和拓展。15%将用于法律法规相关法务费用和公共宣传的相关费用。10%将用于社区服务。<br>
                    ICO第二阶段募集资金的80%将继续投入到技术研发中，保持UVT在业界领先的地位。10%将用于支持区块链研发团队在UVT公链上进行二次开发。剩余10%将全部用于公共宣传的相关费用，为UVT公链在全球正式发行做好充分准备。
                </span>
          <span slot="footer" class="dialog-footer">
                    <el-button type="primary" class="rz-botton" @click="ruleDialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <!-- 申购规则 弹窗 end-->

        <!-- 登录提示窗 弹窗 -->
        <el-dialog :title="languageNav[languageName].language_text18" :visible.sync="loginDialogVisible" width="400px"
                   center :lock-scroll="false" :before-close="loginHandleClose">
          <div class="contt-text">
            {{ languageNav[ languageName ].language_text19 }}
          </div>
          <span slot="footer" class="dialog-footer">
                     <el-button class="rz-botton" type="primary"
                                @click="toLogin">{{ languageNav[ languageName ].language_text20 }}</el-button>
                      <el-button class="gz-botton"
                                 @click="loginDialogVisible = false">{{ languageNav[ languageName ].language_text21 }}</el-button>
                </span>
        </el-dialog>
        <!-- 登录提示窗 弹窗 end-->

        <!-- KYC提示窗 弹窗 -->
        <el-dialog :visible.sync="KYC_DialogVisible" :lock-scroll="false" width="400px" center
                   :before-close="KYCHandleClose">
          <div class="contt-text">
            {{ languageNav[ languageName ].language_text12 }}
          </div>
          <span slot="footer" class="dialog-footer">
                    <el-button class="rz-botton" type="primary"
                               @click="toKYC">{{ languageNav[ languageName ].language_text22 }}</el-button>
                    <el-button class="gz-botton"
                               @click="KYC_DialogVisible = false">{{ languageNav[ languageName ].language_text21 }}</el-button>
                </span>
        </el-dialog>
        <!-- KYC提示窗 弹窗 end-->

        <!-- KYC审核中 弹窗 -->
        <el-dialog :visible.sync="KYC_loading_DialogVisible" :lock-scroll="false" width="400px">
          <div class="contt-text">
            {{ languageNav[ languageName ].language_text12 }}
          </div>
          <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button class="rz-botton" type="primary" @click="KYC_loading_DialogVisible = false">
              {{ languageNav[ languageName ].language_text47 }}
            </el-button>
          </div>
        </el-dialog>
        <!-- KYC审核中 弹窗 end-->
        <!-- KYC审核中 弹窗 -->
        <el-dialog :visible.sync="KYC_error_DialogVisible" :lock-scroll="false" width="400px">
          <div class="contt-text">
            <div>{{ languageNav[ languageName ].language_text12 }}</div>
          </div>
        </el-dialog>
        <!-- KYC审核中 弹窗 end-->
      </div>
    </div>
    <webFoot />
  </div>
</template>


<script>
import webFoot from "@/components/footer";
import { preSale, round } from '@/request/presale.js'
import { userInfo, subBook } from '@/request/user.js'
import languageNav from "@/language/presell"
import QRCode from 'qrcodejs2'
export default {
  name: '',
  components: { webFoot },
  data() {
    var roundtext = ( rule, value, callback ) => {
      if ( value != '' )
        return callback()
      if ( this.round == 1 )
        callback( new Error( this.languageNav[ this.$langType ].language_text38 ) )
      else
        callback( new Error( this.languageNav[ this.$langType ].language_text38 ) )
    }

    var validateSurnmae = ( rule, value, callback ) => {
      if ( this.round == 1 ) {
        if ( value < 1 ) {
          callback( new Error( this.languageNav[ this.$langType ].language_text54 ) )
        }
        else if ( !( /(^[1-9]\d*$)/.test( value ) ) ) {
          callback( new Error( this.languageNav[ this.$langType ].language_text49 ) )
        }
        else {
          this.totalPrice = parseInt( value * this.preInfo.pre_amount * this.preInfo.price )
          callback()
        }
      }
      else {
        let reg = /^[1-9][0-9]*0{2}$/
        if ( !( reg.test( value ) ) ) {
          callback( new Error( this.languageNav[ this.$langType ].language_text50 ) )

        }
        else {
          this.totalPrice = value * this.preInfo.price
          callback()
        }
      }

    };
    return {
      userInfo: {},
      roundtext: "",
      isLogin: false,
      roundstatus: 0,
      firstDialogVisible: false,
      firstPayDialogVisible: false,
      ruleDialogVisible: false,
      loginDialogVisible: false,
      KYC_DialogVisible: false,
      KYC_loading_DialogVisible: false,
      KYC_error_DialogVisible: false,

      presellForm: {
        book_amount: ""
      },
      presellChecked: false,
      totalPrice: 0,
      round: 1,
      loading: false,
      preInfo: {},
      preInfo1: {},
      preInfo2: {},
      charge_address: "",//收货地址
      rules: {
        book_amount: [
          { required: true, validator: roundtext, trigger: 'blur' },
          { required: true, validator: validateSurnmae, trigger: 'blur' }
        ]
      },
      languageNav: languageNav,
      languageName: this.$langType
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    isAccess(round) { // 抢购按钮可点
      if (round == 1)
        return this.roundstatus == 1
      if (round == 2)
        return this.roundstatus == 1
    },
    clickBefore() {
      if ( !this.round || this.roundstatus != 1 ) {
        return;
      }
      if ( !this.isLogin ) {
        this.loginDialogVisible = true
        return
      }
      this.presellForm.book_amount = "";
      this.totalPrice = 0;
      this.presellChecked = false;
      let params = {
        code: localStorage.getItem( 'code' )
      }

      // user/pre-sale/book
      userInfo( params ).then( res => {
        if ( res.code != 0 ) return this.$message.error( res.msg )
        this.userInfo = res.data
        this.KYC_DialogVisible = this.userInfo.kyc_status == 0
        if ( this.userInfo.kyc_status == 1 ) {
          if ( this.round == 1 )
            this.preInfo = JSON.parse( JSON.stringify( this.preInfo1 ) )
          else
            this.preInfo = JSON.parse( JSON.stringify( this.preInfo2 ) )

          this.firstDialogVisible = true;
        }
        this.KYC_loading_DialogVisible = this.userInfo.kyc_status == 2;
        this.KYC_error_DialogVisible = this.userInfo.kyc_status == 3;
      } )
    },
    presellCoander() {
      round().then( res => {
        this.round = res.data.round;
        this.roundstatus = res.data.status;
      } )
    },

    ruleHandleClose() {
      this.ruleDialogVisible = false
    },

    firstHandleClose() {
      this.firstDialogVisible = false
    },

    firstPayHandleClose() {
      this.firstPayDialogVisible = false
    },
    koserxy() {
      this.$router.push( '/purchase' )
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
      this.$message( this.languageNav[ this.$langType ].language_text51 );
    },

    toLogin() {
      this.$router.push( '/login' )
    },
    toKYC() {
      this.$router.push( { name: "KYCapply", query: { type: 0 } } )
    },

    getPreSale() {
      preSale( { round: 1, amount_type: 1 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo1 = res.data
        }
      } )
    },

    getPreSale2() {
      preSale( { round: 2, amount_type: 0 } ).then( res => {
        if ( res.code == 0 ) {
          this.preInfo2 = res.data
        }
      } )
    },
    nextPay() {
      this.charge_address = "";
      this.$refs[ "presellForm" ].validate( ( valid ) => {
        if ( valid ) {
          if ( this.round == 1 ) {
            if ( parseInt( this.presellForm.book_amount ) > this.preInfo.total ) {
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
            if ( this.totalPrice > this.preInfo.total ) {
              return this.$message.error( this.languageNav[ this.$langType ].language_text53 + this.preInfo.total + " USDT" );
            }
            if ( this.preInfo.progress >= 100 ) {
              return this.$message.error( this.languageNav[ this.$langType ].language_text55 );
            }
          }
          if ( !this.presellChecked ) {
            return document.getElementById( "elcheckbox" ).style[ 'color' ] = "red"
          }
          this.loading = true;
          subBook( {
            user_code: localStorage.getItem( 'code' ),
            amount_type: this.round == 1 ? '1' : '0',
            book_amount: this.presellForm.book_amount
          } ).then( res => {
            this.loading = false
            if ( res.code == 0 ) {
              this.charge_address = res.data.charge_address
              this.firstDialogVisible = false;
              this.firstPayDialogVisible = true
              this.presellCoander();
              this.getPreSale()
              this.getPreSale2();
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
              this.$message.error( this.languageNav[ this.$langType ].language_text53 );
              return;
            }
            if ( res.code == "102003" ) {
              this.$message.error( this.languageNav[ this.$langType ].language_text56 );
              return
            }
            else {
              this.$message.error( this.languageNav[ this.$langType ].language_text57 );
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
  mounted() {
    this.getPreSale()
    this.getPreSale2();
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
  .page-connert {
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

      .imgg {
        width: 915px;
        height: 156px;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 45px;
        position: relative;
        z-index: 10;
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


    .wllboter {
      width: 1100px;
      min-height: 480px;
      background-color: #06149D;
      margin-bottom: 90px;
    }

    .foskower {
      padding: 49px 0 128px 0;
      border: 4px solid;
      border-image: linear-gradient(180deg, rgba(97, 201, 241, 1), rgba(220, 134, 249, 1)) 4 4;
      left: 50%;
      transform: translateX(-50%);
      position: relative;
    }

    .mosrt_plelr {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 27px;
    }

    .pe-llert img {
      width: 50px;
      height: 50px;
    }

    .boakder {
      color: #ffffff;
      font-size: 30px;
      margin-left: -12px;
      letter-spacing: 4px;
      font-weight: 600;
    }

    .sllr-ller {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
      margin-bottom: 35px;
    }

    .splce-text {
      letter-spacing: 3px;
    }

    .gopker {
      position: relative;
      min-height: 180px;
      padding-left: 245px;
    }

    .gopker_blert {
      position: absolute;
      top: 0;
      left: 259px;
      z-index: 0;
      width: 3px;
      height: 107%;
      background: linear-gradient(180deg, #36B8FF 0%, rgba(54, 184, 255, 0) 100%);
    }

    .skome {
      margin-right: 123px;
    }

    .rulert {
      display: flex;
      justify-content: flex-start;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      letter-spacing: 1px;
      >div>div {
        margin-bottom: 6px;
      }
      &-left {
        min-width: 120px;
      }
    }

    .middle-wrap {
      min-width: 260px;
      margin-right: 137px;
    }

    .bmsoert {
      display: flex;
      margin-bottom: 18px;
    }

    .sll-coert {
      color: rgba(225, 225, 225, 0.5);
      display: flex;
    }

    .bldmert {
      margin-right: 20px;
      position: relative;
      z-index: 99;
      margin-top: -4px;
      width: 31px;
    }

    .bldmert img {
      width: 31px;
      height: 31px;
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

    .fodert-boer {
      position: relative;
      margin-bottom: 10px;
    }

    .rbllt {
      width: 87px;
      height: 87px;
      text-align: center;
      position: relative;
      margin: 0 auto;
      .wblodert {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .fodert-boer img {
      width: 87px;
      height: 87px;
    }

    .slset {
      text-align: center;
      padding-top: 12px;
      color: #FFFFFF;
      .progress-text {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1px;
      }
    }

    .wblodert {
      position: absolute;
      font-size: 20px;
      top: 30px;
      left: 20px;
    }

    .zlser {
      margin-right: 20px;
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 28px;
      letter-spacing: 1px;
    }

    .ssloet {
      color: #fff;
    }

    .baloert {
      min-width: 189px;
      height: 50px;
      line-height: 50px;
      background: linear-gradient(180deg, #C65999 0%, #CF8CF0 100%);
      border-radius: 34px;
      color: rgba(15, 8, 40, 1);
      font-size: 20px;
      font-weight: 600;
      transition: all 0.5s;
      letter-spacing: 1px;
      padding: 0 31px;
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

.rz-botton {
  width: 130px;
  height: 42px;
  text-align: center;
  background: linear-gradient(90deg, #2278FF 0%, #3D58FF 100%);
  border-radius: 6px;
  border: none;
}

.gz-botton {
  width: 130px;
  height: 42px;
  background: #1D2C46;
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
  background-color: #fff;
  line-height: 32px;
  min-width: 31px;
  text-align: center;
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
  position: absolute;
  height: 54px;
  left: 50%;
  border-radius: 27px;
  transform: translateX(-50%);
  color: #06149D;
  text-align: center;
  line-height: 54px;
  z-index: 200;
  opacity: 0.5;
  background: #37E2EF;
  user-select: none;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #06149D;
  &.access {
    opacity: 1;
    cursor: pointer;
  }
}

</style>
