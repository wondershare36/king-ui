<template>
  <div>
    Switch的文档
    <Switch :value="bool" @update:value="bool=$event"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const bool = ref(true);
    return {bool};
  }
};
</script>

<style scoped>

</style>