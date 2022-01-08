const express=require('express')
const { restart } = require('nodemon')
const router =express.Router()
const  request  = require('request');
const https = require('https');


router.get('/message', (req,res)=>{
    const allMessageList=[]
  const options = {
  method: 'GET',
  url: 'https://api2.frontapp.com/messages/message_id',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOlsic2hhcmVkOioiXSwiaWF0IjoxNjQxNjQ5NDUwLCJpc3MiOiJmcm9udCIsInN1YiI6ImJiYWMzZjdjYzM1MmY2N2FjMDcyIiwianRpIjoiMDg3NTc3MDM0MTE5YmYzMCJ9.Q0ApZY5HDNZek_x9WDFZVEc2XKLTm38E2bP2qdbqrv4'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  res.status(200).json(body)

});


})

module.exports = router;
