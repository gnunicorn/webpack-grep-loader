module.exports = function (source, query) {
  this.cacheable && this.cacheable();
  if (typeof source == 'string') source = JSON.parse(source);
  var query = this.query.slice(1).split(","),
      res = {};

  if (query.length === 1) {
    return source[query[0]];
  }

  for (var i=0; i<query.length; i++){
    if (source.hasOwnProperty(query[i])){
      res[query[i]] = source[query[i]];
    }
  }
  return JSON.stringify(res, undefined, "\t");
};
