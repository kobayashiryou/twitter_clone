<template>
  <span @click="onClick">戻る</span>
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
  span {
    cursor: pointer;
  }
</style>