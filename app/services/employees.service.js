angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = (page = 1) => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl, {
      params: {
        page,
      },
    });
  };

  const loadMoreEmployees = (nextPageNumber) => {
    return getEmployees(nextPageNumber).then(({ data })=> data);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
