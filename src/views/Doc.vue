<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log('doc获取的menuVisible为：' + menuVisible.value);
    return {menuVisible};

  }
};
</script>

<style lang="scss" scoped>
@import "../helper";

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: linear-gradient(145deg, rgba(57, 79, 116, 1) 0%, rgba(54, 68, 95, 1) 100%);
  color: #D6DAE2;
  border-right: 1px solid fade-out(black, 0.95);
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 80px;
  height: 100%;
  z-index: 2;
  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }
  > ol {
    > li {
      a {
        display: block;
        padding: 4px 16px;
        &:hover{
          text-decoration: none;
        }
        &.router-link-active {
          color: #35435E;
          background-color: #fff;
        }
      }
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>