Template.basic.created = function () {

};

Template.basic.rendered = function () {
  var isEditing = Router.current().route.getName() === "editchild";
  var formFields = isEditing ? Children.findOne({}) : Session.get("forms");

  $("#birthday-field").datetimepicker({
    format : "MMM-DD-YYYY"
  });

  $("#gender").select2({
    placeholder : "Select Gender"
  });

  // $("#gender").select2("val", formFields.gender);

  $("#academicAbilities").tagsinput();
  $("#favouriteSubjects").tagsinput();
  $("#interests").tagsinput();
  $("#livingWith").tagsinput();
  $("#livingConditions").tagsinput();

  _.each(formFields.academicAbilities, function (ability) {
    $("#academicAbilities").tagsinput("add", ability);
  });
  _.each(formFields.favouriteSubjects, function (subject) {
    $("#favouriteSubjects").tagsinput("add", subject);
  });
  _.each(formFields.interests, function (interest) {
    $("#interests").tagsinput("add", interest);
  });
  _.each(formFields.livingWith, function (person) {
    $("#livingWith").tagsinput("add", person);
  });
  _.each(formFields.livingConditions, function (condition) {
    $("#livingConditions").tagsinput("add", condition);
  });

  $(".bootstrap-tagsinput").addClass("select-fields");

};

Template.basic.events({
});

Template.basic.helpers({
  basicInfoFields : function () {
    var isEditing = Router.current().route.getName() === "editchild";
    return isEditing ? Children.findOne({}) : Session.get("forms");
  },

  formError : function (field) {
    var formError = Session.get("formError");
    if (field === formError.field) {
      return {
        errorClass : "has-error",
        hideClass : "",
        reason : formError.reason
      };
    }
    return {
      errorClass : "",
      hideClass : "hide",
      reason : ""
    }
  }
});
