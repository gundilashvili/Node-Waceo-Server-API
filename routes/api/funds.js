const express = require('express')
const router = express.Router() 


// Funds Model
const Funds = require('../../models/Funds') 

// @route    GET api/funds
// @desc     Get waceo funds
// @access   Public
router.get('/' , ( req, res) => {
    Funds
    .findOne( ) 
    .sort( { create_date: -1 } )
    .then(records => { res.send(records)})
    .catch(e => console.log(e));
})
   
module.exports = router
 
 