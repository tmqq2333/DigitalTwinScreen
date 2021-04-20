<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top"><topanml /></div>

      <div class="top-map">
        <sinan />
      </div>
      <div class="bottom-data">
        <ringPin />
        <rotateColorful />
        <circleRunway />
        <scanRadius />
      </div>
      <Footer />
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
  }
}
.bottom-data {
  width: 1840px;
  height: 400px;
  position: absolute;
  left: 40px;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.top-map {
  width: 1813px;
  height: 560px;
  position: absolute;
  left: 52px;
  top: 90px;
}
</style>
