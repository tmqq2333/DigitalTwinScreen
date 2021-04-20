<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top"><topanml /></div>

      <sinan />

      <scrollArc />
      <szBar />
      <Footer />

      <div class="divider">555555555555</div>
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'

export default {
  name: 'Tem3',

  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    screenSize(this.$refs.editor)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home-container {
  // position: absolute;
  // left: 0;
  // top: 0;
  width: 100vw;
  height: 100vh;
  .wrap {
    transform-origin: 0px 0px 0px;
    background: url(../assets/img/bj.jpg) no-repeat;
    background-size: cover;
    background-position: 50% 0;
    background-color: rgb(0, 0, 0);
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 100%;
    transform: scale(1, 1) !important;
    overflow: hidden;
    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: transparent;
      background: url(../assets/img/top4.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: auto;
    }
    .divider {
      position: absolute;
      left: 50px;

      width: 90%;
      height: 50px;
      background-color: gold;
      border: none;
      background: transparent;
    }
  }
}
</style>
