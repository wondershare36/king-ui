<template>
  <div class="gulu-dialog-overlay">123</div>
  <div class="gulu-dialog-wrapper">
    <div class="gulu-dialog">
      <header>标题<span class="gulu-dialog-close"></span></header>
      <main>
        <p>第一行字</p>
        <p>第二行字</p>
      </main>
      <footer>
        <Button level="main">OK</Button>
        <Button>Cancel</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">

import Button from './Button.vue';

export default {
  name: 'Dialog',
  components: {Button}
};
</script>

<style lang="scss">
$radius: 4px;
$border-color:#d9d9d9;
.gulu-dialog {
  background-color: #fff;
  border-radius: $radius;
  box-shadow: 0 0 5px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    background-color: fade-out(black,0.5);
  }
  &-wrapper{
    background-color: green;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 31;
  }
  >header{
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    .gulu-dialog-close{
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,&::after{
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: black;
        top: 50%;
        left: 50%;
      }
      &::before{
        transform: translate(-50%,-50%) rotate(-45deg);
      }
      &::after{
        transform: translate(-50%,-50%) rotate(45deg);
      }
    }
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
}
</style>