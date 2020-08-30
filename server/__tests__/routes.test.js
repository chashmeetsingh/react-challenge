const app = require('../app')
const supertest = require('supertest')
const request = supertest(app);
const ResponseCodes = require('../constants/response')

describe('Get Endpoints', () => {
  it('should give prime numbers', async done => {
    let max = 100;
    const response = await request.get(`/getMedian?max=${max}`)

    expect(response.status).toBe(200)
    expect(response.body.data).toBe(41)
    done()
  })

  it('should give an error', async done => {
    const response = await request.get(`/getMedian`)

    expect(response.status).toBe(200)
    expect(response.body.error).toBe(ResponseCodes.Constants.ENTER_NUMBER_GREATER_THAN_2)
    done()
  })
})
