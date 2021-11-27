<template>
  <div class="header">
    <div class="logo">
      <ImageButton title="開く" @click="onClickSide = !onClickSide" />
      <SideMenu :openSide="onClickSide" />
      <ScrollTop />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ScrollTop from '../atoms/ScrollTop.vue'
import SideMenu from '../molcules/SideMenu.vue'
import ImageButton from '../atoms/ImageButton.vue'

export default {
  components: {
    ScrollTop,
    SideMenu,
    ImageButton
  },

  setup() {
    const onClickSide = ref(false);
    const onClickChange = () => {
      return !onClickSide
    }
    return {
      onClickSide,
      onClickChange
    }
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background: rgba(255,255,255,0.5)
  }
  .logo {
    line-height: 60px;
  }

</style>