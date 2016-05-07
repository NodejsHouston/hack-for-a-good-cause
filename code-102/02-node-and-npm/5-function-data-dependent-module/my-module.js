module.exports = function(options){
  return function(){
    return `Hi ${options.name}, glad to see you are still ${options.status}!`
  }
};
