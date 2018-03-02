var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/EhabController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/ehab/getProducts', productCtrl.getProducts);
router.get('/ehab/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/ehab/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/ehab/createProduct', productCtrl.createProduct);
router.patch('/ehab/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/ehab/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
