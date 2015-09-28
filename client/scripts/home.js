Template.home.created = function () {

}

Template.home.rendered = function () {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 20,
    gutter : 45
  });
  var imgLoad = imagesLoaded('.homepage-grid--photo');
  imgLoad.on( 'done', function( instance ) {
    $('.grid').removeClass("invisible");
    console.log("done")
  });
}

Template.home.destroyed = function () {

}

Template.home.events({

});

Template.home.helpers({
  ListImages: function () {
    return Images.find();
  }
})

