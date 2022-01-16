<template>
<div>
  <div class="fooder">
    <ul class="footer-menu">
      <li>
        <router-link to="/">
          <i class="bi bi-house-door" style="color:#00acee; font-size: 30px; line-height: 2"></i>
        </router-link>
      </li>
      <li>
        <i class="bi bi-search" style="color:#00acee; font-size: 30px; line-height: 2"></i>
      </li>
      <li>
        <i class="bi bi-bell" style="color:#00acee; font-size: 30px; line-height: 2"></i>
      </li>
      <li>
        <i class="bi bi-envelope" style="color:#00acee; font-size: 30px; line-height: 2"></i>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.fooder {
  display: flex;
  width: 100%;
  height: 60px;
  bottom: 0;
  position: fixed;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.footer-menu {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

</style>