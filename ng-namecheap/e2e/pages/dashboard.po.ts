import { browser, element, by, ElementFinder, $, protractor } from 'protractor';

export class NgNamecheapDashboardPage {
    public email: ElementFinder = element(by.css('.icon-email:last-child'));

    searchByDomain(name: string) {
        return element(by.xpath('//*[@class="item"][contains(.,"' + name + '")]'));
    }

    searchEmailIconByDomain(name: string) {
        return this.searchByDomain(name).$('a.icon-email');
    }

    searchManageTitle(name: string) {
        return browser.wait(protractor.ExpectedConditions.textToBePresentInElement(element(by.css('h2.h1 strong')), name), 20000);
    }

    clickOnManage() {
        element(by.css('.responsive-tooltip-tip.is-active')).element(by.linkText('Manage')).click();
    }

    hover(elem: ElementFinder) {
        browser.actions().mouseMove(elem).perform();
    }
    
    pause() {
        browser.pause();
    }

    /*
    waitForDashboard() {
        browser.wait(() => {

        }, 10000);
    }*/
}
