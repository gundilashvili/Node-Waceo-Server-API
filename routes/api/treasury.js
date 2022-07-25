const express = require('express')
const router = express.Router() 


// Treasury Model
const Treasury = require('../../models/Treasury') 

// @route    GET api/treasury
// @desc     Get waceo treasury
// @access   Public
router.get('/' , ( req, res) => {
    Treasury
    .findOne( ) 
    .sort( { create_date: -1 } )
    .then(records => { res.send(records)})
    .catch(e => console.log(e));
})
   
module.exports = router
 
 