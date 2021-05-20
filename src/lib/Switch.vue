<template>
  <button @click="toggle" class="gulu-switch" :class="{'gulu-checked':value}">
    <span class="slider"></span>
  </button>
  <div>{{ value }}</div>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }

};
</script>

<style lang="scss">
@import "../helper";
$h: 22px;
$h2: $h - 4;
.gulu-switch {
  height: $h;
  width: $h*2;
  border: none;
  border-radius: $h/2;
  position: relative;
  background-color: #DCDFE6;
  transition: all 250ms;
  .slider {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: $h2;
    background-color: #fff;
    transition: all 250ms;
  }
  &.gulu-checked {
    background-color: $deepBlue;
    > span {
      left: calc(100% - #{$h - 2px});
    }
    &:active {
      > span {
        margin-left: -10px;
      }
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > .slider {
      width: $h;
      margin-left: 10px;
    }
  }
}


</style>