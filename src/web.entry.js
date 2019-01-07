import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = window.__INITIAL_STATE__.map(event => { // Reconstruct event dates to make them moment objects
  return {
    description: event.description,
    date: moment(event.date)
  }
});

let initialState = Object.assign({}, store.state, {events}); // Copy state with new events property into an empty object
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
