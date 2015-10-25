Template.basic.created = function () {

};

Template.basic.rendered = function () {
  $("#birthday-field").datetimepicker({
    format : "MMM-DD-YYYY"
  });

  $("#academicAbilities").select2({
    placeholder : "Add academic abilities",
    tags : true
  });
  $("#favSubject").select2({
    placeholder : "Add favourite subjects",
    tags : true
  });
  $("#interests").select2({
    placeholder : "Add interests",
    tags : true
  });
  $("#livingWith").select2({
    placeholder : "Living with child (mother, father)",
    tags : true
  });
  $("#livingConditions").select2({
    placeholder : "Living conditions",
    tags : true
  });
};

Template.basic.events({

});

Template.basic.helpers({

});
