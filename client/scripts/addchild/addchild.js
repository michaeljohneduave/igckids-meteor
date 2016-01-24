Template.addchild.created = function () {
  Session.setDefault("currentPage", 0);
  Session.setDefault("forms", {
    firstName : null,
    middleName : null,
    lastName : null,
    birthday : null,
    gender : null,
    area : null,
    school : null,
    gradeLevel : null,
    academicAbilities : [],
    favouriteSubjects : [],
    careerChoice : null,
    interests : [],
    livingWith : [],
    livingConditions : [],

    fatherName : null,
    motherName : null,
    siblings : [],

    isImmunized : false,
    immunizations : [],
    healthStatus : null,
    hasSkinCondition : false,
    hasAsthma : false,
    hasBoils : false,
    hasMalnutition : false,
    hasEyeProblems : false,
    hasGoiter : false,
    hasTb : false,
    hasDentalProblems : false,
    hasOtherConditions : [],

    famSkinConditions : [],
    famAsthma : [],
    famBoils : [],
    famMalnutrition : [],
    famEyeProblems : [],
    famGoiter : [],
    famTb : [],
    famTb1 : [],
    famDentalProblems : [],

    isDeleted : false
  });

  Session.setDefault("formError", {
    field : "",
    reason : ""
  });
};

Template.addchild.rendered = function () {
  this.autorun(function () {
    var $container = $('.step'),
      $wizpoint = $('.wiz-point'),
      currentIndex = Session.get("currentPage"),
      index = $wizpoint.index($wizpoint[currentIndex]);

    if (index > currentIndex) {
      $container.addClass('forward');
    } else {
      $container.removeClass('forward');
    }
    $container.attr('data-step', currentIndex);
  });
};

Template.addchild.destroyed = function () {
  Session.set("formError", {
    field : "",
    reason : ""
  });
};

Template.addchild.events({
  "click #nextpage" : function (evt, tmpl) {
    var curPage = Session.get("currentPage"),
      formFields = Session.get("forms"),
      fields = null,
      key = null,
      obj = {};

    if (curPage > 4) {
      return;
    }

    switch(curPage) {
      case 0:
        fields = $(".basic-info-fields");
      break;
      case 1:
        // fields = $(".family-info-fields");
      break;
    }

    _.each(fields, function (field) {
      var id = $(field).attr("id"),
        value = $(field).val();
        if (id) {
          formFields[id] = value;
        } else {
          var dataId = $(field).attr("data-id"),
            val = $(field).val();
          formFields[dataId] = val;
        }
    });

    _.find(formFields, function (v, k) {
      if (_.isEmpty(v) || !v) {
        key = k;
        return true;
      }
      return false;
    });

    Session.set("forms", formFields);

    if (key && curPage === 0) {
      obj.field = key;
      switch(key) {
        case "firstName":
          obj.reason = "Enter kid's first name.";
        break;
        case "middleName":
          obj.reason = "Enter kid's middle name.";
        break;
        case "lastName":
          obj.reason = "Enter kid's last name.";
        break;
        case "birthday":
          obj.reason = "Enter kid's birthday.";
        break;
        case "gender":
          obj.reason = "Select gender.";
        break;
        case "area":
          obj.reason = "Enter area."
        break;
        case "school":
          obj.reason = "Enter school attended.";
        break;
        case "gradeLevel":
          obj.reason = "Enter grade level.";
        break;
        case "academicAbilities":
          obj.reason = "Add academic abilities."
        break;
        case "favouriteSubjects":
          obj.reason = "Add favourite subjects."
        break;
        case "careerChoice":
          obj.reason = "Enter career choice.";
        break;
        case "interests":
          obj.reason = "Add interests.";
        break;
        case "livingWith":
          obj.reason = "Add people living with the kid."
        break;
        case "livingConditions":
          obj.reason = "Add living conditions of the kid."
        break;
      }

      if (obj.reason) {
        $("#" + key).focus();
        return Session.set("formError", obj);
      }
    } else if (curPage === 1) {
      var files = Session.get("files");
      files = files.map(function (file) {
        return file.file;
      });
      if (files.length) {
        Cloudinary.upload(files, function (err, res) {
          console.log(err, res);
        });
      }
    }

    if (curPage === 2) {
      var images = Session.get("imageUrls");

      _.extend(formFields, {
        images : images
      });
      formFields.birthday = new Date(formFields.birthday);
      Children.insert(formFields);

      return console.log("Done");
    }

    ++curPage;
    Session.set("currentPage", curPage);
  },
  "click #prevpage" : function (evt, tmpl) {
    var curPage = Session.get("currentPage");
    --curPage;
    if (curPage < 0) {
      return;
    }
    Session.set("currentPage", curPage);
  }
});

Template.addchild.helpers({
  currentPage : function () {
    var page = Session.get("currentPage");
    switch (page) {
      case 0:
        page = "basic";
      break;
      case 1:
        page = "uploadmedia";
        // page = "family";
      break;
      case 2:
        page = "health";
      break;
      case 3:
        page = "sponsorship";
      break;
      case 4:
        page = "uploadmedia";
      break;
    }
    return page;
  },

  showPrevBtn : function () {
    var page = Session.get("currentPage");
    return page === 0 ? "hide" : "";
  },

  nextBtnVal : function () {
    var page = Session.get("currentPage");
    return page === 1 ? "Add" : "Next";
  },

  nextBtnValHide : function () {
    var page = Session.get("currentPage");
    return page === 1 ? "hide" : "";
  },

  formFields : function () {
    var x = Session.get("forms");
    console.log(x);
    return ;
  }
});
