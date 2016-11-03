/**
 * Created by hemingming on 2016/10/27.
 */
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port),
    {safe: true});
var ccs=new Date();
console.log("I'am Frank");