import {getMedianForPrimeNums} from "../../api/medianPrimeNums";
import {PRIME} from "../../constants/action";

function getMedian(maxNumber) {
  return (dispatch) => {
    dispatch(getMedianCalled())
    getMedianForPrimeNums(maxNumber).then(response => {
      response.data.error
      ? dispatch(getMedianError(response.data.error))
      : dispatch(getMedianSuccess(response.data))
    }).catch(error => {
      dispatch(getMedianError(error))
    })
  }
}

function getMedianCalled() {
  return {
    type: PRIME.GET_PRIMES
  }
}

function getMedianSuccess(response) {
  return {
    type: PRIME.GET_PRIMES_SUCCESS,
    response
  }
}

function getMedianError(error) {
  return {
    type: PRIME.GET_PRIMES_ERROR,
    error
  }
}

export {
  getMedian,
}
