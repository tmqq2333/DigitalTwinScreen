<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top">
        <topanml />
      </div>
      <div class="top-map">
        <sinan />
      </div>
      <!-- <seamless /> 
      <pyramid /> -->

      <!-- <scrollArc />
      <szBar />

      <ringPin />
      <rotateColorful />
      <circleRunway />
      <scanRadius /> -->
      <div class="bottom-data">
        <cakeLinkage />
        <pyramidTrend />
        <dynamicLine />
      </div>
      <Footer />
      <!-- <staffMix />
      <flashCloud />
      <ringPie />
      <colorfulRadar />

      <dynamicList />
      <bar3d />
      <colorfulArea />

      <rainbow />
      <gauge />
      <waterPolo />
      <circleNesting /> -->

      <div class="divider">555555555555</div>
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'

export default {
  name: 'Home',

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
      background: url(../assets/img/top_nav.png) no-repeat;
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
.bottom-data {
  width: 1840px;
  height: 320px;
  position: absolute;
  left: 40px;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.top-map {
  width: 1813px;
  height: 620px;
  position: absolute;
  left: 52px;
  top: 90px;
}
</style>
