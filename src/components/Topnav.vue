<template>
  <div class="topnav">
    <router-link to="/" class="logo">LOGO</router-link>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log('topnav获取的menuVisible为：' + menuVisible.value);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  padding: 10px 20px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo {
    max-width: 6em;
    margin-right: auto;
  }

  .menu {
    display: flex;

    li {
      margin-left: 10px;
    }
  }

  .toggleAside {
    display: none;
    width: 20px;
    height: 24px;
    background-color: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    .toggleAside{
      display: inline-block;
    }
  }
}

</style>