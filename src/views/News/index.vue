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
                 <div>
                     <ul>
                         <li class="news-list" v-for="item in list">
                             <div class="coat-got">
                                 <router-link  class="linkHaef" :to="{path:'/newsDetail',query:{code:item.code}}">
                                     <img :src="BaseUrl+item.pic_url"/>
                                 </router-link>
                             </div>
                             <div class="dissoer">
                                 <h3>
                                     <router-link  class="linkHaef" :to="{path:'/newsDetail',query:{code:item.code}}">
                                         {{item.title}}
                                     </router-link>
                                 </h3>
                                 <div class="trime-lk">{{item.publish_date}}</div>
                                 <div class="text-conter">
                                     {{item.digest}}
                                 </div>
                             </div>
                         </li>

                     </ul>
                 </div>

                 <div>
                     <el-pagination
                             background
                             layout="prev, pager, next"
                             :total="total"
                             :page-size="listQuery.page_size"
                             @current-change="handleCurrentChange"
                     >

                     </el-pagination>
                 </div>
             </div>


         </div>

        <webFoot/>
    </div>
</template>

<script>
import webFoot from '@/Layout/footer';
import {digest}  from "@/request/news"
import  languageNav from "@/language/index"
export default {
    name: '',
    components: {webFoot},
    data() {
       return {
        BaseUrl:this.$BaseUrl,
        list:[],
        listQuery:{
            lang_type:this.$languageName,
            page_no:1,
            page_size:10
        },
           total:0,
           languageNav:languageNav,
           languageName:this.$languageName
       }
    },
    computed:{

    },
    watch:{

    },
    created(){
        this.get_list();

    },
    mounted(){

    },
    methods:{
          get_list(){
              digest(this.$qs.stringify(this.listQuery)).then(res=>{
                this.list = res.data.news;
                this.total = res.data.total;
              })
         },
        handleCurrentChange(val){
                this.listQuery.page_no = val;
                this.get_list();
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
    }
    .news-list{
        overflow: hidden;
        border-bottom: 1px solid #DADADA;
        margin-bottom: 30px;
        padding-bottom: 30px;
    }
    .coat-got{
       float: left;
    }
    .coat-got linkHaef{
          display: block;
    }
    .news-list img {
        width: 320px;
        height: 180px;
        margin: 0 22px 0 auto;
        object-fit: cover;
    }
    .dissoer{
        color: #808080;
    }
    .dissoer h3 a{
        font-size: 24px;
        font-family: Alibaba;
        font-weight: normal;
        color: #282828;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .dissoer h3 a:hover{
       text-decoration:underline !important;
    }
    .trime-lk{
        font-size: 14px;
        color: #808080;
        margin: 11px 0;
    }
    .news-conter{
        line-height: 30px;
        font-size: 16px;
    }
</style>
