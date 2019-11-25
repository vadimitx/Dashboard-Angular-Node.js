const app = require('./app');
const port = process.env.PORT || 6000;


app.listen(5000, () => console.log(`My Server has been started ${port}`))

