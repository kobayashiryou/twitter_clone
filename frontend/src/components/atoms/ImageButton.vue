<template>
<span>
  <button
    class="button"
    @click="onClick"
  >
    {{title}}
  </button>
</span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ボタン"
    }
  }
}
</script>

<style scoped>
  .button {
    border-radius: 100%;
  }
</style>