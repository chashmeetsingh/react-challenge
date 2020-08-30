let medianService = require('../services/median')
const ResponseCodes = require('../constants/response')

describe("Get Median", () => {

  test("it returns median of an array of numbers", () => {
    expect(medianService.median([2, 3, 5, 7, 11, 13, 17], (response) => {
      return response.data
    })).toEqual(7)

    expect(medianService.median([2, 3, 5, 7, 11, 13, 17, 19], (response) => {
      return response.data
    })).toEqual(9)
  })

  test("it returns an error message if given a number less than three", () => {
    expect(medianService.median([], (response) => {
      return response.error
    })).toEqual(ResponseCodes.Constants.EMPTY_ARRAY_FOR_MEDIAN)

    expect(medianService.median(undefined, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.EMPTY_ARRAY_FOR_MEDIAN)

    expect(medianService.median(null, response => {
      return response.error
    })).toEqual(ResponseCodes.Constants.EMPTY_ARRAY_FOR_MEDIAN)
  })
})
