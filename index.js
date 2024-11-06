const express = require('express');

const app = express();

app.listen(5001,()=> console.log('listening on port 5001'));

app.get('/', (req, res) => {
  res.send('API by Shrihari 22BCT0132 runnign on EC2');
});

