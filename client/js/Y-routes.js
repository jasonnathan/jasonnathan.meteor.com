Router.route('/start', {
  // The name of the route.
  // Used to reference the route in path helpers and to find a default template
  // for the route if none is provided in the "template" option. If no name is
  // provided, the router guesses a name based on the path '/post/:_id'
  name: 'start',

  // A layout template to be used with this route.
  // If there is no layout provided, a default layout will
  // be used.
  action: function() {
    return HomeAnimation.jason();
  }
});

Router.route('/links', {
  name: 'links',
  action: function() {
    return HomeAnimation.links();
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
  action: function() {
    return HomeAnimation.works();
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