const PORT = 8010

const emailjs = require('emailjs-com')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app  = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.post('/sendmail', (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        service_id: process.env.EMAILJS_SERVICE_NAME,
        template_id: process.env.EMAILJS_TEMPLATE,
        user_id: process.env.EMAILJS_API_KEY,
        template_params:{
          name: req.name,
          email: req.email,
          message: req.message
        }
      }
      axios.request(options).then((response)=>{
        console.log(response.data)
        res.json('Email correctly sent')
      }).catch((error) => {
        console.error(error);
        res.json('An error has occured')
      })
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))