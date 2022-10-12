const router = require('express').Router()

const Celebrity = require('../models/Celebrity.model')
const celebrities = [];

//FORM
router.get('/celebrities/create', (req, res, next)=>{
    res.render('./celebrities/new-celebrity')
})
router.post('/celebrities/create', (req, res, next)=>{
    Celebrity.create(req.body)
        .then(result => {
                celebrities.push(result)
                res.render('./celebrities/celebrities', {celebrities})
            })    
        .catch(err => res.render('./celebrities/new-celebrity', err))
})

//CELEBRITIES
router.get('/celebrities/celebrities', (req, res, next)=>{
    res.render('./celebrities/celebrities')
})



module.exports = router;