const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use('/', express.static(path.join(__dirname, 'public'))) //  "public" off of current is root
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`))