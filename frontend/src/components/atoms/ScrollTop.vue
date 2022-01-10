<template>
  <span
    class="scroll"
    @click="onClick"
  >
    <i class="bi bi-twitter" style="color:#00acee; font-size: 30px; line-height: 2"></i>
  </span>
</template>
<script>

export default {
  setup() {
    const onClick = () => {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    return {
      onClick
    }
  }
}
</script>

<style scoped>
  .scroll {
    display: inline-block;
    cursor: pointer;
  }
</style>