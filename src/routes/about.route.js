const {Router} = require('express');

const router = Router();

router.get('/about',(req,res)=>{

    const locals = {
        title: "about",
        description: "Node note webApp"
    }

    res.render("about", locals);
})

module.exports = router;