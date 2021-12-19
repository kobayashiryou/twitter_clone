<template>
  <transition name="slide">
    <div
      v-show="openSide"
      class="bar"
      te
    >
      <span>メニュー1</span>
      <span>メニュー2</span>
      <span>メニュー3</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    openSide: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.bar {
  z-index: 2;
  height: 100vh;
  width: 40%;
  position: fixed;
  top: 0;
  background: white;
}

.slide-enter-active, .slide-leave-active{
  transform: translate(0px,0px);
  transition: transform 400ms cubic-bezier(0,0,0.2,1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translate(-100vw) translateX(0px);
}


</style>