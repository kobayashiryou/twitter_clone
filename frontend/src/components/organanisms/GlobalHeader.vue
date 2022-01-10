<template>
  <div class="header">
    <ul class="menu">
      <li>
        <ImageButton title="開く" @click="onClickChange" />
      </li>
      <li>
        <ScrollTop />
      </li>
      <li>
        <i class="bi bi-stars" style="color:#00acee; font-size: 30px; line-height: 2"></i>
      </li>
    </ul>
    <SideMenu :openSide="onClickSide" @click-other="onClickChange" />
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
      onClickSide.value = !onClickSide.value
      return onClickSide
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
    z-index: 2;
    background: white;
    line-height: 3;
  }
  .menu {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

</style>