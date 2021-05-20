<template>
  <button @click="toggle" :class="{checked:value}">
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

<style lang="scss" scoped>
$button_width: 44px;
$button_height: $button_width/2;
$slider_width: $button_width/2;
$slider_height: $button_height;
$radius: 4px;
button {
  height: $button_height;
  width: $button_width;
  border: none;
  border-radius: $radius;
  position: relative;
  &.checked {
    background-color: #152445;
  }
  &.checked > span {
    left: calc(100% - #{$button_width/2});
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $slider_width;
    }
  }
  &.checked:active {
    > span {
      width: $slider_width;
      margin-left: -4px;
    }
  }
}
.slider {
  position: absolute;
  top: 0;
  left: 0;
  height: $slider_height;
  width: $slider_width;
  border-radius: $radius;
  background-color: #267BB1;
  transition: left 250ms;

}

</style>