<template>
  <div class="topnav">
    <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-zhedie"></use>
      </svg>
    </span>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
      <span>Kings</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    }
  },
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
@import "../helper";
.topnav {
  background: url('../images/hd-nav.jpg');
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;
    > svg {
      width: 32px;
      height: 32px;
      fill: #DCA544;

    }
    >span {
      font-size: 20px;
      margin-left: 10px;
      color: #DCA544;
      font-weight: 600;
    }
  }
  .menu {
    display: flex;
    color: #DCE0E7;
    li {
      margin-left: 10px;
    }
  }
  .toggleAside {
    display: none;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    padding: 2px 10px;
    fill: white;
    text-align: center;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    svg {

    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}

</style>