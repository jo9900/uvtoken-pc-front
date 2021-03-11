<!-- -->
<template>
    <div class="web_nav">
        <!--<div class="raplwt" v-if="bosket">-->
            <!--<router-link :to="{path:'/newsDetail',query:{code:code}}">-->
                <!--<template v-if="languageName=='Chinese'">-->
                    <!--<img src="@/assets/img/wott.png"/>-->
                <!--</template>-->
                <!--<template v-else>-->
                    <!--<img src="@/assets/img/aror.png"/>-->
                <!--</template>-->
            <!--</router-link>-->
            <!--&lt;!&ndash;<template v-if="languageName=='Russian'">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="@/assets/img/rog_3.png"/>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<template v-if="languageName=='Korean'">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="@/assets/img/rog_4.png"/>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<template v-if="languageName=='Japanese'">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="@/assets/img/rog_5.png"/>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<template v-if="languageName=='Arabic'">&ndash;&gt;-->
                <!--&lt;!&ndash;<img src="@/assets/img/rog_6.png"/>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="zllet">&ndash;&gt;-->
                <!--&lt;!&ndash;<i class="el-icon-close"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <div class="wrap">
            <div class="nav_logo">
                <div class="flext">
                    <div class="flext-all1"><img src="@/assets/img/logo_taft@2x.png"/></div>
                </div>
            </div>

            <div class="nav_options" :style="{'width': languageName=='English'?'704px':''}">
                <ul>
                    <li :class="pagePath == '/' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language_home" to="/">
                            {{languageNav[languageName].language_home}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                    <li :class="pagePath == '/multiChain' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language1" to="/multiChain">
                            {{languageNav[languageName].language1}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                    <!--<li :class="pagePath == '/community' ? 'active' : ''">-->
                        <!--<template v-if="languageName=='Chinese'">-->
                            <!--<a target="_blank" :title="languageNav[languageName].language_book"  href="../img/TAFChain白皮书1.0.pdf">{{languageNav[languageName].language_book}}</a>-->
                        <!--</template>-->
                        <!--<template v-else>-->
                            <!--<a target="_blank" :title="languageNav[languageName].language_book" href="../img/TAF Chain White Paper 1.0.0.pdf">{{languageNav[languageName].language_book}}</a>-->
                        <!--</template>-->
                    <!--</li>-->
                    <li :class="pagePath == '/wallet' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language2" to="/wallet">
                            {{languageNav[languageName].language2}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                    <li :class="pagePath == '/lc' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language3" to="/lc">
                            {{languageNav[languageName].language3}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                    <li :class="pagePath == '/Dapp' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language4" to="/Dapp">
                            {{languageNav[languageName].language4}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                    <li :class="pagePath == '/community' ? 'active' : ''">
                        <template v-if="languageName=='Chinese'">
                        <a target="_blank" :title="languageNav[languageName].language_book"  href="../img/TAFChain白皮书1.0.pdf">{{languageNav[languageName].language_book}}</a>
                        </template>
                        <template v-else>
                        <a target="_blank" :title="languageNav[languageName].language_book" href="../img/TAF Chain White Paper 1.0.0.pdf">{{languageNav[languageName].language_book}}</a>
                        </template>
                    </li>
                    <!--<li :class="pagePath == '/community' ? 'active' : ''"><router-link to="/community">社区</router-link></li>-->
                    <li :class="pagePath == '/help' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language_text5" to="/help">
                            {{languageNav[languageName].language_text5}}
                            <i class="underline"></i>
                        </router-link>
                    </li>

                    <li :class="pagePath == '/presell' ? 'active' : ''">
                        <router-link :title="languageNav[languageName].language_presale" to="/presell">
                            {{languageNav[languageName].language_presale}}
                            <i class="underline"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="nav_center">
                <div class="in" v-if="!isLogin">
                    <router-link to="/login" style="margin-right: 12px;"><span dir="rtl">{{languageNav[languageName].language_Login}} </span></router-link>

                    <router-link to="/signIn"><span dir="rtl">{{languageNav[languageName].language_register}}</span></router-link>
                </div>
                <div class="userInfo" v-else>
                    <el-dropdown  @command="handleClick">
                        <span class="el-dropdown-link">
                            {{userCode}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <!--<el-dropdown-item command="myassets">我的资产</el-dropdown-item>-->
                            <!--<el-dropdown-item command="purchase">我的申购</el-dropdown-item>-->
                            <el-dropdown-item command="center">{{languageNav[languageName].language_user}}</el-dropdown-item>
                            <el-dropdown-item command="logout">{{languageNav[languageName].language_loginOut}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <!--<div class="nav_language dowstyle">-->
                    <!--<el-dropdown  @command="languageChange" placement="top">-->

                        <!--<span class="el-dropdown-link">-->
                          <!--{{languageNav[languageName].language_text6}}-->
                        <!--</span>-->

                        <!--<el-dropdown-menu slot="dropdown">-->
                           <!--<div style="padding: 0 26px 0 7px;;display: flex;justify-content: center">-->
                               <!--<div style="margin-right: 15px">-->
                                   <!--<template v-if="NODE_ENV==='test'||NODE_ENV==='development'">-->
                                       <!--<template v-if="languageName=='Chinese'"><img style="width: 100px;height: 100px" src="@/assets/img/cs_cn.png"/></template>-->
                                       <!--<template v-else><img style="width: 100px;height: 100px" src="@/assets/img/cs_en.png"/></template>-->
                                   <!--</template>-->
                                   <!--<template v-if="NODE_ENV==='production'">-->
                                       <!--<template v-if="languageName=='Chinese'"><img style="width: 100px;height: 100px" src="@/assets/img/zs_cn.png"/></template>-->
                                       <!--<template v-else><img style="width: 100px;height: 100px" src="@/assets/img/zs_en.png"/></template>-->
                                   <!--</template>-->
                               <!--</div>-->
                               <!--<div style="padding-top: 11px">-->
                                    <!--<div style="margin-bottom: 5px">{{languageNav[languageName].language_text7}}</div>-->
                                   <!--<div style="display: flex;justify-content: center;">-->
                                        <!--<div style="text-align: center;margin-right: 20px;">-->
                                            <!--<div style="margin: 5px 0;"><img src="@/assets/img/icon_ios.png"/></div>-->
                                            <!--<div style="font-size: 12px">iOS</div>-->
                                        <!--</div>-->
                                        <!--<div style="text-align: center">-->
                                            <!--<div style="margin: 5px 0;"><img src="@/assets/img/icon_android.png"/></div>-->
                                            <!--<div style="font-size: 12px">Android</div>-->
                                        <!--</div>-->
                                   <!--</div>-->
                               <!--</div>-->
                           <!--</div>-->
                        <!--</el-dropdown-menu>-->
                    <!--</el-dropdown>-->
                <!--</div>-->

                <div class="nav_language">
                    <el-dropdown  @command="languageChange">

                        <span class="el-dropdown-link">
                           {{languageNav[languageName].language_chinese}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>

                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="Chinese">中文</el-dropdown-item>
                            <!--<el-dropdown-item command="English">English</el-dropdown-item>-->
                            <!--<el-dropdown-item command="Arabic">عربى</el-dropdown-item>-->
                            <!--<el-dropdown-item command="Russian">русский</el-dropdown-item>-->
                            <!--<el-dropdown-item command="Korean">한국어</el-dropdown-item>-->
                            <!--<el-dropdown-item command="Japanese">日本語</el-dropdown-item>-->
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>


        <el-dialog  :visible.sync="loginOut" width="400px" :lock-scroll="false" :append-to-body="true" :modal-append-to-body="false" center >
            <div class="contt-text">
               {{languageNav[languageName].language_loginOut}}
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button class="rz-botton" type="primary" @click="loginClose">{{languageNav[languageName].language_determine}}</el-button>
                    <el-button  class="rz-botton" type="primary" @click="loginOut = false">{{languageNav[languageName].language_cancel}}</el-button>
                </span>
        </el-dialog>

    </div>
</template>

<script>
    import  languageNav from "@/language/nav"
    import {digest}  from "@/request/news"
    import Vue from 'vue'
export default {
    name: '',
    data() {
       return {
           pagePath:'',
           userCode:'',
           loginOut:false,
           isLogin:false,
           code:"",
           languageNav:languageNav,
           languageName:this.$languageName,
           bosket:true,
           NODE_ENV:process.env.NODE_ENV,
           list:[],
           listQuery:{
               lang_type:this.$languageName,
               page_no:1,
               page_size:3
           },
       }
    },
    computed:{},
    watch: {　　
　　    '$route': function (to, from) {
    　　　　this.pagePath = this.$route.path

        }
    },
    methods:{
        get_list(){
            digest(this.$qs.stringify(this.listQuery)).then(res=>{
                this.list = res.data.news;
                this.code = this.list[0].code;
            })
        },
        handleClick(command){
            if(command == 'center'){
                this.$router.push('/center')
            }else if(command == 'myassets'){
                this.$router.push('/myassets')

            }else if(command == 'purchase'){
                this.$router.push('/purchase')
            }
            else{
                this.loginOut = true;
            }
        },
        loginClose(){
            localStorage.removeItem('token');
            localStorage.removeItem('code');
            this.$router.push('/login')
        },

        languageChange(val){
            localStorage.setItem("languageName",val)
            if(this.pagePath == "/newsDetail"){
                this.$router.push("/")
            }
            location.reload();
        },

        colseCoander(){
            this.bosket = false;
        }
    },
    created(){
        this.userCode = localStorage.getItem('code')
        this.isLogin = localStorage.getItem('token')?true:false;

    },

    mounted(){
        this.pagePath = this.$route.path;

    }
}

</script>

<style lang='less' scoped>
    .web_nav{
        position: relative;
        width: 100%;
        /*height:74px;*/
        /*height: 127px;*/
        z-index:100;
        background:#fff;

        .wrap{
            height:74px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #272727;
            transform: translateZ(0);
            .nav_logo{
                font-size: 24px;
            }
            .nav_options{
                /*width: 542px;*/
                /*width: 612px;*/
                flex: 1;
                ul{
                    /*display: flex;*/
                    /*justify-content: space-between;*/
                    li{
                        color: #7B839AFF;
                        opacity: 0.7;
                        font-size: 16px;
                        cursor: pointer;
                        padding: 0 3px;
                        float: left;
                        position: relative;
                        max-width: 94px;
                        margin-right: 41px;
                        transition: all 0.5s;
                        height: 36px;
                        line-height: 36px;
                        padding-bottom: 10px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-left: 19px;

                        a{

                        }
                        &.active{

                            color: #5885FDFF;
                        }
                    }
                    li:hover{
                        color: #5885FDFF;
                    }
                }
            }
            .nav_center{
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                .in{
                    color: #7B839AFF;
                    opacity: 0.7;
                }
                .userInfo{
                    overflow: hidden;
                    width: 133px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    .el-dropdown-link {
                        cursor: pointer;
                        font-size: 16px;
                        color: #fff;
                        opacity: 0.7;
                    }
                }
            }
            /deep/   .nav_language{
                margin-left: 40px;


              /deep/ .el-dropdown{
                  font-size: 16px !important;
                  color: #7B839AFF !important;
                  opacity: 0.7;
              }
            }
            .nav_language :hover{
                cursor: pointer;
                opacity: 1;
            }
        }
    }

    .contt-text{
        font-size: 19px;
        text-align: center;
        line-height: 36px;
        color: #2C2C2C;
    }
    .rz-botton{
        width: 130px;
        height: 42px;
        text-align: center;
        background: linear-gradient(90deg, #EFCF54 0%, #BF8D08 100%);
        border-radius: 6px;
        border: none;
    }
    .gz-botton{
        width: 130px;
        height: 42px;
        background: #1D2C46;
        border-radius: 6px;
        border: none;
    }
    .flext{
        display:inline-block;
    }
    .flext-all1{
       float: left;
        margin-right: 8px;
    }
    .flext-all1 img{
       width: 148px;
    }
    .flext-all2{
        width: 200px;
        font-size: 24px;
        margin-top: 12px;
    }
    .raplwt{
        position: relative;

    }
    .zllet{
        cursor: pointer;
        right: 20px;
        top: 26%;
        position: absolute;
        font-size: 22px;
        color: #a6a8b5;
    }
  .dowstyle:hover{
      color:#5885FDFF ;
      cursor: pointer;
      text-decoration: underline;
  }

    .nav_options li>a i.underline {
        position: absolute;
        display: block;
        overflow: hidden;
        left: 50%;
        bottom: -5px;
        width: 0;
        height: 7px;
        background-color: #5885FDFF;
        opacity: 1;
        -webkit-transition: all 0.6s cubic-bezier(0.215,0.61,0.355,1) 0s;
        transition: all 0.6s cubic-bezier(0.215,0.61,0.355,1) 0s;
    }

    .nav_options li.active>a i.underline, .nav_options li:hover>a i.underline {
        width: 100%;
        opacity: 1;
        left: 0;
    }
</style>
