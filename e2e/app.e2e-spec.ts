import { SeedProjectMeanV4Page } from './app.po';

describe('seed-project-mean-v4 App', () => {
  let page: SeedProjectMeanV4Page;

  beforeEach(() => {
    page = new SeedProjectMeanV4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
