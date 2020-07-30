const { Given, When, Then } = require('cucumber');

const LoginPage = require('../pages/login');
const ProductsPage = require('../pages/products');
const BasketPage = require('../pages/basket');
const CheckoutPage = require('../pages/checkout')

const pages = {
    login: LoginPage,
    products: ProductsPage,
    basket: BasketPage,
    checkout: CheckoutPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
    pages[page].loginContainer.isDisplayed()
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see the (\w+) page$/, (page) => {
    expect(pages[page].container.isDisplayed());
    expect(pages[page].listing.isDisplayed());
});

When(/^I sort products listing by (.+)$/, (text) => {
    ProductsPage.filter.selectByVisibleText(text)
});

When(/^am able to add (\d+) cheapest items$/, (count) => {
    ProductsPage.addItemToCart(count)
});

Then(/^the basket icon shows count (.+)$/, (count) => {
    expect(ProductsPage.cartTotal).toHaveText(count)
});

When(/^I go to basket page$/, () => {
    ProductsPage.cartTotal.click()
});

When(/^I can remove the cheapest item$/, () => {
    BasketPage.removeCheapestItem()
});

When(/^I go to checkout$/, () => {
    BasketPage.checkout.click()
});