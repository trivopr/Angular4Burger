import { A4completePage } from './app.po';

describe('a4complete App', () => {
  let page: A4completePage;

  beforeEach(() => {
    page = new A4completePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
