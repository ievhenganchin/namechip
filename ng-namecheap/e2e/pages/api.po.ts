import { browser } from 'protractor';

export class APIPage {
    api = function(url: string) {
        browser.waitForAngularEnabled(false);

        return new Promise((resolve, reject) => {
            browser.get(url).then((data) => {
                resolve(data);
            });
        });
    }

    apiNode = function(url: string) {

    }
}