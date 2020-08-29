const express = require('express');
const router = express.Router();

const primeNumService = require('../services/primeNumbers')
const medianService = require('../services/median')
const ResponseCodes = require('../constants/response')

router.get('/getMedian', function (req, res) {
  try {
    const maxNumber = Number(req.query.max);

    primeNumService.getPrimeNumbers(maxNumber, (response) => {
      if (response.error) {
        res.send({ error: response.error })
      } else {
        medianService.median(response.data, (median) => {
          res.send(median);
        });
      }
    });
  } catch (e) {
    res.send({error: ResponseCodes.Constants.INTERNAL_SERVER_ERROR})
  }
})

module.exports = router;
