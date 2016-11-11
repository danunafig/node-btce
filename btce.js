/**
 * Node.js Public BTC-E API
 */

var https = require('https')
var url = require('url')
var crypto = require('crypto')
var querystring = require('querystring')
var util = require('util')

module.exports = BTCE

function BTCE(key, secret) {
  this.urlGet = 'https://btc-e.com:443/api/3/'
}

/**
 * [info description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
BTCE.prototype.info = function(callback) {

  var url = this.urlGet+'/info/'
  this.getHTTPS(url, callback)
}

BTCE.prototype.ticker = function(pairs, callback) {

  let pairs = params.pairs || 'btc_usd';

  let url = this.urlGet+'/ticker/'+pairs;

  this.getHTTPS(url, callback)
}

BTCE.prototype.depth = function(pairs, limit, callback) {

  let pairs = params.pairs || 'btc_usd';
  let limit = params.limit || 150;

  let url = this.urlGet+'/depth/'+pairs+'?limit='+limit;

  this.getHTTPS(url, callback)
}

BTCE.prototype.trades = function(pairs, limit, callback) {

  let pairs = params.pairs || 'btc_usd';
  let limit = params.limit || 150;

  let url = this.urlGet+'/trades/'+pairs+'?limit='+limit;

  this.getHTTPS(url, callback)
}



