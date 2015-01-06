Router.configure({
  layoutTemplate: 'normalLayout'
});

Router.route('/', {
  name: 'root',
  layoutTemplate: 'normalLayout',
});


Router.route('/start', {
  name: 'start',
  layoutTemplate: 'googleLayout',
  action: function() {
    this.render("home");
    //return HomeAnimation.jason();
  }
});

Router.route('/contact', {
  name: 'contact',
  layoutTemplate: 'googleLayout',
  action: function() {
    this.render("about");
    //return HomeAnimation.contact();
  },
  onAfterAction: function() {
    SEO.set({
      title: "Contact Links | Jason Nathan - Singapore Web Freelancer",
      meta: {
        'description': "Here are some links to my various online accounts"
      },
      og: {
        'title': "Contact Links | Jason Nathan - Singapore Web Freelancer",
        'description': "Here are some links to my various online accounts"
      }
    });
  }
});

Router.route('/works', {
  name: 'works',
  layoutTemplate: 'googleLayout',
  action: function() {
    this.render("works");
    //return HomeAnimation.works();
  },
  onAfterAction: function() {
    SEO.set({
      title: "Works | Jason Nathan - Singapore Web Freelancer",
      meta: {
        'description': "Have a look at some of my featured work."
      },
      og: {
        'title': "Works | Jason Nathan - Singapore Web Freelancer",
        'description': "Have a look at some of my featured work."
      }
    });
  }
});