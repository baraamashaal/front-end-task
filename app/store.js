import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    chartData: [],
  },
  mutations: {
    setChartData(state, chartData) {
      state.chartData = chartData;
    },
  },
  actions: {
    getChartData(context) {
      axios.get(
        'https://fe-task.getsandbox.com/performance'
      ).then(({ data }) =>{
        context.commit('setChartData', data);
      });
    },
  },
});
