<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <div class="c-filters__form-group">
        <label for="">Start date</label>
        <input type="date" :value="startDate" max="endDate" @input="updateStartDate($event.target.value)">
      </div>
      <div class="c-filters__form-group">
        <label for="">End date</label>
        <input type="date" :value="endDate" min="startDate" @input="updateEndDate($event.target.value)">
      </div>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  computed: {
    startDate(){
      return this.$store.state.startDate;
    },
    endDate(){
      return this.$store.state.endDate;
    },
  },
  methods: {
    ...mapMutations(["updateStartDate", "updateEndDate"])
  }
};
</script>
