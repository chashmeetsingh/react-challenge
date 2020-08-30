let getPrimesService = require('../services/primeNumbers')
const ResponseCodes = require('../constants/response')

describe("Get Primes", () => {

  test("it returns all the primes less than a given number", () => {
    expect(getPrimesService.getPrimeNumbers(100, (response) => {
      return response.data
    })).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  })

  test("it returns all the primes less than a small number", () => {
    expect(getPrimesService.getPrimeNumbers(3, (response) => {
      return response.data
    })).toEqual([2])
  })

  test("it returns an error message if given a number less than three", () => {
    expect(getPrimesService.getPrimeNumbers(null, (response) => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(undefined, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(0, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(-6, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(1, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(2, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers(2.2, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)

    expect(getPrimesService.getPrimeNumbers("abcd", response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)
  })

  test("it returns all primes less than a given large number", () => {
    expect(getPrimesService.getPrimeNumbers(1000000, response => {
      return response.data[12321]
    })).toEqual(131933)
  })
})
