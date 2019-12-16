const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const getData = async () => {
  const result = await axios.get(
    'https://www.nationalregisterofbigtrees.com.au/tree_register.php?lstatus_id=1'
  );
  return result.data;
};

app.get('/', async (req, res) => {
  const data = await getData();
  console.log(data);
});

app.listen(3000, () => console.log('Listening on port 3000'));
