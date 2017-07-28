import { Day2ExamPage } from './app.po';

describe('day2-exam App', () => {
  let page: Day2ExamPage;

  beforeEach(() => {
    page = new Day2ExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
