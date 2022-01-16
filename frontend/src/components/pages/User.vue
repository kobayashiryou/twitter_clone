<template>
  <div class="user">
    <div class="user-badkground-aicon">
      <img src="https://source.unsplash.com/random" />
    </div>
    <AccountInfoButton
      class="account-info"
      :accountName="userName"
      :accountId="userId"
      :birthday="userBirthDay"
      :accountCreate="userAccountCreate"
      :follow="userFollow"
      :follower="userFollower"
    />
  </div>
</template>
<script>
import AccountInfoButton from '@/components/molcules/AccountInfoButton.vue'
export default {
  components: {
    AccountInfoButton
  },
  data() {
    return {
      userName: "ハリー",
      userId: "@harry",
      userFollow: 100,
      userFollower: 100,
      userBirthDay: "1993年8月21日",
      userAccountCreate: "2019年3月",
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
</style>