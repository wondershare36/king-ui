<demo>
  <h2>常规用法</h2>
</demo>

<template>
  <Switch :value="bool" @update:value="bool=$event"/>
</template>
<script>
import Switch from '../lib/Switch.vue';
import { ref } from 'vue';

export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool };
  }
};
</script>