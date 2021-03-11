

<!-- -->
<template>
    <div class="footer">
        <div class="wrap">
           <div class="zaltet">
               <div class="wrap-flr">
                    <div class="spower">
                        <a href="">申购协议</a>
                        <a class="maert" href="">白皮书</a>
                        <a href="">商务合作</a>
                    </div>
                   <div class="spower">
                       <a href="">申购帮助</a>
                       <a class="maert" href="">硬件钱包</a>
                       <a href="">媒体采访</a>
                   </div>
                   <div class="spower">
                       <a style="height: 20px;"> &emsp;&emsp;</a>
                       <a href="" class="maert">Dapp</a>
                       <a href="">隐私保护</a>
                   </div>
               </div>
               <div>
                   <div class="wll-rt">
                       <div class="lro"><img src="../../assets/img/icon_twiter@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_facebook@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_w09@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_youtube@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_feiji@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_weibo@2x.png"/></div>
                       <div class="lro"><img src="../../assets/img/icon_weicat@2x.png"/></div>
                   </div>
                   <div class="qksot">
                       <div style="width: 300px;">
                           <el-form class="case_form" :model="email" :rules="rules" ref="resetForm">
                               <el-form-item class="form_row" prop="email">
                                   <el-input class="row_input" type="text" :placeholder="languageNav[languageName].language_text2" v-model.trim="email"/>
                               </el-form-item>
                           </el-form>
                       </div>
                       <div><div class="btn form_btn"  @click="resetDataCode">订阅</div></div>

                   </div>
               </div>

           </div>

            <!--<div class="foot_link">-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon1.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon2.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon3.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon4.png" alt=""></a>-->
            <!--</div>-->
        </div>
        <div class="footet">
            <div class="lrt"></div>
            <div class="bkoet"><img src="../../assets/img/logo_taft@2x.png"/></div>
        </div>

    </div>
</template>

<script>
    import  languageNav from "@/language/login"
export default {
    name: '',
    data() {
       return {
           languageNav:languageNav,
           languageName:this.$languageName,
           email:"",
           rules: {
               email: [
                   { required: true, message:languageNav[this.$languageName].language_text2, trigger: 'blur' },

               ],

           },
       }
    },
    computed:{

    },
    watch:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>

<style lang='less' scoped>
    .footer{
        background: #fff;
        padding-top: 59px;
        .wrap{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            .foot_logo{
                margin: 0 auto;
                width: 200px;
            }
            .foot_link{
                width: 230px;
                display: flex;
                justify-content: space-between;
                .lin_img{
                    width: 35px;
                    height: 35px;
                }
            }
            .wrap-flr{
                display: flex;
                align-items: center;
                 width: 596px;
            }

            .spower {
               margin-right: 88px;
            }
            .spower a{
                color: #7B839AFF;
                font-size: 14px;
               display: block;
            }

            .maert{
                margin: 9px 0;
            }
            .spower a:hover{
                color: #5885FDFF;
                text-decoration: underline !important;
            }
            .zaltet{
                display: flex;
                padding-bottom: 19px;
            }
            .wll-rt{
                display: flex;
                margin-bottom: 35px;
            }
            .wll-rt .lro{
                margin-right: 22px;
            }
            .wll-rt img{
                width: 24px;
                height: 24px;
            }
            .qksot{
                display: flex;
            }
        }
    }
    .lrt{
        width: 1200px;
        height: 1px;
        background: #EBEBEB;
        margin: 0 auto;
    }
    .logo-stl{

        font-size: 24px;
        font-family: AlibabaPuHuiTi;
        font-weight: bold;
        color: #ffffff;

    }
    .taf-kot{
        font-size: 24px;
        font-family: zcoolwenyiti;
        font-weight: 400;
        color: #ffffff;
        line-height: 48px;
    }
    .flext-all1{

    }
    .flext-all2{
        width: 200px;
        font-size: 24px;
        margin-top: 18px;
    }
    /deep/ .el-input__inner{
        border-radius: 0px;
    }
   .form_btn{
       width: 100px;
       margin-top: 2px;
       text-align: center;
       line-height: 40px;
       color: #fff;
       font-size: 12px;
       background-color: #5885FDFF;
   }
    .form_btn:hover{
        cursor: pointer;
        background-color: #4067fd;
    }
    .bkoet{
        padding: 10px 0;
    }
    .bkoet img{
         width: 111px;
        margin: 0 auto;
    }
    .footet{
        width: 1200px;
        margin: 0 auto;
        text-align: center;

    }

</style>

