<!-- -->
<template>
  <div class="page">
    <div class="project project-2">
      <div class="wrap">
        <div class="content">
          <div class="content_text wow fadeInRight">
            <div class="bget">
              <div>{{ $t( 'text112' ) }}</div>
            </div>
          </div>
          <div class="bloart wow fadeInLeft">
            <img
              class="content_img"
              src="@/assets/img/pic_help@2x.png"
              alt="bg-img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project project-4">
      <div class="wrap">
        <div class="content">
          <div>
            <div class="title-1">
              {{ $t( 'text113' ) }}</div>
            <div class="coak">
              <div class="bmllort">
                <div class="boet" v-for="(item, index) in listTitle" :key="index">
                  <div class="title-2" @click="changeRoute(index)">{{ item }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <webFoot />
  </div>
</template>

<script>
import webFoot from "@/components/footer";
import { helpList } from "@/request/news";
export default {
  name: "",
  components: { webFoot },
  data() {
    return {
      listData: [],
      // TODO 这里后续跟进 再决定是写死还是获取返回
      listTitle: [
          '什么是去中心化钱包？',
          '什么是HD钱包、托管钱包、多链钱包？',
          '什么是助记词？',
          '为什么一定要备份助记词！',
          '如何备份助记词？',
          '什么是私钥？',
          '钱包密码忘了怎么办？',
          '为什么搜索不到某个代币?',
          '转账不成功怎么办?',
          '钱包被盗怎么办?',
          '转错地址怎么办？',
          '如何申请海外 Apple ID？?',
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    getlist() {
      helpList().then((res) => {
        if (res.code === 0)
          this.listData = res.data;
      });
    },
    changeRoute(index) {
      this.$router.push({
        path: '/helpDetail',
        query: {
          id: index + 1
        }
      })
    }
  },
  created() {
    this.getlist();
  },

  mounted() {},
};
</script>

<style lang='less' scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.page {
  .project {
    background: #ffffff;
    .wrap {
      .title {
        color: #282828;
        font-size: 36px;
        line-height: 60px;
        text-align: center;
        margin-bottom: 39px;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        .content_img {
          width: 341px;
          height: 296px;
        }

        .content_text {
          color: #7b7b7b;
          font-size: 16px;
          width: 498px;
          text-align: right;
        }
        .bget {
          font-size: 50px;
          color: #272727ff;
          margin-bottom: 15px;
          letter-spacing: 4px;
        }
        .caosjet {
          font-size: 20px;
          color: #7b839aff;
          line-height: 29px;
          margin-bottom: 19px;
        }
      }
    }
  }

  .project-2 {
    
  background: linear-gradient(180deg, #F6FAFF 0%, #E5EFFF 100%);
    .wrap {
      .content {

        height: 500px;
        .content_text {
          width: 597px;
          text-align: left;
          margin-right: 44px;
        }
      }
    }
  }

  .project-3 {
    padding-top: 110px;
    padding-bottom: 82px;
    .paddgint {
      margin-bottom: 131px;
    }
    .title-1 {
      text-align: center;
      color: #272727ff;
      font-size: 34px;
      margin-bottom: 90px;
    }
    .fc-img img {
      width: 955px;
    }
  }

  .project-4 {
    padding-top: 140px;
    padding-bottom: 196px;
    .paddgint {
      margin-bottom: 131px;
    }
    .title-1 {
      text-align: center;
      color: #272727ff;
      font-size: 34px;
      margin-bottom: 80px;
    }
    .title-2 {
      font-size: 16px;
      color: #272727ff;
    }
    .title-3 {
      font-size: 16px;
      color: #7b839aff;
    }
    .coak {
      display: flex;
    }
    .wloet img {
      width: 60px;
    }
    .bmllort {
      display: flex;
      flex-wrap: wrap;
    }
    .boet {
      width: 570px;
      height: 56px;
      padding: 17px 0px;
      &:nth-of-type(odd) {
        margin-right: 29px;
      }
      border: 1px solid #bacdff;
      text-align: center;
      margin-bottom: 35px;
      transition: all 0.3s;
      cursor: pointer;
    }

    .boet:hover {
      box-shadow: 4px 4px 12px 0px rgba(88, 133, 253, 0.18);
    }
  }
}
</style>
