<template>
  <div>
    <h1>Tabs 示例</h1>
    <Tabs>
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default {
name: "TabsDemo",
  components: { Tab, Tabs }
}
</script>

<style scoped>

</style>