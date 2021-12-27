<!-- SwiperLode -->
<!-- 主页的选项卡 -->
<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="sp in themes" :key="sp.id">
        <router-link :to="`index/sweiperlist/${sp.id}`">
          <h6>{{ sp.title }}</h6>
          <span>{{ sp.themeDescribe }}</span>
          <i class="pr-bark"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper.min.css";
export default {
  name: "SwiperLode",
  data() {
    return {
      themes: {},
    };
  },
  methods: {
    swiperbegin() {
      let myswiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        freeMode: {
          momentum: false,
        },
      });
      myswiper;
    },
    swiperdata() {
      axios
        .get(
          "/api/solutionSubject/theme.do?_dataType=json&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2"
        )
        .then((res) => {
          this.themes = res.data.body.data.themes;
          // console.log(res.data.body);
        });
    },
  },
  mounted() {
    this.swiperbegin();
    this.swiperdata();
  },
};
</script>

<style lang='scss'>
$colors: rgb(255, 0, 149), orange, yellow, rgb(2, 221, 255), blue, purple;

$c: #ededed;
$f: #fff;
.swiper {
  margin: 0 0.1rem;
  padding: 0.2rem 0;
  .swiper-wrapper {
    .swiper-slide {
      width: 2.5rem !important;
      background: $f;
      height: 1.3rem;
      margin: 0.1rem 0.1rem;

      box-shadow: 0 0 4px 2px $c;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-content: space-between;
      position: relative;
      overflow: hidden;
      a {
        display: block;
        padding: 0.3rem 0.3rem;
      }
      h6 {
        width: 100%;
        font-size: 0.26rem;
      }
      span {
        padding: 0.2rem 0;
        font-size: 0.2rem;
      }

      @for $i from 1 through length($colors) {
        &:nth-child(#{length($colors)}n + #{$i}) .pr-bark {
          background: lighten(nth($colors, $i), 20%);
        }
      }
      .pr-bark {
        position: absolute;
        bottom: -0.5rem;
        right: -0.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }
}
</style>