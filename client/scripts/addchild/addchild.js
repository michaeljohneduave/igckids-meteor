Template.addchild.created = function () {
  this.currentPage = new ReactiveVar(0);
  this.formFields = new ReactiveVar({
    firstName : null,
    middleName : null,
    lastName : null,
    birthday : null,
    gender : null,
    area : null,
    school : null,
    gradeLevel : null,
    academicAbilities : [],
    favouriteSubject : [],
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
    famDentalProblems : []
  });
};

Template.addchild.rendered = function () {
  var that = this;

  this.autorun(function () {
    var $container = $('.step'),
      $wizpoint = $('.wiz-point'),
      currentIndex = that.currentPage.get(),
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
};

Template.addchild.events({
  "click #nextpage" : function (evt, tmpl) {
    var curPage = tmpl.currentPage.get(),
      fields = null,
      obj = {};

    ++curPage;
    if (curPage > 4) {
      return;
    }

    switch(curPage) {
      case 1:
        fields = $(".basic-info-fields");
      break;
      case 2:
        fields = $(".family-info-fields");
      break;
    }

    _.each(fields, function (field) {
      var id = $(field).attr("id"),
        value = $(field).val();
        if (id) {
          console.log(id, value);
        } else {
          var dataId = $(field).attr("data-id"),
            val = $(field).val();
          console.log(dataId, val);
        }
    });
    tmpl.currentPage.set(curPage);
  },
  "click #prevpage" : function (evt, tmpl) {
    var curPage = tmpl.currentPage.get();
    --curPage;
    if (curPage < 0) {
      return;
    }
    tmpl.currentPage.set(curPage);
  }
});

Template.addchild.helpers({
  currentPage : function () {
    var page = Template.instance().currentPage.get();
    switch (page) {
      case 0:
        page = "basic";
      break;
      case 1:
        page = "family";
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
    var page = Template.instance().currentPage.get();
    return page === 0 ? "hide" : "";
  },

  nextBtnVal : function () {
    var page = Template.instance().currentPage.get();
    return page === 4 ? "Add" : "Next";
  }
});
