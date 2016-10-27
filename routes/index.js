// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '主页' });
  });
  app.get('/reg', function (req, res) {
    res.render("reg",{title:"注册"});

  });
  app.post('/reg', function (req, res) {
    var name=req.body.name;
    var password=req.body.password;

    var password_re=req.body["password-repeat"];
    console.log(password_re);
    if(password!=password_re)
    {
     // res.render("reg",{
     //   success:req.flash("success").toString(),
     //   error:req.flash("error").toString()
     // });
      return res.redirect("/reg");
    }
  });
  app.get('/login', function (req, res) {
    res.render('login', { title: '登录' });
  });
  app.post('/login', function (req, res) {
  });
  app.get('/post', function (req, res) {
    res.render('post', { title: '发表' });
  });
  app.post('/post', function (req, res) {
  });
  app.get('/logout', function (req, res) {
  });
};