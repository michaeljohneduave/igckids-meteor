Router.configure({
	notFoundTemplate : "notfound",
	loadingTemplate : "loading"
});

Router.map(function () {

	this.route("home", {
		path : "/",
		template : "home"
	});

	this.route("addchild", {
		path : "add",
		template : "addchild"
	});

});
