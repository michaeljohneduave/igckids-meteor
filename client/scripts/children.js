Template.children.created = function () {

}

Template.children.rendered = function () {
  var $grid = $('.grid').isotope({
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
    $('.grid').isotope({
      itemSelector : ".children-grid-item",
      layoutMode: 'masonry',
      transitionDuration: "0.2s",
    });
  });
}

Template.children.destroyed = function () {

}

Template.children.events({
  "click .children-grid-item" : function (evt, tmpl) {
    Router.go("child", {_id : evt.target.id});
  }
});

Template.children.helpers({
  ListChildren : function () {
    return Children.find({}, {reactive : false});
  },

  ListImages : function (images, id) {
    return {
      src : images[0].secure_url
    };
  }
})

