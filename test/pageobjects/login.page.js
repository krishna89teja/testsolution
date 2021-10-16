const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
