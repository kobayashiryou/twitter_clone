<template>
<div>
  <button
    class="button"
  >
    <img src="https://source.unsplash.com/random" />
  </button>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ボタン"
    },
    url: {
      type: String,
      default: "https://source.unsplash.com/random"
    }
  }
}
</script>

<style scoped>
  .button {
    position:relative;
    overflow: hidden;
    width:50px;
    height:50px;
    border-radius:50%;
    border: none;
    box-shadow: paleturquoise;
    display: inline-block;
  }
  .button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .button img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    width: 50px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    height:100%;
  }
</style>