const {Router} = require('express')
const router = Router();

router.get('user',(req,res)=>{
    const a =req.query.a;
    const b =req.query.b;
    res.send(`You sent a=${a}, b=${b}`);
})

router.get('/user/:id',(req,res,next )=>{
    if(req.params.id !=='1') res.send('You are not welcome!');
    else next();
});
router.get('/user/:id',(req,res)=>{
    res.send(`Hello, user ${req.params.id}`);
})

module.exports = router;