'use strict';

angular
    .module('mean.myby')
    .factory('Transactions', Transactions);

Transactions.$inject = ['$resource'];
function Transactions($resource) {
  var requestParameters = {pn: '@pageNumber', rpp: '@resultsPerPage', sb: '@sortBy', r: '@reverse'};
  return $resource('api/transactions', requestParameters, {
    update: { method: 'PUT' },
    all: {
      method: 'GET',
      isArray: false,
      url: '/api/transactions',
      params: {
        sq: '@searchQuery'
      }
    }
  });
}
