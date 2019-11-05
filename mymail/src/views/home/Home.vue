<!-- 组件说明 -->
<template>
  <div>
    <HomeNavBar></HomeNavBar>
    <HomeSwiper :banner=banner />
    <Recommend :recommend=recommend />
  </div>
</template>

<script>
import HomeNavBar from "components/content/homenavbar/HomeNavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/swiperView";
import Recommend from "./childComps/homeRecommendView"

export default {
  components: {
    HomeNavBar,
    HomeSwiper,
    Recommend
  },
  data() {
    return {
      banner: null,
      recommend: null
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(res)
    });
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>