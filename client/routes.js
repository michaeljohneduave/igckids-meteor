Router.configure({
  layoutTemplate : "appLayout",
  yieldTemplates : {
    "header" : {to : "header"},
    "footer" : {to : "footer"}
  },
	notFoundTemplate : "notfound",
	loadingTemplate : "loading"
});

Router.map(function () {

	this.route("home", {
		path : "/",
		template : "home",
    waitOn: function () {
      return [
        Meteor.subscribe("images_pub", {})
      ]
    }
	});

	this.route("addchild", {
		path : "add",
		template : "addchild"
	});

});
