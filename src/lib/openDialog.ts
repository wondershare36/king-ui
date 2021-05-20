import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  createApp({
    render() {
      return h(Dialog, {visible: true});
    }
  }).mount(div);
};