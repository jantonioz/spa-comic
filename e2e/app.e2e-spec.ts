import { SpaComicPage } from './app.po';

describe('spa-comic App', function() {
  let page: SpaComicPage;

  beforeEach(() => {
    page = new SpaComicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
