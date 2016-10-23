import { UwBlueprintPage } from './app.po';

describe('uw-blueprint App', function() {
  let page: UwBlueprintPage;

  beforeEach(() => {
    page = new UwBlueprintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
