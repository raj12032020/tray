const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginContainer() { return $('.login_wrapper') }
    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get loginButton () { return $('#login-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginButton.click(); 
    }
}

module.exports = new LoginPage();
