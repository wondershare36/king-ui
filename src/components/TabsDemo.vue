<template>
  <div>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo"/>
  </div>
</template>

<script>

import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue'
export default {
name: "TabsDemo",
  components: { Demo },
  setup(){
  return {Tabs1Demo}
  }
}
</script>

<style scoped>

</style>