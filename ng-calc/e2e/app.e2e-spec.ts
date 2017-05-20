import { NgCalcPage } from './app.po';
import { $ } from 'protractor';

describe('ng-calc App', () => {
  let page: NgCalcPage;

  beforeAll(() => { 
    page = new NgCalcPage();
    page.navigateTo();
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('Super Calculator');
  });

  it('', () => {
    page.setFirstArg(10);
    page.setSecondArg(5);
    page.submitAction();

    expect(page.getResult()).toEqual(15);
  });
});
