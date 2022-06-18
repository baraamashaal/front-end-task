angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $stateParams, $state) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchText = $stateParams.filter;
  homePageVm.isLastPage = false;
  homePageVm.isLoading = false;
  homePageVm.currentPage = 0;

  homePageVm.onSearchTextChange = function (value) {
    $state.go('.', { filter: value }, { notify: false });
    homePageVm.searchText = value;
  };

  homePageVm.loadMore = () => {
    homePageVm.isLoading = true;
    Employees.loadMoreEmployees(homePageVm.currentPage + 1)
      .then(({ employees, current_page: currentPage, pages }) => {
        homePageVm.employees = homePageVm.employees.concat(employees);
        homePageVm.currentPage = currentPage;

        if (currentPage === pages) {
          homePageVm.isLastPage = true;
        }
        homePageVm.isLoading = false;
      });
  };

  homePageVm.loadMore();
}
