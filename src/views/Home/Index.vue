<!-- Index -->
<template>
  <div class="header">
    <div class="search-box">
      <DowLoadApp v-if="$store.state.isApp"></DowLoadApp>
      <router-link to="/search">
        <div class="fs-search-box">
          <div class="fs-search">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAABGdBTUEAALGPC/xhBQAABPNJREFUSA2tVltMXEUYnjl7lgLGIGlQ656FtnuWQppSw5rsLoW1IdGGpNWkCX0wrcba4iXqqzE+SGJifDDxgRhNvbSaPvlgDNa08ZJCEXapUhEbK3URKIvYNl5otUXYs+P3z9mzzFl2kVBOsjv/5fsvM//M/MPYcp8vEBaaC8D5dU4C0rgULsZnRhZUgeY1Sm9XBZImHz4z/F1OYZotVarp8kGyZkYgfIJImWdhC96aC1GMQNjXi+kW5TLj2ubtJPEHwm8bZiQhtUYgcnYRZlNGIGpKqnBStIaRSffqKi44Ez+wmvqWDb5sPEeHTK8TLcvgN6O7MiJzCsws6lHBGe8QmvarA14yVpuRfdJS1WAaPUKI+1UZ0TrTdkyOxQfy5ZKnWWHanxVUQhgK7SmXGDNy3IUh4cZg070uYRGGsFimV0idW6qJnweGi+BdYs75cc7F84oxt7B8/S5UEQbrsd/jLanLGU+PJXSNiV6Zkhl9Md/OiEbLsJBzpNe4Z9fkhb4ZwixZbRLWbIltSqfnD3LONjAhzqbGBo+QnL7q2shjliWOaZw/bEtW+e+K7DN3RJhIx/N9AdSH6LECcluEEzrABIsCeATAJx2gsSXcICw+hPT1kjJ29/j5wcuOTo5+M/wBLUZDw4O3uRQKg2p0E0YR2SQJN9c11y5R5AkMMzyPG+BbR6yhBC8T88tPX190hMVG7vU0InTI0WOHiUexa045guXGqQsD51W9zgSvhLe/VOFKaY1xcQa/PSsx2Lq1vUTFaevKPR0oUdFVVsGzc5e+BJ9xZNrYyMAVMDdQ578dYaHRqItuw/RaPB5v0NHndhiVC3t5/q6KOyuHhj694QBoREVewGl6DUfBokPk6HLGWVASoADRUMjLzAFqHj2WsdK9qMx8KpkozWIc9eKI6+gwrMNCsBldL3l/cvTMuKNFhhYytFLJQdfiOfr/Hem2JpAr7WJWNcFIvSXYQ8jkARhUCzrnZIzMsMmm4OULjZV0X0r2/VjMR768YGDTbFs3x/58E2v3hMuAsymEG+ZCyFsI1cFFw9C5RLUbx4+Wscqnk8mT/7rkCuMKvHHnztJ06uZpzCxCGHScEa/u2Tc+2j+q2BQljfpwUCywj5CM7ACw/0b3l8Ymenrm8o1ygf3BplgmY/VKAGfD68srmkdGPv8n32AlPPWl32av9uHearTxeuv0WP9p1VYGlo3XWrBbDedvTScTz6ig1dI4D10o17Nkr3Memkwmzjm+ZI/j1kKXFKCGaxWU/OHsPIeCTRCdZsyOQQy+bHPl90lO8K/kuIZ/OHt072C/CDtG1rcdmAt5UNGtN69hTNuVsH1iw+YuA1I4M36DGChj1cHobqLX4jNqI22CsVbpS9NkDMevh4hrf6TOVaz3GyAbsRkeuaPKGL32+7SrozgGKx19ZrSdZcQnhKe3D/bOS6pt7jiR0Gc2HWDC+tAG8Ms643uLvvVULwpNbwou0h9jpvbtxrVDqWT8PQUiSVdgR5ltC6+Cl6UAaAZZH9WYdsKqEsOpePwmYeldJa5q29E9duP6fByrdY/jAyNiY7KMzzEP25u6mDip6Ja/q0OhDu+V2e8PC8GfEkxsUw3zaQRAaUTXoQNt73Z2dsruibf3Qby93wEWTzU2D0z7VDLRTbYFZ5zv9FZ5vH32I/ljSAx7ik+guW66VZ+rtv8PDPKgV6n42HoAAAAASUVORK5CYII="
            />
            <span>200000+ 免费模板任你搜索</span>
          </div>
        </div>
      </router-link>
    </div>
    <ul
      class="scene-box"
      :style="$store.state.isApp ? 'margin-top:1.3rem' : 'margin:0'"
    >
      <li v-for="item in scene.list" :key="item.designKindId">
        <img :src="'http:' + item.thumbUrl" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <div class="special">
      <h1>推荐专题</h1>
      <SwiperLode></SwiperLode>
    </div>
    <div v-for="(tu, index) in scene.tulists" :key="tu.kindId">
      <SceneDetails :tulists="scene.tulists[index]"></SceneDetails>
    </div>
    <ComFooterNav />
  </div>
</template>

<script>
import axios from "axios";
import DowLoadApp from "@/components/DowLoadApp.vue";
import SwiperLode from "@/components/SwiperLode.vue";
import SceneDetails from "@/components/SceneDetails.vue";
import ComFooterNav from "@/components/ComFooterNav.vue";

export default {
  components: {
    SwiperLode,
    SceneDetails,
    DowLoadApp,
    ComFooterNav,
  },
  name: "Index",
  data() {
    return {
      scene: {
        list: [],
        tulists: [],
      },
      isApp: true,
      i: 1,
    };
  },
  methods: {
    Homeds() {
      axios
        .get("/api/mobile/main/getMainMiniProgramHomeInfo.do")
        .then((res) => {
          res.data.body.data.scene.splice(
            res.data.body.data.scene.length - 2,
            2
          );
          this.scene.list = res.data.body.data.scene;
        });
    },
    scenePage1() {
      axios
        .get("/api/mobile/main/getSceneDetail.do?page_no=" + this.i)
        .then((res) => {
          if (res.data.body.data.sceneDetail) {
            this.scene.tulists = this.scene.tulists.concat(
              res.data.body.data.sceneDetail
            );
          } else {
            return false;
          }
        });
    },
    lazyLoade() {
      let wH = document.documentElement.scrollTop || document.body.scrollTop;
      let cH =
        document.documentElement.clientHeight || document.body.clientHeight;
      let mH =
        document.documentElement.offsetHeight || document.body.offsetHeight;
      if (Number(wH + cH) == mH) {
        this.i++;

        this.scenePage1();
      }
    },
  },
  mounted() {
    this.Homeds();
    this.scenePage1();
    window.onscroll = this.lazyLoade;
  },
};
</script>

<style lang='scss'>
$c: #f8f8fb;
$f: #fff;
.header {
  margin: 0 auto;
  background-color: $f;
  .search-box {
    position: fixed;
    top: 0;
    width: 100vw;
    background: $f;
    z-index: 99;
    .fs-search-box {
      padding: 0.2rem 0;
      .fs-search {
        width: 90vw;
        height: 0.7rem;
        border-radius: 0.35rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $c;
        img {
          width: 0.32rem;
          margin-right: 0.2rem;
        }
        span {
          color: #888;
        }
      }
    }
  }
  .scene-box {
    padding: 1.1rem 0 0.4rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
      width: 1.8rem;
      height: 2.1rem;
      padding: 0.2rem 0.3rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-between;
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
      p {
        white-space: nowrap;
      }
    }
    border-bottom: 0.1rem solid $c;
  }
  .special {
    h1 {
      padding: 0.5rem 0.2rem 0.3rem 0.2rem;
      font-size: 0.32rem;
    }
  }
}
</style>