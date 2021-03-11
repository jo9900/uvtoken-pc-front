
<!-- -->
<template>
    <div class="page">
        <div class="wrap">

            <div class="page_content">
                <div class="name">{{languageNav[languageName].language_text1}}</div>
                <div class="text-coaneret">
                    <div style="margin-bottom: 17px;">{{languageNav[languageName].language_text2}}</div>
                    <div style="margin-bottom: 17px;">{{languageNav[languageName].language_text3}}</div>
                    <div style="margin-bottom: 17px;">{{languageNav[languageName].language_text4}}</div>
                    <div>{{languageNav[languageName].language_text5}}</div>
                    <div style="margin-bottom: 20px"></div>
                    <div style=" font-size: 18px;color: #000;font-weight: 600;margin-bottom: 20px">{{languageNav[languageName].language_text6}}</div>
                    <p style="margin-bottom: 40px">1.{{languageNav[languageName].language_text7}}<span style="color:#426cff">https://www.tafchain.com</span></p>
                    <p style="margin-bottom: 40px">2.{{languageNav[languageName].language_text8}}</p>
                    <p style="margin-bottom: 40px">3.{{languageNav[languageName].language_text9}}</p>
                    <p style="margin-bottom: 40px">4.{{languageNav[languageName].language_text10}}</p>
                    <p style="margin-bottom: 40px">5.{{languageNav[languageName].language_text11}}</p>
                    <p style="margin-bottom: 40px">6.{{languageNav[languageName].language_text12}}</p>
                    <p style="margin-bottom: 40px">7.{{languageNav[languageName].language_text13}}</p>
                    <p style="margin-bottom: 40px">8.{{languageNav[languageName].language_text14}}</p>

                    <div style=" font-size: 18px;color: #000;font-weight: 600;margin-bottom: 20px">{{languageNav[languageName].language_text15}}</div>
                    <div>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text16}}</div>
                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text17}}</p>
                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text18}}</p>
                    <div>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text19}}</div>

                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text20}}</p>
                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text21}}</p>

                    <div> 3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text22}}</div>
                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text23}}</p>
                    <div>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text24}}</div>
                    <p style="margin-bottom: 40px">{{languageNav[languageName].language_text25}}</p>


                    <p style="padding-left: 40px"> • {{languageNav[languageName].language_text26}}</p>
                    <p style="padding-left: 40px;margin-bottom: 40px"> •  {{languageNav[languageName].language_text27}}
                        {{languageNav[languageName].language_text28}}</p>
                    <div>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text29}}</div>
                    <div style="margin-bottom: 40px">{{languageNav[languageName].language_text30}}</div>
                    <div>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text31}}</div>
                    <div style="margin-bottom: 40px">{{languageNav[languageName].language_text32}}</div>
                    <div>7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text33}}</div>
                     <div style="margin-bottom: 40px">{{languageNav[languageName].language_text34}}</div>
                    <div>8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{languageNav[languageName].language_text35}}</div>
                    <div style="margin-bottom:150px">{{languageNav[languageName].language_text36}}</div>

                </div>
            </div>
        </div>
        <webFoot/>
    </div>
</template>


<script>
    import webFoot from '@/Layout/footer';
    import  languageNav from "@/language/purchase"
    export default {
        name: '',
        components: {webFoot},
        data() {
            return {
                languageNav:languageNav,
                languageName:this.$languageName
            }
        },
        computed:{

        },
        watch:{

        },
        methods:{

            againApply(){
                this.$router.push({name:"KYCapply",query:{type:1}})
            }
        },
        created(){

        },
        mounted(){

        }
    }
</script>

<style lang='less' scoped>
    .page{
        background: #f0f2f5;
        overflow: hidden;
        // height: 100%;
        box-sizing: border-box;
        .wrap{
            // height: 100%;
            .page_indicator{
                margin-top: 20px;
                height: 60px;
                line-height: 60px;
                color: #333333;
                font-size: 16px;
                padding: 0 30px;
                background: #FFFFFF;
            }
            .page_content{
                margin: 20px 0 100px;
                padding: 38px;
                min-height: 800px;
                background: #FFFFFF;
                .name{
                    color: #D2A629;
                    font-size: 36px;
                    text-align: center;
                    margin-bottom: 38px;
                }
                .KYC_logo{
                    width: 82px;
                    height: 84px;
                    margin: 20px auto 0;
                }
                .status{
                    font-size: 28px;
                    color: #0E0E0E;
                    margin: 20px auto 0;
                }
                .describe{
                    width: 800px;
                    margin: 30px auto 0;
                    color: #333333;
                    font-size: 16px;
                }
                .again_btn{
                    cursor: pointer;
                    margin: 80px auto 0;
                    width: 240px;
                    height: 48px;
                    color: #FFFFFE;
                    font-size: 16px;
                    line-height: 48px;
                    border-radius: 6px;
                    background: linear-gradient(to right,#efcf54, #bf8d08);
                }
            }
        }

    }
    .text-coaneret{
        line-height: 30px;
        color: #545151;
    }

</style>

