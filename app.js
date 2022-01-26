const express = require('express')
const request = require("request")
const cheerio = require("cheerio")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    request("http://www.jikexueyuan.com", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            $ = cheerio.load(body) // 相当于 jQuery，获取服务器的 DOM
            res.json({
                "Classnum": $(".aside-cList li").toString(),
            })
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})