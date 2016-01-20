describe('palindrome', function(){
  it('will return true if string is a palindrome and is even', function(){
    expect(palindrome('hannah')).to.equal(true);
  });
  it('will return true if string is a palindrome and is odd', function(){
    expect(palindrome('soosoos')).to.equal(true);
  });
});
