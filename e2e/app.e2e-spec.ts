import { AngularDataflowPage } from './app.po';

describe('angular-dataflow App', function() {
  let page: AngularDataflowPage;

  beforeEach(() => {
    page = new AngularDataflowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
