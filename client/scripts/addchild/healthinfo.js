Template.health.created = function () {

};

Template.health.rendered = function () {
  $("#immunization").select2({
    placeholder : "Add immunizations",
    allowClear : true
  });
  $("#healthStatus").select2({
    placeholder : "Select status",
    allowClear : true
  });
  $("#others").select2({
    placeholder : "Select status",
    allowClear : true,
    tags : true
  });

  $("#skinConditionFamily, \
    #asthmaFamily, \
    #boilsFamily, \
    #malnutritionFamily, \
    #eyeProblemsFamily, \
    #goiterFamily, \
    #tbFamily, \
    #tbOneFamily, \
    #dentalProblemsFamily").select2({
    placeholder : "Specify who",
    tags : true
  });
};

Template.health.events({

});

Template.health.helpers({

});
