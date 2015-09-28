Template.addchild.created = function () {
};

Template.addchild.rendered = function () {

  this.$("#birthday").datetimepicker({
    format : "MMM-DD-YYYY"
  });
  this.$("#academicAbility").select2({
    placeholder : "Enter items to add academic abilities",
    tags : [""]
  });
  this.$("#favSubject").select2({
    placeholder : "Enter items to add favourite subjects",
    tags : [""]
  });
  this.$("#interests").select2({
    placeholder : "Enter items to add interests",
    tags : [""]
  });
  this.$("#livingWith").select2({
    placeholder : "Enter people living with child (e.g. mother, father)",
    tags : ["father", "mother"]
  });
  this.$("#livingConditions").select2({
    placeholder : "Enter living conditions",
    tags : [""]
  });
  this.$("#immunization").select2({
    placeholder : "Add immunizations"
  });
  this.$("#healthStatus").select2({
    placeholder : "Select status"
  });
  this.$("#others").select2({
    placeholder : "Select status",
    tags : [""]
  });

  this.$("#skinConditionFamily, \
    #asthmaFamily, \
    #boilsFamily, \
    #malnutritionFamily, \
    #eyeProblemsFamily, \
    #goiterFamily, \
    #tbFamily, \
    #tbOneFamily, \
    #dentalProblemsFamily").select2({
    placeholder : "Specify who",
    tags : [""]
  });
};

Template.addchild.destroyed = function () {

};

Template.addchild.events({
  "click #basicInfoNextBtn" : function (evt, tmpl) {
    $('.nav-tabs a[href="#family"]').tab('show');
  },

  "click #healthNextBtn" : function (evt, tmpl) {
    $('.nav-tabs a[href="#family"]').tab('show');
  }
});