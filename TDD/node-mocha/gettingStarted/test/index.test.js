var chai = require('chai');
var should = require('chai').should();
var expect = require('chai').expect;
const main = require('./../main');

describe('This is our first test', function(){
  it("should pass", function(){
    expect(true).to.equal(true);
  })

  it('should not equal true', function(){
    expect(false).to.not.equal(true);
  })

  it('should test value of test1', function(){
    expect(main.test1).not.to.be.NaN;
    expect(main.test1).to.equal(1)
  })

  it('should test value of test2', function(){
    expect(main.test2).to.exist;
    expect(main.test2).to.equal("hello")
    expect(main.test2).not.to.equal("goodbye")
  })

  it('should test value of test3', function(){
    expect(main.test3).not.to.be.empty;

  })

  it('should test value of test4', function(){
    
  })

  it('should test value of test5', function(){
    
  })
})

