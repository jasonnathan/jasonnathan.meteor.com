Meteor.startup(function() {

  var head = document.getElementsByTagName('head')[0];

  //Generate a style tag
  var style = document.createElement('link');
  style.type = 'text/css';
  style.rel = "stylesheet";
  style.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css';

  head.appendChild(style);

  var mainHeader = function(text) {
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


      var headerTexts = [$('#jasonHeader'), $('#contactHeader'), $('#worksHeader')],
        menuItems = [$('#jasonNav'), $('#contactNav'), $('#worksNav')]
        //setTimeout(Interchange, 1);

      _.each(menuItems, function(element) {
        var cText = element.text().toLowerCase();
        cText === "works" && !Reveal.loaded && Reveal.initialize(HomeAnimation.revealOpts);
        cText = cText === 'start' ? 'jason' : cText;

        if (HomeAnimation.hasOwnProperty(cText) && typeof HomeAnimation[cText] === "function") {
          element.on("click", function(e) {
            e.preventDefault();
            // e.stopPropogation();
            HomeAnimation[cText]();
            HomeAnimation.removeActive(element);
            return false;
          });
        }
      });

      _.each(headerTexts, function(element) {
        element
          .css('cursor', 'pointer')
          .on("click", function() {
            return $("#" + element[0].id.toLowerCase().slice(0, -6) + "Nav").click();
          });
      });
    }
  });

  addthis_config = {
    "data_track_addressbar": true
  };

  SEO.config({
    title: 'Freelance Developer, Designer & Consultant. I create apps for Web, Mobile & Desktops',
    rel_author: 'https://www.google.com/+JasonNathan',
    meta: {
      description: 'I am a Singaporean Web Developer, a WordPress Expert, an Advanced JavaScript Programmer. I absolutely love UI/UX Development! I have created social networks, booking apps & security software',
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
      title: 'Freelance Developer, Designer & Consultant. I create apps for Web, Mobile & Desktops',
      description: 'I am a Singaporean Web Developer, a WordPress Expert, an Advanced JavaScript Programmer. I absolutely love UI/UX Development! I have created social networks, booking apps & security software',
      site_name: 'Jason Nathan',
      image: 'http://www.jasonnathan.com/images/og-jasonnathan-com.jpg',
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