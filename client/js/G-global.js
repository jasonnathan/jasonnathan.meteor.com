FitTheText = function() {
  $('#mainNav a').fitText(.75, {
    // minFontSize: '9px',
    // maxFontSize: '50px'
  });
  $('.Person').fitText(2.4, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  $('.freelancerBar h2').fitText(.55, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  $('.interchange').fitText(.43, {
    // minFontSize: '10px',
    // maxFontSize: '185px'
  });
  $('.headerDesignation').fitText(.6, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  $('#emailTelephone a').fitText(2, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  $('a.a_demo_three').fitText(2, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  $('footer').fitText(6, {
    // minFontSize: '10px',
    // maxFontSize: '45px'
  });
  // a.a_demo_three
  // $('.mainContentRole').fitText(1.1, {
  //   minFontSize: '10px',
  //   // maxFontSize: '185px'
  // });
  // $('.salesPitch p').fitText(1, {
  //   minFontSize: '14px',
  //   maxFontSize: '28px'
  // });

};

// Create the listener function
//var updateLayout = _.debounce(FitTheText, 10); // Maximum run of once per 500 milliseconds

// Add the event listener
//window.addEventListener("resize", updateLayout, false);