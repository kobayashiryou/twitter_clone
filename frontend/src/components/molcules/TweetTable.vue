<template>
  <div class="container">
    <div
      class="tweet-container"
      v-for="{tweet, index} in userTweets"
      :key="index"
    >
      <div class="tweet-content">
        <ImageButton />
        <p>{{tweet}}</p>
      </div>
      <div class="tweet-replys">
        <i class="bi bi-chat" />
        <i class="bi bi-arrow-repeat" />
        <i class="bi bi-suit-heart" />
        <i class="bi bi-box-arrow-up" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageButton from '@/components/atoms/ImageButton.vue'
export default {
  props: {
    userTweets: {
      type: Array
    }
  },
  components: {
    ImageButton
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
  .tweet-container {
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
  }
  .tweet-content {
    display: flex;
    width: 85%;
    height: 85%;
    margin: 0 auto;
  }
  .tweet-replys {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
  }
</style>