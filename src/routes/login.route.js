const {Router} = require('express');

const router = Router();

router.get('/login',(req,res)=>{

    const locals = {
        title: "Login",
        description: "Node note webApp"
    }

    res.render("login", locals);
})

router.post('/login',(req,res)=>{

    const locals = {
        title: "Login",
        description: "Node note webApp"
    }
   
    const {email, username, password} = req.body;
    
    console.log(email, username, password)

    res.render("login", locals);
})

module.exports = router;