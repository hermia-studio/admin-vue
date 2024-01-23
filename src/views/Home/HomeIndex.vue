<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
</script>

<template>
  <div class="appPage">
    <div class="topBar">topBar</div>
    <div class="wrap">
      <nav class="menu hidden-xs-only">
        <router-link to="/">Go to Home </router-link>
        <br />
        <router-link to="/login"
          >Go to login
          <Edit />
        </router-link>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.appPage {
  .topBar {
    width: 100%;
    height: 100px;
    background-color: khaki;
  }
  .wrap {
    width: 100%;
    height: 500px;
    display: flex;
    background-color: lightblue;
    .menu {
      width: 300px;
      border: 1px solid #000;
    }
    .content {
      flex-grow: 1;
    }
  }
}
</style>
