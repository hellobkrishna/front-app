const express=require('express');
const { restart } = require('nodemon');
const router =express.Router();
const  request  = require('request');
const https = require('https');


router.get('/list-inboxes', (req,res)=>{
    const listInboxes=[]
    const options = {
        method: 'GET',
        url: 'https://api2.frontapp.com/inboxes',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOlsic2hhcmVkOioiXSwiaWF0IjoxNjQxNjQ5NDUwLCJpc3MiOiJmcm9udCIsInN1YiI6ImJiYWMzZjdjYzM1MmY2N2FjMDcyIiwianRpIjoiMDg3NTc3MDM0MTE5YmYzMCJ9.Q0ApZY5HDNZek_x9WDFZVEc2XKLTm38E2bP2qdbqrv4'
        }
      };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const data=JSON.parse(body);
        listInboxes.push(data);
        res.status(200).json(listInboxes);
        console.log(JSON.stringify(listInboxes));
      });
});

module.exports = router;
