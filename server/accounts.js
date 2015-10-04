Accounts.onCreateUser(function (options, user) {
  console.log(options);
  console.log(user);
  _.extend(user, options);

  if (user.services && !_.isEmpty(user.services.facebook)) {
    Roles.addUsersToRoles(user._id, "FB_USERS")
  }

  return user;
});
