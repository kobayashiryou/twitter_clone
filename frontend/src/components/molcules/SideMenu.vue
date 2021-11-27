<template>
  <div
    v-show="openSide"
    class="bar"
    te
  >
    <span>メニュー1</span>
    <span>メニュー2</span>
    <span>メニュー3</span>
  </div>
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

</style>