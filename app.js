const express =require('express');
const app=express();
const morgan=require('morgan');
const bodyParser = require('body-parser');

const conversations = require("./api/routes/conversations");
const getMessage =require('./api/routes/getMessage');
const listContact=require('./api/routes/listContact');
const listInboxes=require('./api/routes/listInboxes');
const getInbox=require('./api/routes/getInbox');
const listInboxConversations =require('./api/routes/listInboxConversations')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes List
app.use("/api", conversations);
app.use("/api", getMessage);
app.use("/api", listContact);
app.use("/api", listInboxes);
app.use("/api", getInbox);
app.use("/api", listInboxConversations);

module.exports = app;