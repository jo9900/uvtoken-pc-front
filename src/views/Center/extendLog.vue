
<!-- -->
<template>
    <div class="page">
        <div class="wrap">
            <div class="page_indicator">
                <router-link class="gobaket" dir="ltr" to="/center">{{languageNav[languageName].language_text1}}</router-link>
                > {{languageNav[languageName].language_text12}}</div>
            <div class="page_content">
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column prop="time " :label="languageNav[languageName].language_text3" align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.time | trimet(that)}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name " :label="languageNav[languageName].language_text9" align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.name}}</span>
                        </template>

                    </el-table-column>
                    <template slot="empty">
                        <div class="noData">{{languageNav[languageName].language_text11}}</div>
                    </template>
                </el-table>
                <el-pagination @current-change="handleCurrentChange" :page-size="form.page_size"  layout="prev, pager, next" :total="total" background></el-pagination>
            </div>
        </div>
        <webFoot/>
    </div>
</template>

<script>
import webFoot from '@/Layout/footer';
import { marketingLog } from '@/request/user.js'
import  languageNav from "@/language/coander"
export default {
    name: '',
    components: {webFoot},
    data() {
        return {
            that:this,
            form: {
                code :'',
				page_no:1,
                page_size:50
            },
            tableData: [],
            total:0,
            languageNav:languageNav,
            languageName:this.$languageName
        }
    },
    computed:{

    },
    watch:{

    },

    methods:{
        handleCurrentChange(val) {
            this.form.page_no = val;
            this.getList()
        },

        getList(){
            let params = this.form
            marketingLog(this.$qs.stringify(params)).then(res=>{
                console.log(res)
                if(res.code == 0){
                    this.tableData = res.data.records;
                    this.total = res.data.total
                }else{
                    this.$message.error(res.msg);
                }
            })
        }
    },
    created(){
        this.form.code = localStorage.getItem('code')
    },
    mounted(){
        this.getList()
    },
    filters:{
        trimet(trime,that) {
            let parsTrme = that.$moment(Math.floor(trime*1000)).format('YYYY-MM-DD HH:mm')
            return  parsTrme
        }
    }
}
</script>

<style lang='less' scoped>
    .page{
        background: #f0f2f5;
        overflow: hidden;
        box-sizing: border-box;
        .wrap{
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
                text-align: center;

            }
        }

    }
</style>


