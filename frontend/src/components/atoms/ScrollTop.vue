<template>
  <span @click="onClick">戻る</span>
</template>
<script>

export default {
  setup() {
    const onClick = () => {
      return window.scroll(0,0);
      console.log("git test");
    }
    return {
      onClick
    }
  }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>