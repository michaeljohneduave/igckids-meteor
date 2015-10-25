Template.health.created = function () {

};

Template.health.rendered = function () {
  $("#immunizations").select2({
    placeholder : "Add immunizations",
  });

  $("#hasOtherConditions").select2({
    placeholder : "Other conditions",
    tags : true
  });

  $("#famSkinConditions, \
    #famAsthma, \
    #famBoils, \
    #famMalnutrition, \
    #famEyeProblems, \
    #famGoiter, \
    #famTb, \
    #famTb1, \
    #famDentalProblems").select2({
    placeholder : "Specify who",
    tags : true
  });
};

Template.health.events({

});

Template.health.helpers({

});
