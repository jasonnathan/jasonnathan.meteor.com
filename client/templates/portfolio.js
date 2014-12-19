Template.portfolio.rendered = function() {
  var Home = $("#home"),
    Contact = $("#contact"),
    Portfolio = $("#portfolio");

  var tw = function(params) {
    var opts = {
      scale: params.scale,
      force3D: true,
      ease: Power4.easeIn
    };

    console.log(opts)

    return TweenLite.to(params.e, 1.1, opts)
  }


  $('.nav-home').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 1
    })
    tw({
      e: "#contact",
      scale: .4,
      // top: "6vh",
      opacity: 1
    })
    tw({
      e: "#portfolio",
      scale: .1111,
      // top: "12vh"
    });
  });

  $('.nav-contact').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 2.5,
      opacity: 0
    })
    tw({
      e: "#contact",
      scale: 1,
      // top: 0,
      opacity: 1
    })
    tw({
      e: "#portfolio",
      scale: .4,
      // top: "12vh"
    });
  });

  $('.nav-portfolio').click(function(e) {
    e.preventDefault();
    tw({
      e: "#home",
      scale: 2.5,
      opacity: 0
    });
    tw({
      e: "#contact",
      scale: 2.5,
      // top: "6vh",
      opacity: 0
    })
    tw({
      e: "#portfolio",
      scale: 1,
      // top: "6vh"
    });
  });
}