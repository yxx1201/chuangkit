<!-- Detail -->
<!-- 所有海报详情页 -->
<template>
  <div class="detail-page">
    <div class="max-img">
      <img
        :width="height >= 1280 ? '75%' : '100%'"
        :src="current.designTemplateImageUrl"
      />
    </div>
    <div class="template-title">
      <h2>{{ current.templateTitle }}</h2>
      <h6>{{ current.kindTitle }}</h6>
      <p>
        <span>图片编号为{{ current.designTemplateId }}</span
        >， <span>该手机海报尺寸是{{ current.width }}</span> *
        <span>{{ current.height }}</span
        >。 <span>点击 “立即使用” </span>，
        <span>《{{ current.templateTitle }}》 一键生成</span>，
        <span>在线编辑图片，简单拖拉拽，秒出精美</span>
        <span> {{ current.kindTitle }}</span
        >。
      </p>
      <ul class="matching-box">
        <li v-for="text in matching" :key="text">
          {{ text }}
        </li>
      </ul>
    </div>
    <dl class="recommend-box">
      <dt><h2>为你推荐</h2></dt>
      <dd
        :style="item.width == '1080px' ? 'width:3.3rem' : 'width:3.3rem'"
        v-for="item in recommendlist"
        :key="item.designTemplateId"
      >
        <router-link :to="'/index/details/' + item.designTemplateId">
          <img :src="item.designTemplateImageUrl" />
        </router-link>
      </dd>
    </dl>
    <footer class="footer">
      <section class="footer-edit">
        <div class="love">
          <img
            src="data:image/png;base64,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"
          />
        </div>
        <div class="edit">立即编辑</div>
      </section>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      current: {},
      matching: [],
      recommendlist: [],
      uppath: "",
      height:0
    };
  },
  watch: {
    $route(to) {
      if (to.path == this.uppath) {
        return false;
      } else {
        this.Details();
      }
      this.uppath = to.path;
    },
  },
  methods: {
    Details() {
      axios
        .get(
          "/details/designtemplate/getDetailCacheFileUrl.do?_dataType=json&_dataClientType=3&client_type=40&id=" +
            this.$route.params.id
        )
        .then((res) => {
          this.current = res.data.body.currentTemplate;
          this.height=res.data.body.currentTemplate.height.split(/px$/g)[0]
          let matching = /\s/g;
          this.matching =
            res.data.body.currentTemplate.keywords.split(matching);
          // console.log(res.data.body);
          this.recommendlist = res.data.body.recommendedTemplates;
        });
    },
  },
  mounted() {
    this.Details();
  },
};
</script>

<style lang='scss'>
.detail-page {
  padding: 0 0.3rem;
  padding-bottom: 1.5rem;
  .max-img {
    padding: 0.3rem 0.4rem;
    width: calc(100vw - 0.6rem);
    height: 8.8rem;
    margin: 0 auto;
    border-radius: 0.3rem;
    background: #e3e6e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .template-title {
    margin-top: 0.35rem;
    h2 {
      color: #000;
    }
    h6 {
      color: #666;
      font-weight: 500;
      font-size: 0.26rem;
      padding: 0.15rem 0;
    }
    p {
      color: #000;
      font-weight: 500;
      font-size: 0.27rem;
      margin-top: 0.1rem;
      line-height: 0.48rem;
    }
    .matching-box {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 0.2rem;
        margin-top: 0.2rem;
        padding: 0.1rem 0.3rem;
        border-radius: 0.5rem;
        color: #000;
        background: #f3f4f9;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .recommend-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.35rem;
    dt {
      width: 100%;
      margin-bottom: 0.4rem;
    }
    h2 {
      color: #000;
    }
    dd {
      margin-bottom: 0.2rem;
      img {
        width: 100%;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: calc(100vw - 0.6rem);
    height: 1.45rem;
    padding: 0.25rem 0;
    background: #fff;
    // z-index: 9;
    .footer-edit {
      height: 1rem;
      position: relative;
      display: flex;
      justify-content: space-between;
      .love {
        width: 1rem;
        height: 1rem;
        background: white;
        img {
          padding: 0.25rem;
          width: 1rem;
          height: 1rem;
        }
      }
      .edit {
        width: 5.8rem;
        background: #0773fc;
        text-align: center;
        line-height: 1rem;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.3rem;
      }
    }
  }
}
</style>