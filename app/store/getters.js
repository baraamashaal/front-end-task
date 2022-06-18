export default {
  chartData(state) {
    return state.startDate || state.endDate ? state.chartData.filter(chartPointer => {
      if (state.startDate && state.endDate) {
        return chartPointer.date_ms > new Date(state.startDate) &&
          chartPointer.date_ms <= new Date(state.endDate);
      }
      if (state.startDate) {
        return chartPointer.date_ms > new Date(state.startDate);
      }
      if (state.endDate) {
        return chartPointer.date_ms <= new Date(state.endDate);
      }
      return chartPointer;
    }) : state.chartData;
  },
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
};
