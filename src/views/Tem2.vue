<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top">
        <span class="tl-01"></span>
        <span class="tl-02"></span>
      </div>

      <div class="top-map">
        <sinan />
      </div>
      <div class="bottom-data">
        <scrollArc />
        <szBar />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'

export default {
  name: 'Tem2',

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
@import '/src/assets/styles/keyframes';
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
      top: 20px;
      width: 100%;
      height: 80px;
      background-color: transparent;
      background: url(../assets/img/top3.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: auto;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 140px;
        height: 6px;
        background: url('../assets/img/tiao.png') no-repeat;
        top: -2px;
      }

      &:before {
        left: 0;
        animation: top-fly1 1s linear 0.1s infinite;
      }
      &:after {
        right: 0;
        animation: top-fly2 1s linear 0.1s infinite;
      }

      .tl-01 {
        width: 120px;
        height: 40px;
        position: absolute;
        left: 470px;
        top: 46px;

        &:before,
        &:after {
          content: '';
          position: absolute;
          width: 48px;
          height: 29px;
          background: url('../assets/img/xie.png') no-repeat;
          top: -19px;
        }

        &:before {
          left: 36px;
          animation: span-flash 1s ease-in-out 0.1s infinite;
        }
        &:after {
          left: 60px;
          animation: span-flash 1s linear 0.5s infinite;
        }
      }
      .tl-02 {
        width: 120px;
        height: 40px;
        position: absolute;
        right: 459px;
        top: 46px;

        &:before,
        &:after {
          content: '';
          position: absolute;
          width: 48px;
          height: 29px;
          background: url('../assets/img/xie.png') no-repeat;
          top: -19px;
          transform: rotateY(180deg);
        }

        &:before {
          right: 36px;
          animation: span-flash 1s ease-in-out 0.1s infinite;
        }
        &:after {
          right: 60px;
          animation: span-flash 1s linear 0.5s infinite;
        }
      }
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
