<template>
  <div class="tweet-index" :style="tweetIndexPosition">
    <div
      v-show="tweetMenu"
      class="tweet-menu">
      <div>
        <p>ツイート</p>
      </div>
      <div>
        <p>ツイートと返信</p>
      </div>
      <div>
        <p>画像</p>
      </div>
      <div>
        <p>いいね</p>
      </div>
    </div>
    <div class="user-tweet-index">
      <TweetTable
        :userTweets="accountTweets"
      />
    </div>
  </div>
</template>

<script>
import TweetTable from '@/components/molcules/TweetTable.vue'

export default {
  props: {
    topPosition: {
      type: String
    },
    tweetMenu: {
      type: Boolean,
      default: false
    },
    accountTweets: {
      type: Array,
    }
  },
  components: {
    TweetTable
  },
  computed: {
    tweetIndexPosition() {
      return {
        '--top': this.topPosition
      }
    }
  }
}
</script>

<style scoped>
.tweet-index {
  --top: 20px;
  position: absolute;
  top: var(--top);
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tweet-menu {
  display: flex;
  width: 100%;
  margin: 15px auto;
  justify-content: space-between;
}

.tweet-menu div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 30px;
}

.tweet-menu p {
  font-size: 13px;
}

.tweet-index {
  height: 100vh;
  overflow: scroll;
}

</style>