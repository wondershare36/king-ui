<template>
  <div>
    <h1>DialogDemo示例</h1>
    <h2>示例1</h2>
    <Button @click="showDialog">打开dialog</Button>
    <Dialog v-model:visible="dialogVisible" :cancel="f2">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <p>第一行</p>
        <strong>第二行</strong>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref, inject } from 'vue';

export default {
  name: 'DialogDemo',
  components: { Button, Dialog },
  setup() {
    const dialogVisible = ref(false);
    inject('dialogVisible', dialogVisible);
    const showDialog = () => {
      dialogVisible.value = true;
    };
    const f1 = () => {
      console.log(1);
    };
    const f2 = () => {
      console.log(2);
    };
    return { dialogVisible, showDialog, f1, f2 };
  }
};
</script>

<style scoped>

</style>