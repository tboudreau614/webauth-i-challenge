require("dotenv").config();
const server = require('./server')
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));