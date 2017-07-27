import { TutorialTOHPage } from './app.po';

describe('tutorial-toh App', () => {
  let page: TutorialTOHPage;

  beforeEach(() => {
    page = new TutorialTOHPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
