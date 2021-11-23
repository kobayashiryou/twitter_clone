<template>
  <div class="header">
    <div class="logo">
      <button @click="onClickSide = !onClickSide">開く</button>
      <SideMenu :openSide="onClickSide" />
      <ScrollTop />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ScrollTop from '../atoms/ScrollTop.vue'
import SideMenu from '../molcules/SideMenu.vue'

export default {
  components: {
    ScrollTop,
    SideMenu
  },

  setup() {
    const onClickSide = ref(false);
    return {
      onClickSide
    }
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1;
    background: rgba(255,255,255,0.5)
  }
  .logo {
    line-height: 60px;
  }

</style>