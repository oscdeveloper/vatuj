import { VatujPage } from './app.po';

describe('vatuj App', () => {
  let page: VatujPage;

  beforeEach(() => {
    page = new VatujPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
