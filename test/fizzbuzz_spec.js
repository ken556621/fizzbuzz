

var should = chai.should();
describe('function fizzBuzz', function(){
  it('input a number and devision by 3 and expect output : Fizz', function(){
    var result = fizzBuzz(9);
    result.should.be.equal('Fizz');
  })
  it('input a number and devision by 5 and expect output : Buzz', function(){
    var result = fizzBuzz(10);
    result.should.be.equal('Buzz');
  })
  it('input a number and devision by 3 & 5 and expect output : FizzBuzz', function(){
    var result = fizzBuzz(15);
    result.should.be.equal('FizzBuzz');
  })
  it('input a number and can not devision by 3 & 5 and expect output : number', function(){
    var result = fizzBuzz(7);
    result.should.be.equal(7);
  })
})
