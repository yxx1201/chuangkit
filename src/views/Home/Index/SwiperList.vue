<!-- SwiperList -->
<!-- 轮播卡片内列表渲染 -->
<template>
  <div class="theme">
    <div
      class="theme-list"
      v-for="(items, index) in themeExtends"
      :key="items.id"
    >
      <p class="title">{{ items.title }}</p>
      <div class="item-img-box">
        <div
          class="item-img"
          v-for="item in items.templates"
          :key="item.designTemplateId"
          :class="item.width == '1080px' ? 'item-img minwidth' : 'item-img maxwidth'">
          <router-link :to="'/index/details/'+item.designTemplateId">
            <img :src="'http:' + item.designTemplateImageUrl"
          /></router-link>
        </div>
      </div>
      <div
        class="more-bottom-box"
        @click="pages(items.id, index)"
        v-if="isPage[index]"
      >
        <div class="more-bottom">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SwiperList",
  data() {
    return {
      themeExtends: [],
      i: 2,
      isPage: [],
    };
  },
  methods: {
    pages(e, index) {
      axios
        .get(
          "/api/solutionSubject/themeExtend/template.do?_dataType=json&_dataClientType=3&client_type=40&themeExtendId=" +
            e +
            "&pageSize=6&pageNum=" +
            this.i
        )
        .then((res) => {
          this.themeExtends.forEach((item) => {
            if (item.id == e) {
              item.templates = item.templates.concat(
                res.data.body.data.templates
              );
              if (res.data.body.data.templates.length < 6) {
                this.isPage[index] = false;
              } else {
                this.i++;
              }
            } else {
              return 0;
            }
          });
        });
    },
    ReqGroom() {
      axios
        .get(
          `/api/solutionSubject/themeDetail.do?_dataType=json&_dataClientType=3&client_type=40&themeId=${this.$route.params.id}&templatePageSize=6`
        )
        .then((res) => {
          this.themeExtends = res.data.body.data.theme.themeExtends;
          for (let i = 0; i < this.themeExtends.length; i++) {
            this.isPage.push(true);
          }
        });
    },
  },
  mounted() {
    this.ReqGroom();
  },
  updated() {
    // this.ReqGroom()
  },
};
</script>

<style lang='scss'>
.theme {
  width: 100vw;
  padding: 0 0.2rem;
  .theme-list {
    .title {
      width: 100%;
      text-align: center;
      padding: 0.1rem 0;
      font-size: 0.36rem;
      color: #333;
    }
    .item-img-box {
      width: 100%;
      margin-top: 0.6rem;
      margin-bottom: 0.4rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item-img.maxwidth {
        width: 3.4rem;
        margin-bottom: 0.15rem;
        img {
          width: 100%;
        }
      }
      .item-img.minwidth {
        width: 2.2rem;
        margin-bottom: 0.15rem;
        img {
          width: 100%;
        }
      }
    }
  }
  .more-bottom-box {
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
    width: 100%;
    height: 0.85rem;
    .more-bottom {
      width: 3rem;
      border-radius: 0.5rem;
      height: 0.85rem;
      margin: 0 auto;
      background: #efefef;
      line-height: 0.85rem;
      text-align: center;
      color: #666;
      cursor: pointer;
    }
  }
}
</style>