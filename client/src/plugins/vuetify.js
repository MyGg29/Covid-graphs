import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const opts = {
  options: {
    customProperties: true
  },
  icons: {
    iconfont: "mdi"
  },
  //theme: { disable: true }
}

export default new Vuetify(opts);
