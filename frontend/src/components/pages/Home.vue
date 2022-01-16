<template>
  <div class="home">
    <GlobalHeader />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import GlobalHeader from '@/components/organanisms/GlobalHeader.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    GlobalHeader,
  }
}
</script>

<style scoped>
  .home {
    height: 2000px;
    display: flex;
    justify-content: center;
  }
</style>
