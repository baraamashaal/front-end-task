import getters from './getters';
import {expect, test} from '@jest/globals';

const chartData = [
  { date_ms: 1641772800000, performance: 0.2 }, // 10
  { date_ms: 1641859200000, performance: 0.33 }, // 11
  { date_ms: 1641945600000, performance: 0.83 }, // 12
  { date_ms: 1642032000000, performance: 0.31 }, // 13
  { date_ms: 1642118400000, performance: 0.65 }, // 14
  { date_ms: 1642204800000, performance: 0.88 }, // 15
  { date_ms: 1642291200000, performance: 0.9 }, // 16
];

test('check the count of chart items within a start and end date', () => {
  const state = {
    chartData,
    startDate: '2022-01-11',
    endDate: '2022-01-15',
  };
  expect(getters.chartData(state)).toHaveLength(5);
});

test('check the count of chart items within end date in range', () => {
  const state = {
    chartData,
    startDate: null,
    endDate: '2022-01-15',
  };
  expect(getters.chartData(state)).toHaveLength(6);
});

test('check the count of chart items within start date in range ', () => {
  const state = {
    chartData,
    startDate: '2022-01-15',
    endDate: null,
  };
  expect(getters.chartData(state)).toHaveLength(2);
});

test('check the count of chart items while start date out of range ', () => {
  const state = {
    chartData,
    startDate: '2022-02-15',
    endDate: null,
  };
  expect(getters.chartData(state)).toHaveLength(0);
});

test('check the count of chart items while end date out of range ', () => {
  const state = {
    chartData,
    startDate: null,
    endDate: '2022-01-9',
  };
  expect(getters.chartData(state)).toHaveLength(0);
});


test('check the count of chart items while both end and start dates are out of range ', () => {
  const state = {
    chartData,
    startDate: '2022-01-17',
    endDate: '2022-01-30',
  };
  expect(getters.chartData(state)).toHaveLength(0);
});
