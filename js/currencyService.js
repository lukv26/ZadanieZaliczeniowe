class CurrencyService {
    constructor($http) {
        this.$http = $http;
    }

    getList() {
        return this.$http.get('http://api.nbp.pl/api/exchangerates/tables/A/today');
    }

    static currencyServiceFactory($http) {
        return new CurrencyService($http);
    }
}

CurrencyService.$inject = ['$http'];
app.factory('CurrencyService', CurrencyService.currencyServiceFactory);