import { NgNamecheapSigninPage } from './pages/signin.po';
import { NgNamecheapDashboardPage } from './pages/dashboard.po';

describe('ng-namecheap Signin App', () => {
  let page: NgNamecheapSigninPage;
  let dashboard: NgNamecheapDashboardPage;

  beforeEach(() => {
    page = new NgNamecheapSigninPage();
    dashboard = new NgNamecheapDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.login();

    //expect(dashboard.searchByDomain('test490016gf.com').getText()).toContain('test490016gf');
    dashboard.hover(dashboard.searchEmailIconByDomain('test490016gf.com'));
    dashboard.clickOnManage();
    expect(dashboard.searchManageTitle('test490016gf.com')).toBe(true);
  });
});