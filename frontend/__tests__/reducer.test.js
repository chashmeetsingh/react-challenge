import reducer from '../src/store/reducers/prime'
import * as types from '../src/constants/action'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({"error": null, "loading": false, "median": null})
  })

  it('should handle PRIME actions', () => {
    expect(
      reducer([], {
        type: types.PRIME.GET_PRIMES,
      })
    ).toEqual({"error": null, "loading": true, "median": null})

    expect(
      reducer(
        {"error": null, "loading": true, "median": null},
        {
          type: types.PRIME.GET_PRIMES_SUCCESS,
          response: {
            data: 41
          }
        }
      )
    ).toEqual({"error": null, "loading": false, "median": 41})

    expect(
      reducer(
        {"error": null, "loading": true, "median": null},
        {
          type: types.PRIME.GET_PRIMES_ERROR,
          error: "Please enter a number greater than 2"
        }
      )
    ).toEqual({"error": "Please enter a number greater than 2", "loading": false, "median": null})
  })
})
