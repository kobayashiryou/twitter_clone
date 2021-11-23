<template>
  <div
    v-show="openMenu"
    class="bar"
  >
    <span>メニュー1</span>
    <span>メニュー2</span>
    <span>メニュー3</span>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    openSide: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const openMenu = ref(props.openSide)

    return {
      openMenu
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
  background: white;
}

</style>