import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import SearchFilterComponent from './components/vue-components/search-filter.vue';
import Store from './store/store';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: Store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vSearchFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('searchFilterComponent', SearchFilterComponent));
});

angular.module('appModule').filter('highlight', function ($sce) {
  return function (text, phrase) {
    if (phrase) {
      text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="c-users-list__highlight-text">$1</span>');
    }
    return $sce.trustAsHtml(text);
  };
});
