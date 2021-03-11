

<!-- -->
<template>
    <div class="web_nav">
        <div class="wrap">
            <div class="nav_logo">
                <img src="@/assets/logo.png"/>
                TAF Chain
            </div>
            <div class="nav_options">
                <ul>
                    <li><a href="/" :class="pagePath == '/' ? 'active' : ''">首页</a></li>
                    <li><a href="/news" :class="pagePath == '/news' ? 'active' : ''">新闻</a></li>
                    <li><a href="/books" :class="pagePath == '/books' ? 'active' : ''">白皮书</a></li>
                    <li><a href="/school" :class="pagePath == '/school' ? 'active' : ''">培训学院</a></li>
                    <li><a href="/community" :class="pagePath == '/community' ? 'active' : ''">社区</a></li>
                    <li><a href="/presell" :class="pagePath == '/presell' ? 'active' : ''">预售</a></li>
                </ul>
            </div>
            <div class="nav_center">
                <div class="in" v-if="!isLogin">
                    <a href="/login">登录</a> / <a href="/signIn">注册</a>
                </div>
                <div class="userInfo" v-else>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="nav_language">中文</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
       return {
           pagePath:'',         // 页面name
           isLogin:true
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
        console.log(this.pagePath = this.$route.path)
    }
}
</script>

<style lang='less' scoped>
    .web_nav{
        min-height:90px;
        background: #FFFFFF;

        .wrap{
            min-height:90px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #272727;
            .nav_logo{
                width: 180px;
                font-size: 24px;
            }
            .nav_options{
                width: 542px;
                ul{
                    display: flex;
                    justify-content: space-between;
                    li{
                        font-size: 18px;
                        cursor: pointer;
                        a{
                            &.active{
                                color: #D1A92D;
                            }
                        }

                    }
                }
            }
            .nav_center{
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                .in{

                }
                .userInfo{
                    .el-dropdown-link {
                        cursor: pointer;
                        font-size: 16px;
                        color: #272727;
                    }
                }
            }
              .nav_language{
                margin-left: 40px;
                  font-size: 16px !important;
                  color: #272727 !important;

            }
        }
    }

    a:hover{
        color:#D1A92D !important;
        text-decoration: underline !important;
    }
</style>
