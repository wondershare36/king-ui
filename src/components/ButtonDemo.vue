<template>
  <div>Button示例</div>
  <div>
    <h2>示例1</h2>
    <div>
      <Button theme="button">button</Button>
      <Button theme="link">link</Button>
      <Button theme="text">text</Button>
    </div>
  </div>
  <div>
    <h2>示例2</h2>
    <div>
      <Button size="big">big</Button>
      <Button size="normal">normal</Button>
      <Button size="small">small</Button>
    </div>
    <div>
      <Button theme="link" size="big">big</Button>
      <Button theme="link" size="normal">normal</Button>
      <Button theme="link" size="small">small</Button>
    </div>
    <div>
      <Button theme="text" size="big">big</Button>
      <Button theme="text" size="normal">normal</Button>
      <Button theme="text" size="small">small</Button>
    </div>
    <div>
      <h2>示例3</h2>
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="link" level="main">主要按钮</Button>
        <Button theme="link">普通按钮</Button>
        <Button theme="link" level="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="text" level="main">主要按钮</Button>
        <Button theme="text">普通按钮</Button>
        <Button theme="text" level="danger">危险按钮</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  },
};
</script>

<style scoped>

</style>