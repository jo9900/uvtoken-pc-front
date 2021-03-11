
<!-- -->
<template>
    <div class="footer">
        <div class="wrap">
            <div class="foot_logo">
                <div class="flext-all1"><img src="@/assets/img/logo_taft@2x.png"/></div>

            </div>
            <!--<div class="foot_link">-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon1.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon2.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon3.png" alt=""></a>-->
                <!--<a href=""><img class="lin_img" src="@/assets/img/foot_icon4.png" alt=""></a>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
       return {

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
        background: linear-gradient(81deg, #3B3B3B 0%, #242424 100%);
        height: 68px;
        .wrap{
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
        }
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
        /*float: left;*/
        /*width: 45px;*/
        /*margin-right: 8px;*/
    }
    .flext-all2{
        width: 200px;
        font-size: 24px;
        margin-top: 18px;
    }
</style>

