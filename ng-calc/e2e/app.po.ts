import { browser, element, by } from 'protractor';

class ResultModel {
  first: number;
  second: number;
  operator: string;
  result: number;
}

export class NgCalcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h3')).getText();
  }

  getFirstElem() {
    return element(by.xpath('//input[1]'));
  }

  getFirstElemValue() {
    return this.getFirstElem().getText();
  }

  setFirstArg(value: number) {
    let input = this.getFirstElem();
    input.sendKeys(value);
  }

  getSecondElem() {
    return element(by.xpath('//input[2]'));
  }

  getSecondElemValue() {
    return this.getSecondElem().getText();
  }

  setSecondArg(value: number) {
    let input = this.getSecondElem();
    input.sendKeys(value);
  }

  submitAction() {
    element(by.xpath('//button[contains(@class, "btn")]')).click();
  }

  // http.get('....').then((data) => ...)

  getResult(): Promise<number> {
    return new Promise((resolve, reject) => {
      element(by.css('h2')).getText().then((value) => {
        resolve(parseInt(value));
      });
    });
  }

  getResultModel(): Promise<ResultModel> {
    let self = this;

    return new Promise((resolve, reject) => {

      Promise.all([
        self.getFirstElem().getAttribute('value'),
        self.getSecondElem().getAttribute('value'),
        element(by.css('h2')).getText()])
        .then(([first, second, result]) => {
          let res = new ResultModel();
          res.result = parseInt(result);
          res.first = parseInt(first);
          res.second = parseInt(second);

          resolve(res);
        });
    });

    // http.get('....')
  }
}
