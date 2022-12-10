import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];
  const bearerHeader = req.headers['authorization']

  if (!bearerHeader) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    // const decoded = jwt.verify(token, "secret");
    const bearer = bearerHeader.split(" ");
    const beaderToken = bearer[1];
    const decoded = jwt.verify(beaderToken, "secret");
    req.userEmail = decoded.email;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
