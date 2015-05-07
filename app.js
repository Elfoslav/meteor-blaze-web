//Example of using Meteor Blaze: https://github.com/meteor/blaze or up to date version: https://github.com/eface2face/meteor-blaze
//Docs: http://meteor.github.io/blaze/docs.html or up to date version: http://docs.meteor.com/#/full/templates_api

counter = new Blaze.Var(0);
Template.hello.helpers({
  hello: function() {
    //escape HTML with Spacebars.SafeString
    return new Spacebars.SafeString('<p>HELLO from Blaze!</p>');
  },
  counter: function() {
    return counter.get();
  },
  names: function() {
    return [ 'Tom', 'Bob', 'Annie' ];
  }
});

Template.hello.events({
  'click button': function(evt) {
    console.log(evt);
    counter.set(counter.get() + 1);
  }
});

//Try reactivity in the JavaScript console
//counter.set(counter.set(counter.get() + 1);
