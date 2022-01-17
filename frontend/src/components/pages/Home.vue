<template>
  <div class="home">
    <GlobalHeader />
    <TweetIndex :topPosition="top" />
  </div>
</template>

<script>
import GlobalHeader from '@/components/organanisms/GlobalHeader.vue'
import TweetIndex from '@/components/organanisms/TweetIndex.vue'

export default {
  name: 'Home',
  components: {
    GlobalHeader,
    TweetIndex,
  },
  data() {
    return {
      top: "60px"
    }
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
