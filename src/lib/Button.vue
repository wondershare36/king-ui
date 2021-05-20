<template>
  <div>
    <button v-bind="$attrs">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
  setup() {

  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>