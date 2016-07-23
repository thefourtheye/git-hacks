var exec = require('child_process').execSync;
var extend = require('util')._extend;

function isGitAvailable(callback) {
  var env = extend({}, process.env);
  try {
    exec('git --version', {
      env: env
    });
  } catch (ex) {
    return false;
  }
  return true;
}

module.exports = {
  isGitAvailable: isGitAvailable
};
