const express = require('express')
const router = express.Router() 


// Prices Model
const Prices = require('../../models/Prices') 

// @route    GET api/prices
// @desc     Get waceo prices
// @access   Public
router.get('/' , ( req, res) => {
  Prices
    .findOne( ) 
    .sort( { create_date: -1 } )
    .then(records => { res.send(records)})
    .catch(e => console.log(e));
})
   
module.exports = router
 
 