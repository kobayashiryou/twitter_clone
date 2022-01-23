<template>
  <div class="account-info">
    <router-link to="/user">
      <ImageButton class="aicon"/>
    </router-link>
    <div class="user-name">
      <h4>
        {{accountName}}
      </h4>
      <p>
        {{accountId}}
      </p>
    </div>
    <div
      v-show="birthday !== undefind"
      class="user-birthday"
    >
      <p>
        <i
          class="bi bi-reddit"
        />
        <span>
          誕生日
        </span>
        {{birthday}}
      </p>
    </div>
    <div
      v-show="accountCreate !== undefind"
      class="user-account-create"
    >
      <p>
        <i
          class="bi bi-calendar3"
          style="margin-right: 5px"
        />
        <span>
          {{accountCreate}}からTwitterを利用しています
        </span>
      </p>
    </div>
    <ul class="user-follow">
      <li class="follow">
        {{follow}}<span>フォロー</span>
      </li>
      <li>
        {{follower}}<span>フォロワー</span>
      </li>
    </ul>
  </div>
</template>

<script>
import ImageButton from "../atoms/ImageButton.vue"

export default {
  props: {
    accountName: {
      type: String,
    },
    accountId: {
      type: String,
    },
    follow: {
      type: Number,
    },
    follower: {
      type: Number,
    },
    birthday: {
      type: String,
    },
    accountCreate: {
      type: String,
    },
  },
  components: {
    ImageButton
  },
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

h4 {
  margin: 0;
  line-height: 10px;
}

p {
  line-height: 10px;
  margin: 10px 0 0 0;
  color: rgba(0, 0,0, 0.5);
}

span {
  color: rgba(0, 0,0, 0.5);
}

.account-info {
  text-align: left;
}

.aicon {
  margin: 15px;
}

.user-name {
  margin: 0 20px;
}

.user-follow {
  display: flex;
  font-size: 15px;
  width: 90%;
  margin: 0 0 0 20px;
}

.user-birthday {
  margin: 25px 0 10px 20px;
  font-size: 12px;
}

.user-account-create {
  margin: 25px 0 10px 20px;
  font-size: 12px;
}

.follow {
  margin-right: 7px;
}
</style>