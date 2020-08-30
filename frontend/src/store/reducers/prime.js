import {PRIME} from "../../constants/action";

const defaultState = {
  median: null,
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PRIME.GET_PRIMES: {
      return {
        ...state,
        median: null,
        error: null,
        loading: true,
      }
    }
    case PRIME.GET_PRIMES_SUCCESS: {
      const median = action.response.data;
      return {
        ...state,
        median,
        error: null,
        loading: false,
      }
    }
    case PRIME.GET_PRIMES_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    default: {
      return {...state};
    }
  }
}
