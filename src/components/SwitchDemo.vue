<template>
  <div>
    Switch的文档
    <Switch :value="y" @input="y=$event"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const y = ref(true);
    return {y};
  }
};
</script>

<style scoped>

</style>