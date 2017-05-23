describe('foo', function() {
  beforeEach(function() {
    this.bar = 42;
  })
  it('has a test', function() {
    expect(this.bar).toEqual(42);
  });
})
