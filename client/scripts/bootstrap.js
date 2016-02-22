Meteor.startup(function() {
  Session.setDefault("images", []);

  Accounts.ui.config({
    requestPermissions : {
      facebook : ["public_profile", "email", "user_friends"],
    },
    passwordSignupFields : "USERNAME_OPTIONAL_EMAIL"
  });

  Accounts.config({
    forbidClientAccountCreation : true
  });

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
});

