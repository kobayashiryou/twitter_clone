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
    GlobalHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: beige;
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
