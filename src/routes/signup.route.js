const {Router} = require('express');

const router = Router();

router.get('/signup',(req,res)=>{

    const locals = {
        title: "signup",
        description: "Node note webApp"
    }

    res.render("signup", locals);
})

router.post('/signup',(req,res)=>{

    const locals = {
        title: "signup",
        description: "Node note webApp"
    }
   
    const {email, username, password, key} = req.body;
    
    console.log(email, username, password, key)

    res.render("signup", locals);
})

module.exports = router;