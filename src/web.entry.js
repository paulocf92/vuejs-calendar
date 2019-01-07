import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = [
  { description: 'Christmas', date: moment('2018-12-25', 'YYYY-MM-DD') },
  { description: 'New Year', date: moment('2019-01-01', 'YYYY-MM-DD') },
  { description: 'City Aniversary', date: moment('2018-12-20', 'YYYY-MM-DD') }
];
let initialState = Object.assign({}, store.state, {events});
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
