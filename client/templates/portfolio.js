Template.work.rendered = function() {
  var Home = $("#start"),
    Contact = $("#contact"),
    Portfolio = $("#work"),
    Current = "home",
    tl = new TimelineLite,
    currentWorkScale = .1111,
    tw = function(params) {
      var opts = {
        scale: params.scale,
        force3D: true,
        ease: Power4.easeIn,
        // backgroundColor: params.bg || "rgb(255,182,0)",
        onComplete: function() {
          $(".interchange").css({
            width: "99%"
          }).css({
            width: "100%"
          })
        }
      };
      params.top && (opts.top = params.top);


      return TweenLite.to(params.e, 1.1, opts)
    };


  $('.nav-home').click(function(e) {
    e.preventDefault();
    currentWorkScale = .1111;
    tl.add(tw({
      e: "#start",
      scale: 1,
    }));
    tl.add(tw({
      e: "#about",
      scale: .3333,
      // top: 0,
    }), "-=1.1");
    tl.add(tw({
      e: "#work",
      scale: currentWorkScale,
    }), "-=1.1");
  });

  $('.nav-contact').click(function(e) {
    e.preventDefault();
    currentWorkScale = .33;
    tl.add(tw({
      e: "#start",
      scale: 7.5,
    }))
      .add(tw({
        e: "#about",
        scale: 1,
        // top: 0,
      }), "-=1.1")
      .add(tw({
        e: "#work",
        scale: currentWorkScale,
      }), "-=1.1")
  });

  $('.nav-portfolio').click(function(e) {
    e.preventDefault();
    currentWorkScale = 1;
    tl.add(tw({
      e: "#start",
      scale: 7,
    }));
    tl.add(tw({
      e: "#about",
      scale: 7,
      // top: 0,
    }), "-=.9");
    tl.add(tw({
      e: "#work",
      scale: currentWorkScale,
    }), "-=1.1");
  });
}