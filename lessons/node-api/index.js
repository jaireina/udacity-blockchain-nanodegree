const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('hello chain'));
app.listen(3000, ()=>console.log('Listening on port http://localhost:3000'))