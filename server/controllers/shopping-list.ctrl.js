const ShoppingList = require('../models/shopping-list.model');

// GET ShoppingList listing
module.exports.getShoppingList = (req, res, next) => {
  const pageNo = +req.query.pageno;
  const sortby = req.query.sortby;
  const orderby = req.query.orderby;
  const limit = +req.query.pagesize;
  const skip = pageNo * limit;
  let shoppingList;

  ShoppingList
  .find({})
  .sort({[sortby]: orderby})
  .limit(limit)
  .skip(skip)
  .exec()
  .then(list => {shoppingList = list; return ShoppingList.count({}) })
  .then(count => {res.send({list: shoppingList, recordsAmount: count}) })
  .catch(err => {console.log(err); res.send(err); return next(err) });
}

// Post new ShoppingList
module.exports.postShoppingList = (req, res, next) => {
  const shoppingList = new ShoppingList(req.body);
  shoppingList.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ "Error" : err.message });
      return next(err);
    } else {
      console.log('New record has been created' );
      res.send({'message': 'success'});
    }
  });
}

// Delete ShoppingList
module.exports.deleteShoppingList = (req, res, next) => {
  ShoppingList.findByIdAndRemove(req.params.id, err => {
    if(err){
      console.log(err);
      res.send(err);
      return next(err);
    } else {
      console.log("List item has been deleted!");
      res.send({'message': 'success'});
    }
  });
}

// Update ShoppingList
module.exports.updateShoppingList = (req, res, next) => {
  ShoppingList.findByIdAndUpdate(
    req.params.id,
    req.body, 
    (err, list) => {
      console.log(err);
    if (err) {
      res.send(err);
      return next(err);
    } else {
      console.log('Record has been Updated!');
      res.send({'message': 'success'});
    }
  });
}