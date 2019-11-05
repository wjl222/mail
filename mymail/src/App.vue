<template>
  <div id="app">
    <router-view></router-view>
    <TabbarMain></TabbarMain>
  </div>
</template>

<script>
import TabbarMain from 'components/content/tabbarMain/TabbarMain'

export default {
  name: "app",
  components: {
    TabbarMain
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
