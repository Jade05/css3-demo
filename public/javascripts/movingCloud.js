function caculateSinValue(posX) {
  return Math.sin(posX);
}
var CloudMove = function() {
  var left = 0;
  var top = 0;
  var step = 45;
  var factor = 30;   
  var moveDuration = 300;
  var width = null;
  var height = null;
  var minLeft = null;
  var maxLeft = null;
  this.init = function(eleContainer, eleTarget) {
    width = eleContainer.width();
    height = eleContainer.height();
    minLeft = 0;
    maxLeft = width - eleTarget.width();
    this.moveToRight(eleTarget);
  };
  this.moveToRight = function(moveTarget) {
    var that = this;
    var clockRight = setInterval(function() {
      left = left + step;
      top = factor * caculateSinValue(left);
      if (left > maxLeft) {
        clearInterval(clockRight);
        that.moveToLeft(moveTarget);
        return;
      }
      moveTarget.css('left', left + 'px');
      moveTarget.css('top', top + 'px');
      }, moveDuration);
  };
  this.moveToLeft = function(moveTarget) {
    var that = this;
    var clockLeft = setInterval(function() {
      left = left - step;
      top = factor * caculateSinValue(left);
      if (left < 0) {
        clearInterval(clockLeft);
        that.moveToRight(moveTarget);
        return;
      }
      moveTarget.css('left', left + 'px');
      moveTarget.css('top', top + 'px' );
    }, moveDuration);
  };
};
$(function() {
  var cloud = new CloudMove();
  cloud.init($('.clouds'), $('#cloud'));
});