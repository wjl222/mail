<!-- 组件说明 -->
<template>
  <div id="tabbar-container">
      <slot></slot>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    changePath() {}
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
#tabbar-container {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #f6f6f6;
}
</style>