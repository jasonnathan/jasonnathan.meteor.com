Meteor.startup(function() {

  var header = $("svg"),
    items = $("#jason-nathan-header path").toArray(),
    tl = new TimelineLite;

  // TweenLite.set(header, {
  //   rotationX: 90
  // });

  tl.staggerFromTo(items, 2, {
    rotationX: -90,
    translateX: -45,

  }, {
    rotationX: 0,
    translateX: 0,
    force3D: true,
    ease: Bounce.easeOut
  }, .1, 1)

})