<template>
  <Topnav/>
  <div>
    <div class="banner">
      <h1>We UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://gitee.com/wu-sili" target="_blank">Gitee</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
name: "Home",
  components: { Topnav }
}
</script>

<style lang="scss" scoped>
.banner{
  height: 300px;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >.actions{
    padding: 8px 0;
    a{
      margin: 0 8px;
      background-color: #fff;
      display: inline-block;
      $h:28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>