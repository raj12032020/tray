const Page = require('./page');

class CheckoutPage extends Page {
    get container() { return $('.checkout_info_container') }
    get listing() { return $('.checkout_info') }
}
module.exports = new CheckoutPage();