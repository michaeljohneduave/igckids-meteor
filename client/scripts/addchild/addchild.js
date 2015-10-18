Template.addchild.created = function () {
  this.currentPage = new ReactiveVar(0);
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
    var curPage = tmpl.currentPage.get();
    ++curPage;
    if (curPage > 4) {
      return;
    }
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
