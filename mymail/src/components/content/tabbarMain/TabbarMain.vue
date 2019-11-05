<!-- 组件说明 -->
<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="actived-img" src="~assets/img/tabbar/home-actived.png" />
        <img slot="img" src="~assets/img/tabbar/home.png" />
        <div slot="tabbar-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/catagory">
        <img slot="actived-img" src="~assets/img/tabbar/catagory-actived.png" />
        <img slot="img" src="~assets/img/tabbar/catagory.png" />
        <div slot="tabbar-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img slot="actived-img" src="~assets/img/tabbar/cart-actived.png" />
        <img slot="img" src="~assets/img/tabbar/cart.png" />
        <div slot="tabbar-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img slot="actived-img" src="~assets/img/tabbar/profile-actived.png" />
        <img slot="img" src="~assets/img/tabbar/profile.png" />
        <div slot="tabbar-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "components/commen/tabbar/Tabbar";
import TabbarItem from "components/commen/tabbar/Tabbaritem";

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style>
</style>