// get describe from mocha
let describe = require('mocha').describe

// get it from mocha
let it = require('mocha').it

// get expect from chai
let expect = require('chai').expect

// get our function for testing
let strictEquals = require('../equals.js')


// test suite
describe('test suite: equals.js', () => {
  // positive tests
  describe('Function works as intended, values strictly equal', () => {
    // does function return true if values are strictly equal
    it('Test 1: Tests if function parameters are strictly equal', () => {
      // step 1:describe data/set uo test data
      let testFunction = (5, 5)
      let expectedResult = true


      // step 2:run function with test data
      let actualResult = strictEquals(testFunction)

      // step 3:assert code running correctly
      expect(actualResult).to.equal(expectedResult)
    })

    // test 2
    it('Test 2: Tests if a another function is equal', () => {
      let testFunction = ('5', '5')
      let expectedResult = true

      let actualResult = strictEquals(testFunction)

      expect(actualResult).to.equal(expectedResult)
    })
  })

  // negative tests
  describe('Function returns true values that arent strictly equal', () => {
    it('Doesnt compare the functions correctly', () => {
      let testFunction = (5, 'six')
      let expectedResult = undefined

      let result = strictEquals(testFunction)

      expect(result).to.equal(expectedResult)
    })
  })
})
