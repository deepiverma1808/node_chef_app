'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send('An alligator approches!!!!!!!!!!!!!!!!!!');
});

app.listen(3000, () => console.log('gator app listening on port 3000!'));
