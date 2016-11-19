describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/movies/1');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Movies';
    expect(subject).toEqual(result);
  });

});
