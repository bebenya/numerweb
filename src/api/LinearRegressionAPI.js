const express = require("express");
const router = express.Router();
const math = require("mathjs");

router.post("/api/LinearRegressionAPI", (req, res) => {
  var FindX = req.body.FindX;
  var x = [].concat(...req.body.xValue);
  var y = [].concat(...req.body.yValue);
  var n = x.length;
  console.log(req.body);

  var sum_x=0, sum_y=0, sum_xy=0, sum_xx=0;
  for(i=0;i<n;i++)
  {
      sum_x += x[i];
      sum_y += y[i];
      sum_xy += x[i]*y[i];
      sum_xx += x[i]*x[i];
  }

  var m = (n*sum_xy - sum_x*sum_y) / (n*sum_xx - math.pow(sum_x,2));
  var b = (sum_y-m*sum_x)/n;

  var equation = m + "(X)+" + b;
  var out = (m*FindX)+b;


  console.log(equation);
  console.log(out);
  var plotData = [];
  for(i = 0 ; i < n; i++)
  {
    plotData[i] = m*x[i]+b;
  }
  console.log(plotData);
  res.json({
    equation: equation,
    out: out,
    plotData: plotData,
  });
});
module.exports = router;