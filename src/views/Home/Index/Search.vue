<!-- Search -->
<template>
  <div class="search-page">
    <div class="title">
      <div class="fs-search">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAABGdBTUEAALGPC/xhBQAABPNJREFUSA2tVltMXEUYnjl7lgLGIGlQ656FtnuWQppSw5rsLoW1IdGGpNWkCX0wrcba4iXqqzE+SGJifDDxgRhNvbSaPvlgDNa08ZJCEXapUhEbK3URKIvYNl5otUXYs+P3z9mzzFl2kVBOsjv/5fsvM//M/MPYcp8vEBaaC8D5dU4C0rgULsZnRhZUgeY1Sm9XBZImHz4z/F1OYZotVarp8kGyZkYgfIJImWdhC96aC1GMQNjXi+kW5TLj2ubtJPEHwm8bZiQhtUYgcnYRZlNGIGpKqnBStIaRSffqKi44Ez+wmvqWDb5sPEeHTK8TLcvgN6O7MiJzCsws6lHBGe8QmvarA14yVpuRfdJS1WAaPUKI+1UZ0TrTdkyOxQfy5ZKnWWHanxVUQhgK7SmXGDNy3IUh4cZg070uYRGGsFimV0idW6qJnweGi+BdYs75cc7F84oxt7B8/S5UEQbrsd/jLanLGU+PJXSNiV6Zkhl9Md/OiEbLsJBzpNe4Z9fkhb4ZwixZbRLWbIltSqfnD3LONjAhzqbGBo+QnL7q2shjliWOaZw/bEtW+e+K7DN3RJhIx/N9AdSH6LECcluEEzrABIsCeATAJx2gsSXcICw+hPT1kjJ29/j5wcuOTo5+M/wBLUZDw4O3uRQKg2p0E0YR2SQJN9c11y5R5AkMMzyPG+BbR6yhBC8T88tPX190hMVG7vU0InTI0WOHiUexa045guXGqQsD51W9zgSvhLe/VOFKaY1xcQa/PSsx2Lq1vUTFaevKPR0oUdFVVsGzc5e+BJ9xZNrYyMAVMDdQ578dYaHRqItuw/RaPB5v0NHndhiVC3t5/q6KOyuHhj694QBoREVewGl6DUfBokPk6HLGWVASoADRUMjLzAFqHj2WsdK9qMx8KpkozWIc9eKI6+gwrMNCsBldL3l/cvTMuKNFhhYytFLJQdfiOfr/Hem2JpAr7WJWNcFIvSXYQ8jkARhUCzrnZIzMsMmm4OULjZV0X0r2/VjMR768YGDTbFs3x/58E2v3hMuAsymEG+ZCyFsI1cFFw9C5RLUbx4+Wscqnk8mT/7rkCuMKvHHnztJ06uZpzCxCGHScEa/u2Tc+2j+q2BQljfpwUCywj5CM7ACw/0b3l8Ymenrm8o1ygf3BplgmY/VKAGfD68srmkdGPv8n32AlPPWl32av9uHearTxeuv0WP9p1VYGlo3XWrBbDedvTScTz6ig1dI4D10o17Nkr3Memkwmzjm+ZI/j1kKXFKCGaxWU/OHsPIeCTRCdZsyOQQy+bHPl90lO8K/kuIZ/OHt072C/CDtG1rcdmAt5UNGtN69hTNuVsH1iw+YuA1I4M36DGChj1cHobqLX4jNqI22CsVbpS9NkDMevh4hrf6TOVaz3GyAbsRkeuaPKGL32+7SrozgGKx19ZrSdZcQnhKe3D/bOS6pt7jiR0Gc2HWDC+tAG8Ms643uLvvVULwpNbwou0h9jpvbtxrVDqWT8PQUiSVdgR5ltC6+Cl6UAaAZZH9WYdsKqEsOpePwmYeldJa5q29E9duP6fByrdY/jAyNiY7KMzzEP25u6mDip6Ja/q0OhDu+V2e8PC8GfEkxsUw3zaQRAaUTXoQNt73Z2dsruibf3Qby93wEWTzU2D0z7VDLRTbYFZ5zv9FZ5vH32I/ljSAx7ik+guW66VZ+rtv8PDPKgV6n42HoAAAAASUVORK5CYII="
        />
        <input
          type="text"
          placeholder="200000+ 免费模板任你搜索"
          :change="putval == '' ? (isput = false) : (isput = true)"
          v-model="putval"
        />
        <div class="cloput-box">
          <img
            v-if="isput"
            @click="empty"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5YWz6ZetPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaQnOe0oumhtemdoi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAzLjAwMDAwMCwgLTcwLjAwMDAwMCkiIGZpbGw9IiNDRENEQ0QiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSLmkJzntKIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgNjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YWz6ZetIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODcuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC4yMzk4NDgxLDEuNzU5OTQ1MTkgQzcuOTA0MjgzNDEsLTAuNTg2NjQ4Mzk2IDQuMTA2MzM1OTEsLTAuNTg2NjQ4Mzk2IDEuNzYwMTUxODcsMS43NTk5NDUxOSBDLTAuNTg2NzE3Mjg5LDQuMTA2ODgxMzQgLTAuNTg2NzE3Mjg5LDcuOTA0NTk0NyAxLjc2MDE1MTg3LDEwLjIzOTU0MSBDNC4xMDY2Nzg0NywxMi41ODY4MTk3IDcuOTA0MjgzNDEsMTIuNTg2ODE5NyAxMC4yMzk4NDgxLDEwLjIzOTU0MSBDMTIuNTg2NzE3Myw3LjkwNDU5NDcgMTIuNTg2NzE3Myw0LjEwNjg4MTM0IDEwLjIzOTg0ODEsMS43NTk5NDUxOSBaIE05LjQ2OTA5MTIyLDguODMzOTgyNzkgQzkuNjM5MDAwMyw5LjAwMzg5NjcyIDkuNjM5MDAwMyw5LjI4NzU0MzM2IDkuNDY5MDkxMjIsOS40NjkxMDQ2MSBDOS4yODc4Nzc3MSw5LjYzOTcwMzY4IDkuMDA0MjM5MTYsOS42Mzk3MDM2OCA4LjgzMzk4NzUzLDkuNDY5MTA0NjEgTDYuMDA1NDgwOTQsNi42NDA4NTk4NSBMMy4xNzY5NzQzNSw5LjQ2OTEwNDYxIEMyLjk5NTc2MDg0LDkuNjM5NzAzNjggMi43MTIxMjIyOSw5LjYzOTcwMzY4IDIuNTQyMjEzMjEsOS40NjkxMDQ2MSBDMi4zNjA2NTcxNCw5LjI4Nzg4NTkyIDIuMzYwNjU3MTQsOS4wMDQyMzkyOCAyLjU0MjIxMzIxLDguODMzOTgyNzkgTDUuMzcwNzE5OCw2LjAwNTczODAyIEwyLjU0MjIxMzIxLDMuMTc3NDkzMjYgQzIuMzYwNjU3MTQsMi45OTU5MzIgMi4zNjA2NTcxNCwyLjcxMjYyNzkzIDIuNTQyMjEzMjEsMi41NDIzNzE0MyBDMi43MTIxMjIyOSwyLjM2MTE1Mjc0IDIuOTk1NzYwODQsMi4zNjExNTI3NCAzLjE3Njk3NDM1LDIuNTQyMzcxNDMgTDYuMDA1NDgwOTQsNS4zNzA2MTYxOSBMOC44MzM5ODc1MywyLjU0MjM3MTQzIEM5LjAwMzg5NjYsMi4zNjExNTI3NCA5LjI4NzUzNTE1LDIuMzYxMTUyNzQgOS40NjkwOTEyMiwyLjU0MjM3MTQzIEM5LjYzOTAwMDMsMi43MTIyODUzNiA5LjYzOTAwMDMsMi45OTU5MzIgOS40NjkwOTEyMiwzLjE3NzQ5MzI2IEw2LjY0MDU4NDYzLDYuMDA1NzM4MDIgTDkuNDY5MDkxMjIsOC44MzM5ODI3OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          />
        </div>
      </div>
      <span> <router-link to="/">取消</router-link></span>
    </div>
    <div class="hot-search">
      <dl>
        <dt class="text-search-title">热门搜索</dt>
        <dd v-for="item in hotsearch" :key="item.templateCount">
          {{ item.keyword }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      hotsearch: [],
      isput: false,
      putval: "",
    };
  },
  methods: {
    HotSearch() {
      axios
        .get("/api/template/getRecommendKeyword.do?_dataType=json")
        .then((res) => {
          this.hotsearch = res.data.body.data;
        });
    },
    empty(){
      this.putval=''
      this.isput=false
    }
  },
  mounted() {
    this.HotSearch();
  },
};
</script>

<style lang='scss'>
.search-page {
  width: 100vw;
  padding: 0 0.2rem;
  margin: 0 auto;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .fs-search {
      height: 0.7rem;
      width: 6rem;
      border-radius: 0.5rem;
      margin: 0.1rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f4f9;
      img {
        margin-right: 0.1rem;
        width: 0.35rem;
      }
      .cloput-box {
        width: 0.3rem;
        height: 0.3rem;
      }
      &:first-child img {
        width: 0.3rem;
      }
      input {
        width: 4.8rem;
        height: 0.5rem;
        background-color: #f3f4f9;
        color: #666;
      }
    }
  }
  .hot-search {
    padding: 0.3rem 0;
    dl {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-content: space-around;
      dt {
        width: 100%;
        padding: 0.1rem 0;
        font-size: 0.28rem;
      }
      dd {
        color: #555;
        border-radius: 0.5rem;
        padding: 0.1rem 0.3rem;
        margin: 0.1rem;
        background: #f3f4f9;
      }
    }
  }
}
</style>