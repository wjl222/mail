<!-- 组件说明 -->
<template>
  <!-- @click="changePath" -->
  <div class="tabbar-item" @click="changePath">
    <div v-if="imgState">
      <slot name="actived-img"></slot>
    </div>
    <div v-else>
      <slot name="img"></slot>
    </div>
    <div :style="color" class="tabbar-text">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  props: {
    path: String
  },
  data() {
    return {};
  },
  computed: {
    imgState() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    color() {
      return this.imgState ? {color : '#ff7d98'} : {}
    }
  },
  methods: {
    changePath() {
      if (this.$route.path.indexOf(this.path) === -1)
        this.$router.replace(this.path);
    }
  },
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style>
.tabbar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}

.tabbar-item img {
  height: 20px;
  width: 20px;
  margin-top: 7px;
}
</style>