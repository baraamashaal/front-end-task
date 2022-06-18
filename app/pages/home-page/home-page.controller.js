angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $stateParams, $state) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchText = $stateParams.filter;

  homePageVm.onSearchTextChange = function (value) {
    $state.go('.', { filter: value }, { notify: false });
    homePageVm.searchText = value;
  };
  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
