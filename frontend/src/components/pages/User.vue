<template>
  <div class="user">
    <div class="user-badkground-aicon">
      <img src="https://source.unsplash.com/random" />
    </div>
    <AccountInfoButton
      class="account-info"
      :accountName="accountInfo.userName"
      :accountId="accountInfo.userId"
      :birthday="accountInfo.userBirthDay"
      :accountCreate="accountInfo.userAccountCreate"
      :follow="accountInfo.userFollow"
      :follower="accountInfo.userFollower"
    />
    <TweetIndex
      :topPosition="style.topPosition"
      :tweetMenu="style.menuList"
      :accountTweets="userTweets"
    />
    <div>
      <input class="post-tweet" type="text" v-model="userTweet.content" />
    </div>
  </div>
</template>
<script>
import AccountInfoButton from '@/components/molcules/AccountInfoButton.vue'
import TweetIndex from '@/components/organanisms/TweetIndex.vue'

export default {
  components: {
    AccountInfoButton,
    TweetIndex
  },
  data() {
    return {
      accountInfo: {
        userName: "ハリー",
        userId: "@harry",
        userFollow: 100,
        userFollower: 100,
        userBirthDay: "1993年8月21日",
        userAccountCreate: "2019年3月",
      },
      style: {
        topPosition: "317px",
        menuList: true
      },
      userTweet: {
        content: ""
      },
      userTweets: [
        {
          id: 1,
          tweet: "おはようございます"
        },
        {
          id: 2,
          tweet: "おはようございます"
        },
        {
          id: 3,
          tweet: "おはようございます"
        }
      ]
    }
  },
}
</script>
<style scoped>
.user {
  height: 2000px;
  display: flex;
  background-color: #ffffff;
}
.user-badkground-aicon {
  top: 0;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 3;
}
.user-badkground-aicon img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.account-info {
  align-items: left;
  position:absolute;
  top: 100px;
}

.post-tweet {
  top: 500px
}
</style>