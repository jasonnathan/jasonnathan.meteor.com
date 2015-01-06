Meteor.startup(function() {
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
  };
  WebFont.load({
    google: {
      families: ['Carme::latin', 'Voltaire::latin'],
      text: ""
    },
    active: function() {
      FitTheText();
      if (typeof addthis !== 'undefined')
        addthis.toolbox(".addthis_toolbox");

      headerTexts = [$('#jasonHeader'), $('#contactHeader'), $('#worksHeader')];
      menuItems = [$('#jasonNav'), $('#contactNav'), $('#worksNav')]
      //setTimeout(Interchange, 1);

      _.each(menuItems, function(element) {
        var cText = element.text().toLowerCase();
        cText === "works" && Reveal.initialize(HomeAnimation.revealOpts);
        if (cText === 'start')
          cText = "jason";

        if (HomeAnimation.hasOwnProperty(cText) && typeof HomeAnimation[cText] === "function") {
          element.on("click", function(e) {
            e.preventDefault();
            HomeAnimation[cText]();
            HomeAnimation.removeActive(element);
            return false;
          });
        }
      });

      _.each(headerTexts, function(element) {
        var cText = element.text().toLowerCase();
        cText === "works" && Reveal.initialize(HomeAnimation.revealOpts);

        if (HomeAnimation.hasOwnProperty(cText) && typeof HomeAnimation[cText] === "function") {
          element.on("click", HomeAnimation[cText]);
          if (!!mainHeader)
            return mainHeader(element);
        }
      });
    }
  });

  addthis_config = {
    "data_track_addressbar": true
  };

  return SEO.config({
    title: 'Jason Nathan | Developer, Designer, Administrator, Consultant, Singapore',
    rel_author: 'https://www.google.com/+JasonNathan',
    meta: {
      description: 'Singapore Freelance Designer, Developer & E-marketing Consultant. WordPress Expert, Advanced JavaScript Programmer & absolutely loves Linux!',
      classification: 'I am a Singaporean Freelancer. I create cross-platform solutions spanning security-based apps to Social Networks. I write PHP, HTML, CSS, JavaScript & half a dozen other languages. I use Meteor.js, WordPress, MySQL, MongoDB and many other frameworks.',
      geography: 'Singapore',
      city: 'Singapore',
      language: 'English',
      copyright: '2015 Jason Nathan',
      author: 'Jason Nathan',
      publisher: 'Jason Nathan',
      distribution: 'global',
      robots: 'Index, Follow'
    },
    og: {
      title: 'Jason Nathan | Developer, Designer, Administrator, Consultant, Singapore',
      description: 'Singapore Freelance Designer, Developer & E-marketing Consultant. WordPress Expert, Advanced JavaScript Programmer & absolutely loves Linux!',
      site_name: 'Jason Nathan',
      image: 'http://www.jasonnathan.com/images/og-jason.png',
      type: 'website'
    },
    fb: {
      admins: '1414137093'
    },
    twitter: {
      card: 'summary',
      site: '@jason_nathan',
      creator: '@jason_nathan'
    }
  });

});