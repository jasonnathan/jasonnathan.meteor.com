Meteor.startup(function() {

  WebFont.load({
    google: {
      families: ['La+Belle+Aurore::latin', 'Shadows+Into+Light+Two::latin', 'Josefin+Slab::latin']
    },
    active: function() {
      FitTheText();
      var li = $(".interchanger li"),
        height = 0;

      setTimeout(function() {
        height = li.find('h1').css("height");
        leftHeaders = $(".leftBar .interchange"),
        rightHeaders = $(".rightBar .interchange"),
        leftTl = new TimelineMax({
          repeat: -1
        }),
        rightTl = new TimelineMax({
          repeat: -1
        }),
        animateNoun = function(parentElement) {
          var tl = new TimelineLite({
              onStart: FitTheText
            }),
            text = parentElement,
            chars = parentElement.find('div').toArray(),
            centerIndex = Math.floor(chars.length / 2),
            i;
          for (i = 0; i < chars.length; i++) {
            tl.from(chars[i], 1.8, {
              opacity: 0,
              rotationY: 240,
              rotationX: 45,
              force3D: true,
              textShadow: "15px 15px 10px #000",
              ease: Power2.easeOut
            }, i * 0.3);
          }
          tl.staggerFromTo(chars, 4, {
            z: 1000,
            textShadow: "5px 5px 5px #666",
            // scale: 2,
            visibility: "visible"
          }, {
            z: -500,
            scale: 1,
            rotationZ: 0,
            textShadow: "2px 2px 15px #fff",
            ease: Power2.easeOut
          }, .1, .1);

          tl.staggerTo(chars, 1.5, {
            rotationZ: 90,
            force3D: true,
            ease: Bounce.easeOut
          }, .1, 3);

          tl.staggerTo(chars, 1.5, {
            transformOrigin: "center -1000px",
            // // rotationY: 360,
            // // rotationX: 180,
            // rotationZ: 90,
            autoAlpha: 0,
            force3D: true,
            // scale: .1,
            ease: Power4.easeInOut
          }, .5, 5);
          return tl;
        };

        TweenLite.set($(".interchanger"), {
          height: height
        })
        TweenLite.set(li, {
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          height: height,
          onStart: FitTheText
        });
        // leftHeaders.each(function() {
        //   var t = $(this);
        //   t.html(t.html().replace(/./g, "<div style='display:inline-block'>$&</div>").replace(/\s/g, " "));
        //   leftTl.add(animateNoun(t));
        // });
        // rightHeaders.each(function() {
        //   var t = $(this);
        //   t.html(t.html().replace(/./g, "<div style='display:inline-block'>$&</div>").replace(/\s/g, " "));
        //   rightTl.add(animateNoun(t));
        // });
      }, 1);
    }
  });

})