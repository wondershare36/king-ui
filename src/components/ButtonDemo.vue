<template>
  <div>
    Button示例
    <h1>示例1</h1>
    <div>
      <Button  @click="onClick">你好</Button>
      <Button theme="button" @click="onClick">你好</Button>
      <Button theme="link" @click="onClick">你好</Button>
      <Button theme="text" @click="onClick">你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup(){
    const onClick=()=>{
      console.log('hi');
    }
    return {onClick}
  },
};
</script>

<style scoped>

</style>