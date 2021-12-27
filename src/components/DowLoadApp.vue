<!-- DownloadApp -->
<template>
  <div class="download-app">
    <div class="close-app" @click="say">×</div>
    <div class="app-logo">
      <img src="https://m.chuangkit.com/ziyuan/images/cktlogo.jpg" />
    </div>
    <div class="app-hyper">APP内打开</div>
  </div>
</template>

<script>
export default {
  name: "DownLoadApp",
  methods: {
    say() {
      this.$store.commit("FisApp");
    },
  },
};
</script>

<style lang='scss'>
.download-app {
  height: 1.2rem;
  background: #0773fc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .close-app {
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.6rem;
    color: #fff;
  }
  .app-logo {
    width: 3.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .app-hyper {
    width: 2.2rem;
    margin: 0 .4rem;
    height: 0.6rem;
    border-radius: .5rem;
    line-height: 0.6rem;
    background: #fff;
    color: #0773fc;
    text-align: center;
  }
}
</style>