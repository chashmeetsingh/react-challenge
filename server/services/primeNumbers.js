const ResponseCodes = require('../constants/response')

function getPrimeNumbers(maxNumber, callback) {
  // invalid params
  if (!maxNumber || !Number.isInteger(maxNumber) || maxNumber <= 2) {
    return callback({
      error: ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2
    })
  }

  // mark all numbers as prime
  const is_prime = new Array(maxNumber + 1).fill(true);

  // 0 and 1 are not prime
  is_prime[0] = false;
  is_prime[1] = false;

  // store the prime numbers
  const primes = [];

  for (let num = 2; num <= maxNumber; num += 1) {
    // add if current num is marked prime
    if (is_prime[num]) {
      primes.push(num);

      // mark all multiples of current prime number false
      for (let next = num * 2; next <= maxNumber; next += num) {
        is_prime[next] = false;
      }
    }
  }
  return callback({
    data: primes
  });
}

module.exports = {
  getPrimeNumbers: getPrimeNumbers,
}
