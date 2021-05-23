const express = require("express");
const router = express.Router();
const math = require("mathjs");


router.post("/api/OnePointAPI", (req, res) => {
  var eq = math.compile(req.body.equation);
  var x_old = parseFloat(req.body.x_old);
  var x_new = 0;
  var n = 0;
  var check = parseFloat(0.0);
  var tmpArr = [];

  do {
    x_new = eq.evaluate({x:x_old});
    check = Math.abs((x_new - x_old) / x_new).toFixed(8);
    n++;
    tmpArr.push({
      iteration: n,
      x_old: x_old,
      x_new: x_new,
      Error: check,
    });
    x_old = x_new;
  } while (check > 0.00001 && n < 100);

  res.json({
    tmpArr: tmpArr,
  });
});
module.exports = router;