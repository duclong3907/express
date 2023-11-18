const express = require('express')
const router = express.Router()

router.get('/hello', (req, res)=>{
  res.render('demo/hello')
})

module.exports = router