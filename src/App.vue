<!-- App -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang='scss'>
@import url("./assets/sass/base.scss");
html {
  font-size: 13.333333vw;
}
body {
  font-size: 0.26rem;
}
#app {
  max-width: 100vw;
  margin: 0 auto;
}
</style>