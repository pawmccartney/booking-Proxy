const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
const port = 4004;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/low-days/0', (req, res) => {
  axios({
    method: "GET",
    url: 'http://localhost:4002/api/low-days/0'
  })
  .then((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/api/hotel/:hotelId', (req, res) => {
  axios({
    method: "GET",
    url: `http://localhost:4001/api/hotel/${req.params.hotelId}`
  })
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/api/pictures/:hotel', (req, res) => {
  var hotel = req.params.hotel
  axios({
    method: "GET",
    url: `http://localhost:4000/api/pictures/${hotel}`,
  })
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/reviews', (req, res) => {
  axios({
    method: "GET",
    url: `http://localhost:4003/reviews`
  })
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})