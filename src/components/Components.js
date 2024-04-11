

import * as AntDesignVue from 'ant-design-vue';

export default function registerGlobalComponents(app) {

  for (const key in AntDesignVue) {
    const component = AntDesignVue[key];

    if (component && component.name) {
      app.component(component.name, component);
    }
  }
}
