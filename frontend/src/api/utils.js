import {BASE_URL} from "../constants/api";
import axios from 'axios';

export async function get(url, options) {
  // console.log('GET url ', `${BASE_URL}${url}`);
  // console.log('GET headers ', options);
  try {
    const response = await axios.get(`${BASE_URL}${url}`,options);
    return response;
  } catch (e) {
    throw e;
  }
}
