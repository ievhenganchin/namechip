import { browser, element, by, ElementFinder, $ } from 'protractor';

export class NgNamecheapSignupPage {
    public userName: ElementFinder = element(by.className('nc_username nc_username_required'));
    public password: ElementFinder = element(by.className('nc_password nc_password_required'));
    public confirmPassword: ElementFinder = element(by.className('nc_password_confirm nc_password_confirm_required'));
    public firstName: ElementFinder = $('.nc_firstname.nc_firstname_required');
    public lastName: ElementFinder = $('.nc_lastname.nc_lastname_required');
    public email: ElementFinder = $('.nc_email.nc_email_required');
    public button: ElementFinder = $('.btn.normal-btn.nc_signup_submit');

    public random: ElementFinder = $(this.generateString(10));

    navigateTo() {
        browser.waitForAngularEnabled(false);
        return browser.get('https://www.namecheap.com/myaccount/signup.aspx');
    }

    pause() {
        browser.pause();
    }

    getTitle() {
        return browser.getTitle();
    }

    generateString(length: number): string {
        let res: string = '';
        for (var i = 0; i < length; i++) {
            let char: number = Math.floor(Math.random() * 9);
            res += char.toString();
        }

        return res;
    }

    generateEmail(length: number): string {
        return this.generateString(length) + '@gmail.com';
    }
}
