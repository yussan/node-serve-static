const express = require('express');

// your static web location path
const DIR_STATIC = __dirname + '/sample_site'; 
// server will run in
const PORT = 3000;

const app = express();
// sample of static directory
app.use('/static', express.static(DIR_STATIC + '/static'));
app.use('*', express.static(DIR_STATIC));
app.listen(3000, () => console.log(`node serve static is runing on port ${PORT}`));