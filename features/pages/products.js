const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get container () { return $('#inventory_container.inventory_container') }
    get listing () { return $('.inventory_list') }
    get filter () { return $('.product_sort_container') }
    get priceArray () { return $$(".inventory_item_price") }
    get cartTotal () { return $('.fa-layers-counter.shopping_cart_badge') }
    get button () { return 'button' }

    addItemToCart(count) {
        super.listedPrices(this.priceArray).reverse().slice(0,count)
        .forEach(element => {
            var parent = $('div='+element).$('..')
            parent.$(`${this.button}`).click();
        });        
    }

}

module.exports = new ProductsPage();
