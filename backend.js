const PORT = 8010

const emailjs = require('@emailjs/browser')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app  = express()

app.use(cors())

app.use(express.json())

emailjs.init(process.env.EMAILJS_API_KEY)

app.get('/', (req, res) => {
    res.json('hi')
})

app.post('/sendmail', (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        data: {
          service_id: process.env.EMAILJS_SERVICE_NAME,
          template_id: process.env.EMAILJS_TEMPLATE,
          template_params:{
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
          },
          user_id: process.env.EMAILJS_API_KEY
        }
        
      }
      console.log(options.data.template_params)
      axios.request(options).then((response)=>{
        console.log(response.data)
        res.json('Email correctly sent')
      }).catch((error) => {
        console.error(error);
        res.json('An error has occured')
      })
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))