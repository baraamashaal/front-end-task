import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import getters from './getters';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    chartData: [],
    startDate: null,
    endDate: null,
  },
  getters,
  mutations: {
    setChartData(state, chartData) {
      state.chartData = chartData;
    },
    updateStartDate(state, startDate) {
      state.startDate = startDate;
    },
    updateEndDate(state, endDate) {
      state.endDate = endDate;
    },
  },
  actions: {
    getChartData(context) {
      axios.get(
        'https://fe-task.getsandbox.com/performance'
      ).then(({ data }) => {
        context.commit('setChartData', data);
      });
    },
  },
});
