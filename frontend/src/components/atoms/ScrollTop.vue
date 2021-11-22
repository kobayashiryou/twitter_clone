<template>
  <div>
    <span @click="onClick">戻る<span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onClick = () => {
      return window.scroll(0,0);
    }
    return onClick
  },
})
</script>

<style lang="sass" scoped>

</style>