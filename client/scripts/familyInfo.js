Template.familyInfo.created = function () {
  this.sibling_number = new ReactiveVar([]);
}

Template.familyInfo.rendered = function () {

}

Template.familyInfo.destroyed = function () {

}

Template.familyInfo.events({
  "click .sibling-type-brother": function (evt, tmpl) {
    var siblings = tmpl.sibling_number.get();
    siblings.push("Brother");
    tmpl.sibling_number.set(siblings);
  },

  "click .sibling-type-sister": function (evt, tmpl) {
    var siblings = tmpl.sibling_number.get();
    siblings.push("Sister");
    tmpl.sibling_number.set(siblings);
  },

  "click #familyInfoNextBtn": function (evt, tmpl) {
    $('.nav-tabs a[href="#health"]').tab('show');
  }
});

Template.familyInfo.helpers({
  ListSiblings: function () {
    return Template.instance().sibling_number.get();
  }
})
