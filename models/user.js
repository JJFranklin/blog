/**
 * Created by hemingming on 2016/10/27.
 */
var mongodb=require("./db");
function User(user){
    this.name=name;
    this.password=password;
    this.email=email;
}

module.exports=User;

//存储用户信息
User.prototype.save=function(callback){
  var user={
      name:this.name,
      password:this.password,
      email:this.email
  };
  mongodb.open(function(err,db){
      if(err)
      {
          return callback(err);
      }
      db.collection("users",function(err,callback){
          if(err)
          {
              mongodb.close();
          }
          collection.insert(user,{
              safe:true
          },function(err,user){
              mongodb.close();
              if(err){
                  return callback(err);
              }
              callback(null,user[0]);
          });

      });

  });
};

//读取用户信息
User.get=function(name,callback){
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        db.collection("users",function(err,callback){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({
                name:name
            },function(err,user){
                if(err){
                    return callback(err);
                }
                callback(null,user);
            });
        });
    });
};
