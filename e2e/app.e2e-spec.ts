import { PathwaysPage } from './app.po';

describe('pathways App', () => {
  let page: PathwaysPage;

  beforeEach(() => {
    page = new PathwaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
