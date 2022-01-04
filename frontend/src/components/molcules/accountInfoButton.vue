<template>

</template>

<script>
import ImageButton from "../atoms/ImageButton.vue"
export default {
  props: {
    accountInfo: {
      accountName: {
        type: String,
        default: true,
      },
      accountId: {
        type: String,
        default: true,
      },
      follow: {
        type: Number,
        default: true,
      },
      follower: {
        type: Number,
        default: true
      },
      birthday: {
        type: Date,
        default: false,
      },
      accountCreate: {
        type: Date,
        default: false,
      }
    }
  }
}
</script>

<style>

</style>