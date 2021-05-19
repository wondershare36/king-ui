<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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
    return {toggleMenu}
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
  position: relative;
  z-index: 10;

  .menu {
    ul {
      display: flex;

      li {
        margin-left: 10px;
      }
    }
  }
}

</style>