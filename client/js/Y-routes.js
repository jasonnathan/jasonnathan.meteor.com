Router.configure({
  layoutTemplate: 'kubeLayout'
});

Router.route('/', {
  name: 'root',
  layoutTemplate: 'kubeLayout',
  onAfterAction: function() {
    SEO.set({
      title: 'Freelance Developer, Designer & Consultant. I create apps for Web, Mobile & Desktops',
      rel_author: 'https://www.google.com/+JasonNathan',
      meta: {
        description: 'I am a Singaporean Freelancer, A WordPress Expert, an Advanced JavaScript Programmer & I absolutely love UI/UX Development!',
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
        description: 'I am a Singaporean Freelancer, A WordPress Expert, an Advanced JavaScript Programmer & I absolutely love UI/UX Development!',
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
  }
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

SEO.config({
  title: 'Freelance Developer, Designer & Consultant. I create apps for Web, Mobile & Desktops',
  rel_author: 'https://www.google.com/+JasonNathan',
  meta: {
    description: 'I am a Singaporean Web Developer, a WordPress Expert, an Advanced JavaScript Programmer. I absolutely love UI/UX Development! I have created social networks, booking apps & security software',
    classification: 'I am a Singaporean Web Developer. I create cross-platform solutions spanning security-based apps to Social Networks. I write PHP, HTML, CSS, JavaScript & half a dozen other languages. I use Meteor.js, WordPress, MySQL, MongoDB and many other frameworks.',
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