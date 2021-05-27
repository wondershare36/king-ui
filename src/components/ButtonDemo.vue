<template>
  <h1>Button示例</h1>
  <h2>示例1</h2>
  <div>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
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
  <h2>示例4</h2>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h2>示例5</h2>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
    };
    return {onClick};
  },
};
</script>

<style scoped>

</style>