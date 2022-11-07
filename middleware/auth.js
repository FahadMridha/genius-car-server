// const jwt = require("jsonwebtoken");
// module.exports = function (req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send("Unauthenticated");
//   }

//   // try {
//   const auth = authHeader.split(" ")[1];
//   jwt.verify(auth, process.env.ACESS_TOKEN_SECRET, function (err, decoded) {
//     if (err) {
//       res.status(403).send("invalid token");
//     }
//     req.decoded = decoded;
//     next();
//   });
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(403).send("invalid token");
//   }
// };
