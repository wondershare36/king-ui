import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close=()=>{
    // @ts-ignore
    app.unmount(div);
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          div.remove();  if (newVisible === false) {
            close()
          }
        }
      }, {
        title, content,
      });
    }
  });
  app.mount(div);
};