Meteor.startup(function() {
  /**
Audiowide
★Bubbler One
★Combo
★Croissant One
★Dorsa
★Elsie Swash Caps
★Fredoka One
★Krona One
★Syncopate
 */
  WebFont.load({
    google: {
      families: ['Combo::latin', 'Audiowide::latin', 'Krona+One::latin'],
      text: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./!?()*&^%$#+_-1234567890[]{}"
    },
    active: function() {
      FitTheText();
      var li = $(".interchanger li"),
        mainHeader = function(text) {
          var tl = new TimelineLite({
              // onStart: FitTheText,
              // onComplete: FitTheText
            }),
            i, chars, centerIndex;
          tl.from(text, 1.8, {
            x: (i - centerIndex) * 40,
            opacity: 0,
            ease: Power2.easeOut
          }, i * 0.1);
          tl.fromTo(text, 1, {
            z: 500,
            textShadow: "-2px -2px 1px #fff",
            visibility: "visible"
          }, {
            z: 0,
            textShadow: "-2px -2px 1px rgb(6, 70, 150)",
            ease: SlowMo.ease.config(0.1, 0.9)
          }, 0);

          return tl;
        },
        Interchange = function() {
          var leftHeaders = $(".leftBar .interchange"),
            rightHeaders = $(".rightBar .interchange"),
            sideBarTL = new TimelineMax({
              repeat: -1,
              align: "start"
            }),
            setHeights = _.debounce(function(e) {
              return setTimeout(function() {
                var height = li.find('h1').eq(0).css("height");
                TweenLite.set($(".interchanger"), {
                  height: height
                })
                TweenLite.set($(".interchange,.interchange *"), {
                  lineHeight: parseFloat(height) * 1.2 + "px"
                })
                TweenLite.set(li, {
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  height: height,
                  onComplete: FitTheText
                });
              }, 1)
            }, 500),
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
        };
      setTimeout(Interchange, 1);
      mainHeader($('#startHeader'));
      mainHeader($('#aboutHeader'));
      mainHeader($('#workHeader'));
    }
  });
});