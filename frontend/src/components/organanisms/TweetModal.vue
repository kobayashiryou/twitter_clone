<template>
  <div>
    <ImageButton
      class="tweet-position"
      @click="onClickChange"
    />
    <div
      class="modal-mask"
      v-if="modalOpen"
      @click="onClickChange"
    />
    <div
      v-if="modalOpen"
      class="modal-window"
    >
      <div class="modal-content">
        <input
          class="input-area"
          type="text"
          v-model="tweet"
        />
        <button
          class="tweet-push"
          @click="newTweet"
        >
          ツイート
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageButton from '@/components/atoms/ImageButton.vue'
import { ref } from '@vue/reactivity'
export default {
  data() {
    return {
      tweet: ""
    }
  },
  components: {
    ImageButton
  },
  methods: {
    newTweet() {
      this.$emit("tweetPush", this.tweet)
    }
  },
  setup() {
    const modalOpen = ref(false);
    const onClickChange = () => {
      modalOpen.value = !modalOpen.value
      return modalOpen;
    }
    return {
      modalOpen,
      onClickChange,
    }
  }
}
</script>

<style>
.tweet-position {
  bottom: 70px;
  right: 10px;
  position: fixed;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.modal-window {
  z-index: 2;
  height: 50%;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}

.modal-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-area {
  width: 100%;
  height: 85%;
  border: none;
  padding: 0;
}
</style>