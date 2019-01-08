import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

let events = window.__INITIAL_STATE__.map(event => { // Reconstruct event dates to make them moment objects
  return {
    description: event.description,
    date: moment(event.date)
  }
});

import VueCalendar from './entry.js';

VueCalendar(events).$mount('#app');