<template>
    <a-layout class="andv-layout">
        <a-layout-sider trigger="null" :collapsed="collapsed" :collapsedWidth="44">
                <a-menu mode="inline" theme="dark">
                  <a-menu-item>首页</a-menu-item>
                </a-menu>
            </a-layout-sider>
        <a-layout>
            <a-layout-header class="andv-layout-header">
            <a @click="collapsed = !collapsed">
                <MenuFoldOutlined />
            </a>
            <div style="flex: 1"></div>
            <a-dropdown>
    <span style="display: flex; align-items: center;">
        <a-button type="text" >
        <UserOutlined />
      超级管理员
    </a-button>
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
        </a-layout-header>
            <wrap-content />
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import {
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons-vue'
import WrapContent from './components/WrapContent.vue'


const collapsed = ref(false)



</script>

<style scoped lang="less">
.andv-layout {
    height: 100%;

    &-header {
        height: 48px;
        line-height: 48px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;


    }
}
</style>
