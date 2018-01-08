const express = require('express');
const static = require('express-static');
const user = require('./routes/user');
const app = express();
app.listen(8004);


app.use('/user',user)





app.use(static('./public'));