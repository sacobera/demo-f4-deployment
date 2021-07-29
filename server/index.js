require('dotenv').config()
const express = require('express');

const path = require('path') //creates a path that joins all the other paths 

const app = express()

const port = process.env.PORT || 5500

app.listen(port, () => {console.log('Listening on port ${port}')})

