const ResponseCodes = require('../constants/response')

function median(nums, callback) {
  if(!nums || nums.length === 0) return callback({
    error: ResponseCodes.Constants.EMPTY_ARRAY_FOR_MEDIAN
  });

  nums.sort((a,b) => {
    return a-b;
  });

  let half = Math.floor(nums.length / 2);

  if (nums.length % 2)
    return callback({
      data: nums[half]
    });

  return callback({
    data: (nums[half - 1] + nums[half]) / 2.0
  });
}

module.exports = {
  median: median,
}
