<template>
  <div>
    <div id="nav">
      <router-view/>
      <GlobalFooder />
    </div>
  </div>
</template>
<script>
import GlobalFooder from '@/components/organanisms/GlobalFooder.vue'

export default {
  components: {
    GlobalFooder
  }
}
</script>

<style>
body {
  margin: 0 auto;
}
#nav {
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
