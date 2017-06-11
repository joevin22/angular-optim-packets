import { AngularOptimPacketsPage } from './app.po';

describe('angular-optim-packets App', () => {
  let page: AngularOptimPacketsPage;

  beforeEach(() => {
    page = new AngularOptimPacketsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
