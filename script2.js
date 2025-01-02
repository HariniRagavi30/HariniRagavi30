
document.addEventListener('DOMContentLoaded', function () {
   
});
const express = require('express');
const app = express();

app.use(express.static('E-COMMERCE')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/E-COMMERCE/index.html');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
