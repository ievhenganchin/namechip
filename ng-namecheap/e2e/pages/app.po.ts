import { browser, element, by } from 'protractor';

export class NgNamecheapPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://www.namecheap.com');
  }

  getTitle() {
    return browser.getTitle();
  }
}
