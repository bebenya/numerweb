const express = require('express');
const router = express.Router();
const math = require('mathjs');

router.post('/api/CramerAPI', (req, res) => {
    var MatrixA = req.body.matrixA;
    var MatrixB = [].concat(...req.body.matrixB);

    var result = [];
    //result
    cramersRule(MatrixA,MatrixB);
    console.log(result);
    //check
    console.log(math.multiply(MatrixA, result));
     
    function cramersRule(MatrixA,MatrixB) {
        var det = math.det(MatrixA),
            i,
            tmpMatrix;
     
        for(i=0; i < MatrixA[0].length; i++) {
            var tmpMatrix = insertInTerms(MatrixA, MatrixB,i)
            result[i] = (math.det(tmpMatrix)/det)
        }
    }
     
    function insertInTerms(MatrixA, MatrixB, at) {
        var tmpMatrix = clone(MatrixA),
            i;
        for(i=0; i < MatrixA.length; i++) {
            tmpMatrix[i][at] = MatrixB[i];
        }
        return tmpMatrix;
    }
     
    function clone(m) {
        return m.map(function(a){
            return a.slice();});
    }


    res.json({
        out: result
    })
});
module.exports = router;

