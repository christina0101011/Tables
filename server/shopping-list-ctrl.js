const ShoppingList = require('./shopping-list-model');

// GET ShoppingList listing
module.exports.getShoppingList = (req, res, next) => {
  const pageNo = parseInt(req.query.pageno)
  const sortby = req.query.sortby;
  const orderby = req.query.orderby;
  const limit = parseInt(req.query.pagesize);
  const skip = pageNo * limit;
  let shoppingList;

  ShoppingList
  .find({})
  .sort({[sortby]: orderby})
  .limit(limit)
  .skip(skip)
  .exec()
  .then(list => {
    shoppingList = list
    return ShoppingList.count({})
  })
  .then(count => {
    res.send({list: shoppingList, recordsAmount: count})
  })
  .catch(err => res.send(err));
}

// Post new ShoppingList
module.exports.postShoppingList = (req, res) => {
  // console.log('REQUEST', req.body)
  const shoppingList = new ShoppingList(req.body);
  shoppingList.save((err) => {
    if (err) {
      console.log({ success: false, message: err });
      res.status(500).send({ "Error" : err.message });
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: 'New record has been created' });
    }
  });
}

// Delete ShoppingList
module.exports.deleteShoppingList = (req, res) => {
  ShoppingList.findByIdAndRemove(req.params.id, err => {
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send({ data : "List item has been deleted!" });
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
      res.send({ data : "Record has been Updated!" });  
    }
  });
}