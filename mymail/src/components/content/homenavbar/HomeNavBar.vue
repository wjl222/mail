<!-- 组件说明 -->
<template>
  <div>
      <NavBar class="NavBar">
          <p slot="center" class="nav-text">购物车</p>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/commen/navbar/NavBar'

export default {
  components: {
      NavBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
.NavBar {
  background: var(--color-tint)
}
.nav-text {
  color: #fff;
}
</style>