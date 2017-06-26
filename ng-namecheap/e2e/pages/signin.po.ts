import { browser, element, by, ElementFinder, $ } from 'protractor';

export class NgNamecheapSigninPage {
    public name: ElementFinder = $('.nc_username.nc_username_required');
    public password: ElementFinder = $('.nc_password.nc_password_required');
    public button: ElementFinder = $('.nc_login_submit');

    navigateTo() {
        browser.waitForAngularEnabled(false);
        return browser.get('https://www.sandbox.namecheap.com/myaccount/signout.aspx?loggedout=yes');
    }

    getTitle() {
        return browser.getTitle();
    }

    login() {
        this.name.sendKeys('oksanatest');
        this.password.sendKeys('Test490016!');

        this.button.click();
    }
}
