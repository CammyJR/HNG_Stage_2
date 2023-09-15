const express = require('express');
const {json} = require('express');
const routes = require('./routes/route');
const connectDB = require('./database/connection');


connectDB();
const app = express();

app.use(json());
app.use('/api', routes);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is up and running...`);
});