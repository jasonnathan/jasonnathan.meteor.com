  HomeAnimation = {
    tl: new TimelineLite,
    revealOpts: {
      margin: 0,
      center: false,
      embedded: true,
      maxScale: 3.0,
      previewLinks: true,
      // autoSlide: 10e3,
      // mouseWheel: true,
      viewDistance: 3
    },
    removeActive: function(element) {
      $("#mainNav a").each(function() {
        return $(this).removeClass('active');
      });
      element && element.addClass('active');
    },
    tw: function(params) {
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
    },
    jason: function() {
      var ha = HomeAnimation,
        tl = ha.tl,
        tw = ha.tw;
      ha.removeActive($('.nav-home'));

      tl.add(tw({
        e: "#start",
        scale: 1,
      }))
        .add(tw({
          e: "#about",
          scale: .3333,
          // top: 0,
        }), "-=1.1")
        .add(tw({
          e: "#work",
          scale: .1111,
        }), "-=1.1");

      return ha;
    },
    contact: function() {
      var ha = HomeAnimation,
        tl = ha.tl,
        tw = ha.tw;
      ha.removeActive($('.nav-contact'));

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
          scale: .33,
        }), "-=1.1")

      return ha;
    },
    works: function() {
      var ha = HomeAnimation,
        tl = ha.tl,
        tw = ha.tw;
      ha.removeActive($('.nav-portfolio'));

      tl.add(tw({
        e: "#start",
        scale: 7.5,
      }))
        .add(tw({
          e: "#about",
          scale: 7.5,
          // top: 0,
        }), "-=.9")
        .add(tw({
          e: "#work",
          scale: 1,
        }), "-=1.1");

      return ha;
    }
  }


  // var revealOpts = {
  //     margin: 0,
  //     center: false,
  //     embedded: true,
  //     maxScale: 3.0,
  //     previewLinks: true,
  //     autoSlide: 10e3,
  //     // mouseWheel: true,
  //     viewDistance: 5
  //   },
  //   removeActive = function(element) {
  //     $("#mainNav a").each(function() {
  //       return $(this).removeClass('active');
  //     });
  //     element && element.addClass('active');
  //   },
  //   tl = new TimelineLite,
  //   currentWorkScale = .1111,
  //   tw = function(params) {
  //     var opts = {
  //       scale: params.scale,
  //       force3D: true,
  //       ease: Power4.easeIn,
  //       // backgroundColor: params.bg || "rgb(255,182,0)",
  //       onComplete: function() {
  //         $(".interchange").css({
  //           width: "99%"
  //         }).css({
  //           width: "100%"
  //         })
  //       }
  //     };
  //     params.top && (opts.top = params.top);


  //     return TweenLite.to(params.e, 1.1, opts)
  //   };
  // Reveal.initialize(revealOpts);
  // $('.nav-home, #startHeader').click(function(e) {
  //   e.preventDefault();
  //   removeActive($('.nav-home'));
  //   currentWorkScale = .1111;
  //   tl.add(tw({
  //     e: "#start",
  //     scale: 1,
  //   }));
  //   tl.add(tw({
  //     e: "#about",
  //     scale: .3333,
  //     // top: 0,
  //   }), "-=1.1");
  //   tl.add(tw({
  //     e: "#work",
  //     scale: currentWorkScale,
  //   }), "-=1.1");
  // });

  // $('.nav-contact, #aboutHeader').click(function(e) {
  //   e.preventDefault();
  //   removeActive($('.nav-contact'));
  //   currentWorkScale = .33;
  //   tl.add(tw({
  //     e: "#start",
  //     scale: 7.5,
  //   }))
  //     .add(tw({
  //       e: "#about",
  //       scale: 1,
  //       // top: 0,
  //     }), "-=1.1")
  //     .add(tw({
  //       e: "#work",
  //       scale: currentWorkScale,
  //     }), "-=1.1")
  // });

  // $('.nav-portfolio, #workHeader').click(function(e) {
  //   e.preventDefault();
  //   Reveal.initialize(revealOpts);
  //   removeActive($('.nav-portfolio'));
  //   currentWorkScale = 1;
  //   tl.add(tw({
  //     e: "#start",
  //     scale: 7.5,
  //   }));
  //   tl.add(tw({
  //     e: "#about",
  //     scale: 7.5,
  //     // top: 0,
  //   }), "-=.9");
  //   tl.add(tw({
  //     e: "#work",
  //     scale: currentWorkScale,
  //   }), "-=1.1");

  // });