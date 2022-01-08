<template>
  <div class="header">
      <ImageButton class="imgbtn" title="開く" @click="onClickChange" />
      <ScrollTop class="scrlbtn" />
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
    background: rgba(255,255,255,0.5);
    line-height: 60px;
  }
  .imgbtn {
    margin-left: 20px;
  }
  .scrlbtn {
    text-align: center;
    position: relative;
  }

</style>