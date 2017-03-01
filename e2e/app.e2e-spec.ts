import { SkrillPage } from './app.po';

describe('skrill App', function() {
  let page: SkrillPage;

  beforeEach(() => {
    page = new SkrillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
