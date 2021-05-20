<template>
  <h1>DialogDemo示例</h1>
  <h2>示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="dialogVisible">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行</p>
      <strong>第二行</strong>
    </template>
  </Dialog>
  <h2>示例2</h2>
  <Button @click="showDialog">打开dialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref, inject } from 'vue';
import {openDialog} from '../lib/openDialog';
export default {
  name: 'DialogDemo',
  components: { Button, Dialog },
  setup() {
    const dialogVisible = ref(false);
    inject('dialogVisible', dialogVisible);
    const toggle = () => {
      dialogVisible.value = true;
    };
    const showDialog = () => {
      openDialog({ title: '标题', content: '你好' });
    };
    return { dialogVisible, toggle, showDialog };
  }
};
</script>

<style scoped>

</style>