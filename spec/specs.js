describe('factorial', function() {
  it('returns 1 when zero is entered', function() {
    factorial(0).should.equal(1);
  });
  it('multiplies a number by all of the positive integers less than that number', function() {
    factorial(5).should.equal(120);
  });
});

