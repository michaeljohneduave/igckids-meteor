Template.kids.created = function () {

}

Template.kids.rendered = function () {
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

Template.kids.destroyed = function () {

}

Template.kids.events({

});

Template.kids.helpers({
  ListImages: function () {
    return Images.find();
  }
})

