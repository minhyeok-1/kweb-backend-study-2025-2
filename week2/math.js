const express = require('express');
const router = express.Router();

router.get('/sum',(req,res)=>{
    const a =Number(req.query.a);
    const b =Number(req.query.b);
    res.send(`Sum of ${a} and ${b} is ${a+b}`);
})
router.get('/sub',(req,res)=>{
    const a =Number(req.query.a);
    const b =Number(req.query.b);
    res.send(`Difference between ${a} and ${b} is ${a-b}`);
})

module.exports = router;
