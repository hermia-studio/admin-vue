<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import { ref } from 'vue'
import {
  MessageBox,
  Discount,
  Compass,
  HomeFilled,
  Tools,
  Plus,
  Expand,
  Fold,
  UserFilled
} from '@element-plus/icons-vue'
const isShowMenu = ref(true)
</script>

<template>
  <div class="homePage">
    <!-- hidden-xs-only -->
    <div class="left-page" v-if="isShowMenu">
      <el-row>
        <el-col>
          <div class="appTitle">
            <h3>admin-vue</h3>
          </div>
          <el-menu
            router="true"
            default-active="home"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="/home">
              <template #title>
                <el-icon><HomeFilled /></el-icon>
                <span>首页</span>
              </template>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><MessageBox /></el-icon>
                <span>信息管理</span>
              </template>
              <el-menu-item index="/baseMsg/supplier">供应商信息</el-menu-item>
              <el-menu-item index="/baseMsg/custom">客户信息</el-menu-item>
              <el-menu-item index="/baseMsg/goods">商品信息</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Compass /></el-icon>
                <span>进货管理</span>
              </template>
              <el-menu-item index="/Input/stock">商品进货</el-menu-item>
              <el-menu-item index="/Input/back">退货查询</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><Discount /></el-icon>
                <span>销售管理</span>
              </template>
              <el-menu-item index="/output/sale">商品销售</el-menu-item>
              <el-menu-item index="/output/saleBack">销售退货</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <el-icon><Tools /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/system/user">用户管理</el-menu-item>
              <el-menu-item index="/system/role">角色管理</el-menu-item>
              <el-menu-item index="/system/menu">菜单管理</el-menu-item>
              <el-menu-item index="/system/dept">部门管理</el-menu-item>
              <el-menu-item index="/system/dict">字典管理</el-menu-item>
              <el-menu-item index="/system/notice">通知公告</el-menu-item>
              <el-menu-item index="/system/log">日志管理</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
              <template #title>
                <el-icon><Plus /></el-icon>
                <span>系统工具</span>
              </template>
              <el-menu-item index="/component/editor"
                >富文本编辑器</el-menu-item
              >
              <el-menu-item index="/component/upload">文件上传</el-menu-item>
              <el-menu-item index="/component/signature">签名</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="right-page">
      <el-affix :offset="0">
        <div class="topBar">
          <el-icon
            :size="18"
            @click="isShowMenu = !isShowMenu"
            v-if="!isShowMenu"
            ><Expand
          /></el-icon>
          <el-icon v-else :size="18" @click="isShowMenu = !isShowMenu">
            <el-icon><Fold /></el-icon>
          </el-icon>
          <el-icon :size="18"><UserFilled /></el-icon>
        </div>
      </el-affix>
      <div class="router-view"><slot></slot></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.homePage {
  width: 100%;
  height: 100%;
  display: flex;
  .left-page {
    width: 180px;
    height: 100vh;
    background-color: #fff;
    .appTitle {
      display: flex;
      justify-content: space-between;
      height: 20px;
      padding: 16px 20px;
    }
    .el-menu-item {
      height: 52px;
      line-height: 52px;
    }
  }
  .right-page {
    flex-grow: 1;
    .topBar {
      height: 50px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      .el-icon {
        cursor: pointer;
      }
    }
    .router-view {
      height: 100%;
      min-height: 100vh;
      background-color: khaki;
    }
  }
}
</style>
