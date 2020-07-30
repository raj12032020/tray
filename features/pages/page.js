module.exports = class Page {
    open (path) {
        return browser.url('')
    }

    listedPrices(elem) {
        return elem.map(function(element){
            return element.getText()
        })
    }
}
