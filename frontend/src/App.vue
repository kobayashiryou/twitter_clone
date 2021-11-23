<template>
  <div>
    <GlobalHeader />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link>
      <router-view/>
    </div>
  </div>
</template>
<script>
import GlobalHeader from './components/organanisms/GlobalHeader.vue';

export default {
  components: {
    GlobalHeader,
  }
}
</script>

<style>
body {
  background: beige;
  margin: 0 auto;
}
#app {
  text-align: center;
}
#nav {
  padding: 60px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
