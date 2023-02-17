var express = require('express');
var router = express.Router();
const about = require('./about')
const shop = require('./shop')
const blog = require('./blog') 
const contact = require('./contact') 
const category = require('./category') 
const account = require('./account') 
const privacy = require('./privacy') 
const terms = require('./terms') 
const shipping = require('./shipping') 
const payments = require('./payments') 
const Return = require('./return') 
const blogSingle = require('./blog-single') 
const reset = require('./reset') 
const cart = require('./cart') 
const checkout = require('./checkout') 


router.use('/about', about)
router.use('/shop', shop)
router.use('/blog', blog) 
router.use('/contact', contact) 
router.use('/category', category) 
router.use('/account', account) 
router.use('/privacy', privacy) 
router.use('/terms', terms) 
router.use('/shipping', shipping) 
router.use('/payments', payments) 
router.use('/return', Return) 
router.use('/blog-single', blogSingle) 
router.use('/reset', reset) 
router.use('/cart', cart) 
router.use('/checkout', checkout) 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
