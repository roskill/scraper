const express = require('express');
const path = require('path');

const app = express();

const getData = async () => {
  const response = await fetch(
    'https://www.nationalregisterofbigtrees.com.au/tree_register.php?lstatus_id=1'
  );
  const data = await response.json();
  console.log(data);
};

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(3000, () => console.log('Listening on port 3000'));
