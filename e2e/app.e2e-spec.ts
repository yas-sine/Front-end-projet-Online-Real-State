import { OnlineRealEstateFrontPage } from './app.po';

describe('online-real-estate-front App', function() {
  let page: OnlineRealEstateFrontPage;

  beforeEach(() => {
    page = new OnlineRealEstateFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
