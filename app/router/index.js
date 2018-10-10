module.exports = app => {
  const user = require("../routes/user");
  const login = require("../routes/login");

  app.use("/login", login);
  app.use("/kullanici", user);
};
