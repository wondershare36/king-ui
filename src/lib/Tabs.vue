<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)"
           :class="{selected:t===selected}">
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component v-for="c in defaults" :is="c"
                 class="gulu-tabs-content-item" :class="{selected:c.props.title===selected}"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {ref, onMounted, computed, watchEffect} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        // 下划线动画
        const {width} = selectedItem.value.getBoundingClientRect();
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.width = width + 'px';
        indicator.value.style.left = left + 'px';
      });
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 100px;
      background-color: $blue;
      transition: left 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>