<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Topnav"
}
</script>

<style lang="scss" scoped>
.topnav {
  padding:10px 20px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  .menu{
    ul{
      display: flex;
      li{
        margin-left: 10px;
      }
    }
  }
}

</style>