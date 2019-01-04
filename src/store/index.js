import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 12,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    eventFormDate: moment(),
    events: [
      { description: 'Christmas', date: moment('2018-12-25', 'YYYY-MM-DD') },
      { description: 'New Year', date: moment('2019-01-01', 'YYYY-MM-DD') },
      { description: 'City Aniversary', date: moment('2018-12-20', 'YYYY-MM-DD') }
    ]
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload;
    },
    addEvent(state, payload) {
      state.events.push({
        description: payload,
        date: state.eventFormDate
      });
    }
  }
});