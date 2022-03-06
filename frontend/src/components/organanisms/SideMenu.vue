<template>
  <div>
    <div
      v-show="openSide"
      class="openOverlay"
      @click="clickOverlay"
    ></div>
    <transition name="slide">
      <div
        v-show="openSide"
        class="bar-menu"
      >
        <AccountInfoButton
          :accountName="userName"
          :accountId="userId"
          :follow="userFollow"
          :follower="userFollower"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import AccountInfoButton from '@/components/molcules/accountInfoButton.vue'

export default {
  props: {
    openSide: {
      type: Boolean,
    },
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
  components: {
    AccountInfoButton
  },
  setup(props,click) {
    const clickOverlay = () => {
      click.emit('click-other');
    }
    return {
      clickOverlay,
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
}

.openOverlay {
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: table;
}
.bar-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70vw;
  z-index: 3;
  background: white;
}

.slide-enter-active, .slide-leave-active{
  transform: translate(0px,0px);
  transition: transform 500ms cubic-bezier(0,0,0.2,1) 0ms;
}

.slide-enter-from, .slide-leave-to {
  transform: translate(-100vw) translateX(0px);
}


</style>
