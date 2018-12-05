//Define port
const logger = require('./logger.js')
const app = require('./index.js')(logger)
const PORT = 10424;

//Run the server using express
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});