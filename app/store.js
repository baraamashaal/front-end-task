import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    chartData: [],
    startDate: null,
    endDate: null,
  },
  getters: {
    chartData(state) {
      // eslint-disable-next-line no-debugger
      debugger;
      return state.startDate || state.endDate ? state.chartData.filter(chartPointer => {
        if (state.startDate && state.endDate) {
          return chartPointer.date_ms > new Date(state.startDate) &&
            chartPointer.date_ms <= new Date(state.endDate);
        }
        if (state.startDate) {
          return chartPointer.date_ms > new Date(state.startDate);
        }
        if (state.endDate) {
          return chartPointer.date_ms > new Date(state.endDate);
        }
        return chartPointer;
      }) : state.chartData;
    },
  },
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
