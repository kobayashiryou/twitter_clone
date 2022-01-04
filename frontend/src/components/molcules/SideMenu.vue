<template>
  <div
    v-show="openSide"
    class="bar-overlay"
    @click="clickOverlay"
  >
    <transition name="slide">
      <div
        v-show="openSide"
        class="bar-menu"
      >
        <span>メニュー1</span>
        <span>メニュー2</span>
        <span>メニュー3</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    openSide: {
      type: Boolean,
    }
  },
  setup(props,click) {
    const clickOverlay = () => {
      click.emit('click-other');
    }
    return {
      clickOverlay,
    }
  }
}
</script>

<style scoped>

.bar-overlay {
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ease;
  display: table;
}
.bar-menu {
  height: 100%;
  width: 60%;
  z-index: 3;
  background: white;
}

.slide-enter-active, .slide-leave-active{
  transform: translate(0px,0px);
  transition: transform 400ms cubic-bezier(0,0,0.2,1);
}

.slide-enter-from, .slide-leave-to {
  transform: translate(-100vw) translateX(0px);
}



</style>
