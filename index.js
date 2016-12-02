const express = require('express');
const path = require('path');
const app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'));

app.get('/', (req, res) =>{
  res.send('Welcome to Room Checker app');
});

const roomTypes = [
    {type: 'Meeting'},
    {type: 'Games'},
    {type: 'Quiet-time'},
    {type: 'Learning'},
    {type: 'Working'}]

app.listen(3000, () => {
    console.log('listening on port 3000');
});
