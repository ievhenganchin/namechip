import { NgNamecheapSignupPage } from './pages/signup.po';

describe('ng-namecheap Signup App', () => {
  let page: NgNamecheapSignupPage;

  beforeEach(() => {
    page = new NgNamecheapSignupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();

    page.userName.sendKeys(page.generateString(10));

    let password = page.generateString(20);
    page.password.sendKeys(password);
    page.confirmPassword.sendKeys(password);

    //page.pause();

    expect(page.getTitle()).toEqual('Namecheap.com');
  });
});
