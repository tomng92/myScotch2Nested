import { MyScotch2NestedPage } from './app.po';

describe('my-scotch2-nested App', function() {
  let page: MyScotch2NestedPage;

  beforeEach(() => {
    page = new MyScotch2NestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
