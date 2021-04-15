<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top">
        <span class="tran-1"></span>
        <span class="tran-2"></span>
        <div class="matr-1">
          <span v-for="item in 6" :key="item"></span>
        </div>
        <div class="matr-2">
          <span v-for="item in 6" :key="item"></span>
        </div>
      </div>

      <sinan />
      <!-- <seamless /> 
      <pyramid /> -->

      <!-- <scrollArc />
      <szBar />

      <ringPin />
      <rotateColorful />
      <circleRunway />
      <scanRadius /> -->

      <cakeLinkage />
      <pyramidTrend />
      <dynamicLine />
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
      background: url(../assets/img/top_nav.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: auto;
      position: relative;
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
.tran-1,
.tran-2 {
  display: inline-block;
  width: 26px;
  height: 26px;
  background: url('../assets/img/tran.png') no-repeat left center;
  position: absolute;
  top: 22px;
}
.tran-1 {
  right: 32%;
  animation: tran-change 1.2s linear infinite alternate;
}
.tran-2 {
  left: 32%;
  transform: rotateY(180deg);
  animation: tran-change2 1.2s linear infinite alternate;
}
@keyframes tran-change {
  from {
  }
  to {
    right: 34%;
  }
}
@keyframes tran-change2 {
  from {
  }
  to {
    left: 34%;
  }
}
.matr-1,
.matr-2 {
  position: absolute;
  top: 12px;
  padding: 0 5px;
  overflow: hidden;
  > span {
    width: 23px;
    height: 26px;
    float: left;
    background-color: #020936;
    clip-path: polygon(10px 0, 18px 0, 8px 27px, 0px 26px);
    margin: 0 -3px;
  }
  @for $i from 1 through 20 {
    > span:nth-child(#{$i}) {
      opacity: #{$i * 0.3};
      animation: matr-change 1.2s ease #{$i * 0.15}s infinite alternate;
    }
  }
}
.matr-1 {
  right: 22%;
}
.matr-2 {
  left: 22%;
  transform: rotateY(180deg);
}
@keyframes matr-change {
  0% {
    background-color: #42dafa;
  }

  100% {
    background-color: #020936;
  }
}
</style>
