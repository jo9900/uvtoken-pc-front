<!-- -->
<template>
    <div class="page">
        <div class="soloet">
            <div class="page-gl">
                <div class="page-sll">
                    <div class="laowlt">
                        <h2 class="page-oswt">{{languageNav[languageName].language_text27}}</h2>
                        <p class="wplder">{{languageNav[languageName].language_text28}}</p>
                    </div>
                </div>
            </div>
            <div class="news-conter">
              <div class="title-gosk">{{dataInfo.title}}</div>
              <div class="trime-Conder">{{languageNav[languageName].language_text29}}：{{dataInfo.publish_date}}</div>
              <div class="hrw"></div>
              <div class="textCoant" v-html="dataInfo.detail">

              </div>
            </div>


        </div>

        <webFoot/>
    </div>
</template>


<script>
    import webFoot from '@/Layout/footer';
    import {detail}  from "@/request/news"
    import  languageNav from "@/language/index"
    export default {
        name: '',
        components: {webFoot},
        data() {
            return {
              dataInfo:{},
            languageNav:languageNav,
            languageName:this.$languageName
            }
        },
        computed:{

        },
        watch:{

        },
        created(){
            this.get_data();
        },
        mounted(){

        },
        methods:{
            get_data(){
                detail(this.$qs.stringify({
                    lang_type:this.$languageName,
                    code:this.$route.query.code
                })).then(res=>{
                   this.dataInfo = res.data
                })
            }
        }

    }
</script>

<style lang='less' scoped>
    .page{

        background: #ffffff;


    }
    .page-gl{
        width:100%;
        height: 280px;
        overflow: hidden;
        margin-bottom: 58px;
        background:url("/img/new-bg1.jpg") no-repeat center;
    }
    .soloet{
        margin-bottom: 90px;
    }
    .page-sll{
        width: 1200px;
        margin:0 auto;
        color: #ffffff;
    }
    .laowlt{
        margin-top: 104px;
    }
    .page-oswt{
        font-size: 30px;
    }
    .wplder{
        font-size: 18px;
    }
    .news-conter{
        width: 1200px;
        margin:0 auto;
        text-align: center;
    }
    .title-gosk{
        color: #282828;
        font-size: 30px;
    }
    .trime-Conder{
       color: #808080;
        font-size: 14px;
        margin: 30px 0;
    }
    .hrw{
        width: 1200px;
        height: 1px;
        border-bottom: 1px solid #DADADA;
        margin-bottom: 50px;
    }
    .textCoant {
        text-align: left;
        color: #808080;
        font-size: 16px;
        line-height: 35px;

    }
</style>
