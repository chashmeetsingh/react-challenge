import {API_URL} from '../constants/api'
import {get} from './utils'

export async function getMedianForPrimeNums(maxNumber) {
  try {
    let params = {
      max: maxNumber
    };
    const response = await get(API_URL.GET_MEDIAN_FOR_PRIME_NUMS, {params: params});
    return response;
  } catch (e) {
    throw e;
  }
}
