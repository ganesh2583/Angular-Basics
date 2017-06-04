import { AngularbasicsPage } from './app.po';

describe('angularbasics App', () => {
  let page: AngularbasicsPage;

  beforeEach(() => {
    page = new AngularbasicsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
