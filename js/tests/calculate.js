describe('Calculate', function() {
  it('is five', function() {
    expect(calculate(2,3)).not.toBe(null);
   	expect(calculate(2,3)).toEqual(5);
  });
});