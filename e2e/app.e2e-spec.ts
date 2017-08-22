import { YuitaiPage } from './app.po';

describe('yuitai App', () => {
  let page: YuitaiPage;

  beforeEach(() => {
    page = new YuitaiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
