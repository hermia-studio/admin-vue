<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const active = ref(0)
import 'element-plus/theme-chalk/display.css'

// 调整tab
const pathMap = new Map([
  ['/', 0],
  ['/cart', 1],
  ['/order', 2],
  ['/my', 3]
])
// 侦听访问路径的变化
watch(
  () => route.fullPath,
  (v) => {
    active.value = pathMap.get(v) || 0
  }
)
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
