<template>
  <div class="footer" v-drag>
    <!-- <div class="map conic" @click="maptt">
      <button v-on:click="show = !show">点我</button>
      <p>11111</p>
    </div> -->
    <!-- <transition name="slide-left">
      <ul v-show="show">
        <li>
          <router-link to="/home">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/brand">
            <p>模块2</p>
          </router-link>
        </li>
        <li>
          <router-link to="/tem2">
            <p>模块3</p>
          </router-link>
        </li>
        <li>
          <router-link to="/tem3" class="cour">
            <p>模块4</p>
          </router-link>
        </li>
      </ul>
      </transition> -->
    <!-- <div class="nav-bak-inner"> -->
    <div class="nav-item">
      <div class="nav-center map conic"></div>
      <div class="nav-link">
        <div class="nav-item-link">
          <div class="nav-bg-link">
            <router-link to="/home" class="nav-text-link">
              <span>首页</span>
            </router-link>
          </div>
        </div>
        <div class="nav-item-link">
          <div class="nav-bg-link">
            <router-link to="/brand" class="nav-text-link">
              <span>模块2</span>
            </router-link>
          </div>
        </div>
        <div class="nav-item-link">
          <div class="nav-bg-link">
            <router-link to="/tem2" class="nav-text-link">
              <span>模块3</span>
            </router-link>
          </div>
        </div>
        <div class="nav-item-link">
          <div class="nav-bg-link">
            <router-link to="/tem3" class="nav-text-link">
              <span>模块4</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    }
  },
  directives: {
    drag: {
      // 指令的定义
      bind: function(el) {
        let oDiv = el // 获取当前元素
        oDiv.onmousedown = (e) => {
          console.log('onmousedown')
          // 算出鼠标相对元素的位置
          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop
          document.onmousemove = (e) => {
            // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX
            let top = e.clientY - disY
            oDiv.style.left = left + 'px'
            oDiv.style.top = top + 'px'
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  },
  methods: {
    maptt() {}
  }
}
</script>

<style lang="scss" scoped>
@import './index.css';
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(-30px, 0);
}

.slide-left-enter-active {
  transition: all 0.5s ease;
}

.slide-left-leave-to {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
  display: none;
}

.slide-left-leave-active {
  transition: all 0.5s ease;
}
.footer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  font-size: 28/1920 * 100vh;
  .map {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(41, 135, 243);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  ul {
    width: 700px;
    height: 35px;
    position: absolute;
    left: 64px;
    bottom: 45px;
    display: flex;
    justify-content: space-between;
    background-color: #393484;
    li {
      &:nth-child(1) {
        margin-left: 80px;
      }
      width: 100px;
      height: 76px;
      background-color: aqua;
      line-height: 76px;
      text-align: center;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.conic {
  position: relative;
  z-index: 0;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px;
  width: 20px;
  height: 20px;
  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    border-radius: 50%;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
  }
}

.conic-demo::after {
  animation: opacityChange 5s infinite linear;
}

@keyframes opacityChange {
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
