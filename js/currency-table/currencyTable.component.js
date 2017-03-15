class CurrencyTableController {
    constructor(CurrencyService) {
        this.CurrencyService = CurrencyService;
        this.currencies = [];
        this.ratesDate = '';
    }

    $onInit() {
        this.CurrencyService.getList().then(({data}) => {
            const {rates, effectiveDate} = data[0];
            this.ratesDate = effectiveDate;
            this.currencies = rates;
        }).catch(err => {
            //error handler
        });
    }
}

class CurrencyTableComponent {
    constructor() {
        this.bindings = {};
        this.templateUrl = 'js/currency-table/currencyTable.template.html';
        this.controller = CurrencyTableController;
        this.controllerAs = '$ctrl';
    }
}
app.component('currencyTable', new CurrencyTableComponent());
