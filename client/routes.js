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
        Meteor.subscribe("children_pub", {})
      ]
    }
	});

	this.route("addchild", {
		path : "add",
		template : "addchild"
	});

  this.route("dashboard", {
    path : "dashboard",
    template : "dashboard"
  });

  this.route("sample", {
    path : "sample",
    template : "sample"
  });

  this.route("child", {
    path : "child/:_id",
    template : "child",
    data : function () {
      return Children.findOne({_id : this.params._id});
    },
    waitOn : function () {
      return [
        Meteor.subscribe("children_pub", {_id : this.params._id})
      ]
    }
  });

  this.route("editchild", {
    path : "child/:_id/edit",
    template : "addchild",
    waitOn : function () {
      return [
        Meteor.subscribe("children_pub", {_id : this.params._id})
      ]
    }
  });
});

// Router.onBeforeAction(function () {
//   if (!Meteor.userId()) {
//     this.render("home");
//   } else {
//     this.next();
//   }
// });
