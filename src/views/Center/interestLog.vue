
<!-- -->
<template>
    <div class="page">
        <div class="wrap">
            <div class="page_indicator">
                <router-link class="gobaket" to="/center">个人中心</router-link> >
                利息记录</div>
            <div class="page_content">
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column prop="date" label="时间"></el-table-column>
                    <el-table-column prop="date" label="利息"></el-table-column>
                </el-table>
                <el-pagination background  layout="prev, pager, next" :total="1000"> </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
// import { rebateLog } from '@/request/user.js'
export default {
    name: '',
    data() {
       return {
           form: {
                code :'',
				page_no:1,
                page_size:10
            },
            tableData: [],
            total:0,
       }
    },
    computed:{

    },
    watch:{

    },
    methods:{
        handleCurrentChange(val){
            this.listQuery.page_no = val;
            this.get_list();
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
                text-align: center;

            }
        }

    }
</style>


