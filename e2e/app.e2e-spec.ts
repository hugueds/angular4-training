import { TrainingNg2Page } from './app.po';

describe('training-ng2 App', () => {
  let page: TrainingNg2Page;

  beforeEach(() => {
    page = new TrainingNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
