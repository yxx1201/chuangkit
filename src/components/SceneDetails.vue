<!-- SceneDetails -->
<!-- 主页场景列表 -->
<template>
  <div class="scene-details-con">
    <h1>
      <p>{{ tulists.name }}</p>
      <span>进入场景</span>
    </h1>
    <ul class="scene-list-con">
      <li v-for="item in tulists.templates" :key="item.designTemplateId">
        <router-link :to="`/index/details/${item.designTemplateId}`">
          <img :src="'http:' + item.designTemplateImageUrl"
        /></router-link>
      </li>
    </ul>
    <div class="scene-btn">
      <div class="scene-more">更多</div>
      <div class="scene-batch">换一批</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SceneDetails",
  data() {
    return {};
  },
  props: ["tulists"],
  mounted() {
    // console.log(this.tulists);
  },
};
</script>

<style lang='scss'>
.scene-details-con {
  h1 {
    padding: 0.3rem 0.2rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.32rem;
    }
    span {
      font-size: 0.26rem;
      font-weight: 500;
    }
  }
  .scene-list-con {
    margin: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 2.2rem;
      margin-bottom: 0.2rem;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
  .scene-btn {
    margin: 0 0.2rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    line-height: 0.8rem;
    .scene-more,
    .scene-batch {
      width: 3.4rem;
      height: 0.8rem;
      border-radius: 1rem;
      background: #efefef;
    }
  }
}
</style>