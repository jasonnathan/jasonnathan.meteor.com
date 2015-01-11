Template.home.rendered = function() {
  var li = $(".interchanger li"),
    Interchange = function() {
      var leftHeaders = $(".leftBar .interchange"),
        rightHeaders = $(".rightBar .interchange"),
        sideBarTL = new TimelineMax({
          repeat: -1,
          align: "start"
        }),
        setHeights = _.debounce(function(e) {
      return setTimeout(function() {
        FitTheText();
        var height = li.find('h1').eq(0).css("height");
        TweenLite.set($(".interchanger"), {
          height: height
        })
        // TweenLite.set($(".interchange > div"), {
        //   lineHeight: height
        // })
        TweenLite.set(li, {
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          height: height,
          onUpdate: FitTheText
        });
      }, 1)
        }, 500, true),
        animateNoun = function(parentElement, reverse) {
          var tl = new TimelineLite({
              // onComplete: FitTheText,
              delay: 1
            }),
            text = parentElement,
            chars = parentElement.find('div').toArray(),
            centerIndex = Math.floor(chars.length / 2),
            i;
          reverse && chars.reverse();
          for (i = 0; i < chars.length; i++) {
            tl.from(chars[i], 1.8, {
              opacity: 0,
              scale: 1.1,
              // rotationY: 240,
              // rotationX: -45,
              // transformOrigin: "-1000px 0",
              force3D: true,
              textShadow: "15px 15px 30px #000",
              ease: Power2.easeOut
            }, i * 0.3);
          }
          tl.staggerFromTo(chars, 4, {
            z: 1000,
            // textShadow: "-1px -1px 1px #666",
            scale: 1,
            visibility: "visible"
          }, {
            z: -500,
            scale: 1,
            rotationZ: 0,
            // transformOrigin: "0 0",
            ease: Power2.easeOut
          }, .1, .1);

          tl.staggerTo(chars, 1.5, {
            // rotationZ: zRotate || 45,
            textShadow: "1px 1px 5px #aaa",
            force3D: true,
            textShadow: "none",
            ease: Bounce.easeIn
          }, .1, 3);

          tl.staggerTo(chars, 2, {
            // transformOrigin: "0 -100vh",
            rotationY: 360,
            rotationX: 180,
            rotationZ: 90,
            autoAlpha: 0,
            force3D: true,
            scale: .1,
            ease: Power4.easeInOut
          }, .1, 7);
          //tl.repeat(-1);
          return tl;
        },
        i = 0,
        t;

      for (i = 0; i <= 2; i++) {
        sideBarTL.addLabel("left-start-" + i);
        t = leftHeaders.eq(i);
        t.html(t.html().replace(/./g, "<div style='display:inline-block'>$&</div>").replace(/\s/g, " "));
        sideBarTL.add(animateNoun(t));
        t = rightHeaders.eq(i);
        t.html(t.html().replace(/./g, "<div style='display:inline-block'>$&</div>").replace(/\s/g, " "));
        sideBarTL.add(animateNoun(t, true), "left-start-" + i);

      }
      window.addEventListener("resize", setHeights, false);
      setHeights();
    }

  setTimeout(Interchange, 1);
  FitTheText();
  // var ul = $("#testimonials"),
  //   lists = ul.find("li"),
  //   tl = new TimelineLite({
  //     repeat: -1
  //   });
  // tl.add(TweenLite.to($("#testimonials"), 1, {
  //   scrollTo: {
  //     x: 90,
  //     autoKill: false
  //   },
  //   ease: Power2.easeOut
  // }), "+=3");
  // lists.each(function(index) {
  //   var current = $(this).width() * index;
  //   console.log(current);

  //   if (!!current) {
  //     tl.add(TweenLite.to($("#testimonials"), 1, {
  //       scrollTo: {
  //         x: current,
  //         autoKill: false
  //       },
  //       ease: Power2.easeOut
  //     }), "+=3");
  //   }
  // })
};