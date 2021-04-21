<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top">
        <topanml />
      </div>
      <div class="matter" id="main-tpl">
        <div class="data-left">
          <cakeLinkage />
          <pyramidTrend />
          <dynamicLine />
        </div>
        <div class="data-right">
          <cakeLinkage />
          <pyramidTrend />
          <dynamicLine />
        </div>
        <controlanml />
      </div>
      <!-- <div class="top-map">
        <sinan />
      </div> -->
      <!-- <seamless /> 
      <pyramid /> -->

      <!-- <scrollArc />
      <szBar />

      <ringPin />
      <rotateColorful />
      <circleRunway />
      <scanRadius /> -->
      <!-- <div class="bottom-data">
        <cakeLinkage />
        <pyramidTrend />
        <dynamicLine />
      </div> -->
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
  }
}
%ul-b {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.matter {
  margin: auto;
  width: 1880px;
  height: 916px;
  margin-top: 80px;
  position: relative;
}
.data-left {
  @extend %ul-b;
  width: 500px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.data-right {
  @extend %ul-b;
  width: 500px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
