import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/store/actions/getMedian'
import * as types from '../src/constants/action'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates GET_PRIMES when fetching response from backend', () => {
    const expectedActions = [
      { type: types.PRIME.GET_PRIMES },
    ]
    const store = mockStore({})

    store.dispatch(actions.getMedian(100))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
