<template>
  <div class="collspan-button" :class="{ 'is-open': opened }" @click="collspanCharts"></div>
</template>

<script>
export default {
  name: 'CollspanButton',
  data() {
    return {
      opened: true
    }
  },
  methods: {
    animePanel(targets, direction) {
      anime({
        targets,
        opacity: this.opened ? 0 : 1,
        duration: 600,
        translateY: this.opened ? (direction === 'up' ? -1080 : 1080) : 0,
        delay: (el, i) => {
          return i * 100
        },
        easing: 'easeInOutQuad'
      })
    },
    collspanCharts() {
      this.animePanel('#main-tpl .data-left li', 'up')
      this.animePanel('#main-tpl .data-right li', 'down')
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.collspan-button {
  width: 30px;
  height: 30px;
  background: url('../../assets/img/zd.png') no-repeat;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  bottom: 70px;
  pointer-events: auto;
  opacity: 0.7;
  background-size: cover;
  border: 2px solid rgba(#fff, 0.5);
  cursor: pointer;
  border-radius: 30px;
  transform: rotate(180deg);
  transition: transform 0.3s ease;

  &.is-open {
    transform: rotate(0);
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
