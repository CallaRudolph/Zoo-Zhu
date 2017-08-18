import { ZooPage } from './app.po';

describe('zoo App', () => {
  let page: ZooPage;

  beforeEach(() => {
    page = new ZooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
