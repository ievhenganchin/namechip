import { NgNamecheapPage } from './pages/app.po';

describe('ng-namecheap App', () => {
  let page: NgNamecheapPage;

  beforeEach(() => {
    page = new NgNamecheapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Domain Names - Cheap Domain Names | Namecheap.Com');
  });
});
