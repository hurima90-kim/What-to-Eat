const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증처리
  // bring token from client cookie
  let token = req.cookies.x_auth;

  // find user after token 복호화
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });

  // 유저가 있으면 인증 ok
  // 유저가 없으면 인증 no
};

module.exports = { auth };
