<!-- 组件说明 -->
<template>
  <div class="rec-img-container">
    <div v-for="(item,index) in recommend" class="rec-img-text">
      <a :href="item.link">
        <img :src="item.image" class="rec-img" />
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
// import x from ''
export default {
  components: {},
  props: {
      recommend: {
          type: Array
      }
  },
  computed: {},
  methods: {}
};
</script>

<style>
.rec-img-container {
    display: flex
}

.rec-img-text {
    flex: 1;
    text-align: center;
    font-size: 15px;
}

.rec-img-text p {
    margin-top: 3px;
}

.rec-img {
    width: 70px;
    height: 70px;
}
</style>