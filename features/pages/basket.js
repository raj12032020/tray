const Page = require('./page')

class BasketPage extends Page {
    get container() { return $('.cart_contents_container') }
    get listing () { return $('.cart_list') }
    get priceArray () { return $$('.inventory_item_price') }
    get button () { return 'button' }
    get checkout () { return $('.checkout_button') }

    removeCheapestItem() {
        var parent = $('div='+super.listedPrices(this.priceArray).sort()[0]).$('..')
        parent.$(`${this.button}`).click()
    }
}

module.exports = new BasketPage()