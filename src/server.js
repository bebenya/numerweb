const express = require('express');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());

const port = 5000;

const BisectionAPI = require('./api/BisectionAPI')
const FalsePosAPI = require('./api/FalsePosAPI')
const OnePointAPI = require('./api/OnePointAPI')
const SecantAPI = require('./api/SecantAPI')
const NewtonRaphsonAPI = require('./api/NewtonRaphsonAPI')
const CramerAPI = require('./api/CramerAPI')
const GaussElimAPI = require('./api/GaussElimAPI')
const GaussJordanAPI = require('./api/GaussJordanAPI')
const GaussSeidelAPI = require('./api/GaussSeidelAPI')
const JacobilAPI = require('./api/JacobiAPI')
const NewtonInterpolation = require('./api/NewtonInterpolation')
const LinearRegressionAPI = require('./api/LinearRegressionAPI')

app.use('/',BisectionAPI);
app.use('/',FalsePosAPI);
app.use('/',OnePointAPI);
app.use('/',SecantAPI);
app.use('/',NewtonRaphsonAPI);
app.use('/',CramerAPI);
app.use('/',GaussElimAPI);
app.use('/',GaussJordanAPI);
app.use('/',GaussSeidelAPI);
app.use('/',JacobilAPI);
app.use('/',NewtonInterpolation);
app.use('/',LinearRegressionAPI);

app.listen(port, () => console.log("Backend server live on " + port));

module.exports = app;