const axios = require("axios")
require('dotenv').config()


const getAggregates = async (ticker, from, to) => {
    let key = process.env.POLYGON_API_KEY
    let aggs = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?adjusted=true&sort=asc&limit=50000&apiKey=${key}`)
        .then(response => response.data)
        .catch(err => console.log(err))
    let results = aggs.results
    console.log(results)
    return results
}

getAggregates("AAPL", "2010-01-01", "2022-02-02")

module.exports={getAggregates}