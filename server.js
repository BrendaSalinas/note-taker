const { urlencoded } = require('body-parser');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const util = require('util');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static('public'));
 app.use('/api',apiRoutes);
 app.use('/',htmlRoutes);

 app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`));