<!-- ComFooterNav -->
<template>
  <div class="com-footer-nav">
    <div class="nav-box">
      <router-link to="/" @click.stop="say($event)">
        <div></div>
        <p>主页</p>
      </router-link>
      <router-link to="/devise" @click.stop="say($event)">
        <div></div>
        <p>我的设计</p>
      </router-link>
      <router-link to="/user" @click.stop="say($event)">
        <div></div>
        <p>个人主页</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComFooterNav",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    say(e) {
     e.currentTarget.style.color='red'
    },
  },
};
</script>

<style lang='scss'>
.com-footer-nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #fff;
  .nav-box {
    display: flex;
    width: 100%;
    height: 1rem;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 10px 1px #dcdcdc;
  }
}
</style>