function median(nums, callback) {
  if(nums.length === 0) return callback({
    data: 0
  });

  nums.sort(function(a,b){
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
