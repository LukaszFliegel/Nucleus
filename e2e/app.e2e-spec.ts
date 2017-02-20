import { NucleusPage } from './app.po';

describe('nucleus App', () => {
  let page: NucleusPage;

  beforeEach(() => {
    page = new NucleusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
