Template.portfolio.rendered = function() {
  var Home = $("#home"),
    Contact = $("#contact"),
    Portfolio = $("#portfolio");

  var tw = function(params) {
    var opts = {
      scale: params.scale,
      force3D: true,
      ease: Power4.easeIn,
      backgroundColor: params.bg || "rgb(255,182,0)",
      onComplete: function() {
        $(".interchange").css({
          width: "99%"
        }).css({
          width: "100%"
        })
      }
    };

    console.log(opts)

    return TweenLite.to(params.e, 1.1, opts)
  }


  $('.nav-home').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 1,
      bg: "rgb(254,79,238)"
    })
    tw({
      e: "#contact",
      scale: .4,
      // top: "6vh",
      opacity: 1,
      // bg: "rgb(254,79,238)",
      bg: "transparent",
    })
    tw({
      e: "#portfolio",
      scale: .1111,
      // bg: "rgb(254,79,238)"
      bg: "transparent",
      // top: "12vh"
    });
  });

  $('.nav-contact').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 2.8,
      opacity: 0,
      bg: "rgb(119, 196, 250)"
    })
    tw({
      e: "#contact",
      scale: 1,
      // top: 0,
      opacity: 1,
      bg: "rgb(119, 196, 250)"
    })
    tw({
      e: "#portfolio",
      scale: .4,
      bg: "rgb(119, 196, 250)"
    });
  });

  $('.nav-portfolio').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 2.8,
      opacity: 0,
      bg: "rgb(17, 189, 66)"
    });
    tw({
      e: "#contact",
      scale: 2.8,
      // top: "6vh",
      opacity: 0,
      bg: "rgb(17, 189, 66)"
    })
    tw({
      e: "#portfolio",
      scale: 1,
      bg: "rgb(17, 189, 66)"
    });
  });


  var svg = $("svg"),
    li = $(".interchanger li"),
    h1 = $(".interchange")
  blurNode = $("feGaussianBlur");





  // CSSPlugin.defaultTransformPerspective = 600;
  // // TweenLite.set([svg, kiwi], {
  // //   rotationX: 0
  // // });

  // tl.staggerFromTo(li, 1, {
  //   scale: .1,
  //   visibility: "visible",
  //   ease: Bounce.easeInOut
  // }, "+=5")

  // tl.timeScale(4) // try 4 for super speed!


}