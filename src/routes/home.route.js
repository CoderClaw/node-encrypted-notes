const {Router} = require('express');

const router = Router();

router.get('/',(req,res)=>{

    const locals = {
        title: "Home",
        description: "Node note webApp"
    }

    res.render("home", locals);
})

module.exports = router;