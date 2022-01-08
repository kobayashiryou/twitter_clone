<template>
  <span
    @click="onClick"
    class="scroll"
  >
    <button>
      戻る
    </button>
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
  p {
    cursor: pointer;
  }

  .scroll {
    display: inline-block;
  }
</style>