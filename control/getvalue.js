const Content = require('../class/content');
//  backend/getdata  : Get
exports.getvalue = ((req, res, next) =>{
  Content.find()
      .then(product=>{
          console.log(product)
          res.status(200).json(product);
      })
      .catch(err=>{
          console.log(err);
          res.status(500).json({
              message : "Error at getvalue",
              error : err
          })
      })
})
